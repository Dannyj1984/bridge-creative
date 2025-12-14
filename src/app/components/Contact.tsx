'use client';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../work/[title]/loading';

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    acceptContact: '',
    name: '',
    email: '',
    message: '',
    phone: ''
  });
  const [formData, setFormData] = useState({
    acceptContact: false,
    name: '',
    email: '',
    message: '',
    phone: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    if (!formData.name || (!formData.email && !formData.phone) || !formData.message) {
      setErrors(prev => ({
        ...prev,
        name: !formData.name ? 'Name is required' : '',
        email: !formData.email && !formData.phone ? 'Email or phone is required' : '',
        message: !formData.message ? 'Message is required' : '',
        phone: !formData.phone ? 'Email or phone is required' : ''
      }));
      toast.error('Please fill in all required fields.', { duration: 5000, position: 'top-right' });
      return;
    }
    if (!formData.acceptContact) {
      setErrors(prev => ({
        ...prev,
        acceptContact: 'Please accept to be contacted'
      }));
      toast.error('Please accept to be contacted', { duration: 5000, position: 'top-right' });
      return;
    }
    try {
      setIsSubmitting(true);
      // Execute reCAPTCHA
      const token = await new Promise<string>((resolve, reject) => {
        if (typeof window === 'undefined' || !window.grecaptcha) {
          reject(new Error('reCAPTCHA not loaded'));
          setIsSubmitting(false);
          return;
        }

        window.grecaptcha.ready(async () => {
          try {
            const token = await window.grecaptcha.execute(
              process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '',
              { action: 'contact_form' }
            );
            resolve(token);
          } catch (error) {
            console.error('reCAPTCHA execution error:', error);
            reject(error);
          }
        });
      });
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: token,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        setIsSubmitting(false);
        if (response.status === 429) {
          throw new Error(responseData.message || 'Too many requests. Please try again later.');
        }
        throw new Error(
          responseData.details
            ? `Verification failed: ${responseData.details.join(', ')}`
            : responseData.error || 'Failed to send message'
        );
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message', { duration: 5000, position: 'top-center' });
    }
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '', acceptContact: false });
    toast.success('Message sent successfully!', { duration: 5000, position: 'top-center' });
    setIsSubmitting(false);
  }

  const getErrorsMessage = (name: string) => {
    if (name === 'name') return 'Name is required';
    if (name === 'email' || name === 'phone') return 'Email or phone is required';
    if (name === 'message') return 'Message is required';
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let { value } = e.target;
    const { name, type } = e.target;
    if (name === 'phone' && /[a-zA-Z]/.test(value)) {
      value = '';
      setErrors(prev => ({ ...prev, phone: 'Phone number must contain only digits' }));
      return;
    }
    if (errors[name as keyof typeof errors]) {
      if (name === 'email' || name === 'phone') {
        setErrors(prev => ({ ...prev, email: '', phone: '' }));
      } else {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
    }
    if (value === '') {
      setErrors(prev => ({ ...prev, [name]: getErrorsMessage(name) }));
    }

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-600">Get in Touch</h2>
        {isSubmitting && <Loading />}
        {!isSubmitting && <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            />
            {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            />
            {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            />
            {errors.phone && <p className="text-red-500 mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            />
            {errors.message && <p className="text-red-500 mt-1">{errors.message}</p>}
          </div>
          <div className="flex items-start gap-2">
            <div
              className="relative flex items-center justify-center w-5 h-5 mt-0.5 cursor-pointer group"
              onClick={() => {
                setFormData(prev => ({
                  ...prev,
                  acceptContact: !prev.acceptContact
                }));
                if (errors.acceptContact) {
                  setErrors(prev => ({ ...prev, acceptContact: '' }));
                }
              }}
            >
              <input
                type="checkbox"
                id="acceptContact"
                name="acceptContact"
                checked={formData.acceptContact}
                onChange={() => { }}
                className="sr-only"
              />
              <div className={`
                absolute inset-0 border-2 rounded transition-all duration-200
                ${formData.acceptContact ? 'border-red-500 bg-red-500' : 'border-gray-300 bg-white'}
                group-hover:border-red-400
              `}>
                <svg
                  className={`
                    w-full h-full stroke-white transition-all duration-200
                    ${formData.acceptContact ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
                  `}
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
            <label
              htmlFor="acceptContact"
              className="text-sm text-gray-700 cursor-pointer select-none"
            >
              I consent to Bridge Creative contacting me regarding my enquiry
            </label>
          </div>
          {errors.acceptContact && <p className="text-red-500 mt-1">{errors.acceptContact}</p>}

          <button
            type="submit"
            className="cursor-pointer w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Send Message
          </button>
        </form>}
      </div>
    </section>
  );
}
