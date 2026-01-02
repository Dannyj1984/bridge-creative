import PageLayout from '../components/PageLayout';
import Contact from '../components/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact | Bridge Creative",
  description:
    "Get in touch with Bridge Creative, your local design studio in Stalybridge. Contact us for logo design, branding, digital design, and print design services. We're here to discuss your project, provide quotes, and bring your creative vision to life.",
  openGraph: {
    title: "Contact | Bridge Creative",
    description:
      "Get in touch with Bridge Creative, your local design studio in Stalybridge. Contact us for logo design, branding, digital design, and print design services. We're here to discuss your project, provide quotes, and bring your creative vision to life.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <PageLayout>
      <Contact />
    </PageLayout>
  );
}
