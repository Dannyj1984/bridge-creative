import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { headers } from 'next/headers';

// Simple in-memory store for rate limiting
interface RateLimit {
  count: number;
  firstRequest: number;
}

const rateLimits = new Map<string, RateLimit>();

// Rate limit configuration
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const MAX_REQUESTS = 5;

// Helper function to get client IP
async function getClientIp(): Promise<string> {
  const headersList = await headers();
  const forwardedFor = headersList.get('x-forwarded-for');
  const realIp = headersList.get('x-real-ip');
  
  if (forwardedFor) {
    return forwardedFor.split(',')[0];
  }
  
  if (realIp) {
    return realIp;
  }
  
  return 'unknown';
}

// Check rate limit for an IP
function checkRateLimit(ip: string): { allowed: boolean; resetTime?: Date } {
  const now = Date.now();
  const rateLimit = rateLimits.get(ip);

  if (!rateLimit) {
    // First request from this IP
    rateLimits.set(ip, { count: 1, firstRequest: now });
    return { allowed: true };
  }

  // Check if the window has expired
  if (now - rateLimit.firstRequest > RATE_LIMIT_WINDOW) {
    // Reset the window
    rateLimits.set(ip, { count: 1, firstRequest: now });
    return { allowed: true };
  }

  // Check if under the limit
  if (rateLimit.count < MAX_REQUESTS) {
    rateLimits.set(ip, { ...rateLimit, count: rateLimit.count + 1 });
    return { allowed: true };
  }

  // Rate limit exceeded
  const resetTime = new Date(rateLimit.firstRequest + RATE_LIMIT_WINDOW);
  return { allowed: false, resetTime };
}

export async function POST(request: Request) {
  try {
    // Check rate limit
    const clientIp = await getClientIp();
    const rateLimitCheck = checkRateLimit(clientIp);
    

    if (!rateLimitCheck.allowed) {
      return new Response(JSON.stringify({
        error: 'Rate limit exceeded',
        resetTime: rateLimitCheck.resetTime,
        message: `Too many requests. Please try again after ${rateLimitCheck.resetTime?.toLocaleTimeString()}`
      }), {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'X-RateLimit-Reset': rateLimitCheck.resetTime?.toISOString() || ''
        }
      });
    }

    
    const data = await request.json();
    const { name, email, phone, message, recaptchaToken } = data;

    // Verify reCAPTCHA token
    if (!recaptchaToken) {
      return new Response(JSON.stringify({ error: 'reCAPTCHA verification required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY || '',
        response: recaptchaToken,
        remoteip: clientIp
      }).toString()
    });

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return new Response(JSON.stringify({ 
        error: 'reCAPTCHA verification failed',
        details: recaptchaData['error-codes'] || []
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Create Gmail transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      throw verifyError;
    }

    // Prepare email content with better formatting
    const mailOptions = {
      from: `"The bridge creative" <${process.env.SMTP_USER}>`, // Use authenticated Gmail address
      to: process.env.ADMIN_TO_EMAIL,
      replyTo: email || process.env.ADMIN_TO_EMAIL, // Allow direct reply to customer if they provided email
      subject: `New Contact from website`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email || 'Not provided'}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <div style="margin-top: 20px;">
              <h3 style="color: #374151;">Message:</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <p style="color: #6b7280; font-size: 0.875rem; margin-top: 20px;">
            This email was sent from the bridge creative contact form.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email || 'Not provided'}
Phone: ${phone || 'Not provided'}

Message:
${message}

Sent from The Bridge Creative contact form
      `.trim(),
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send message' },
      { status: 500 }
    );
  }
}
