import PageLayout from '../components/PageLayout';
import Contact from '../components/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact | Bridge Creative",
  description:
    "Contact Bridge Creative, your local design studio in Stalybridge. Get in touch for logo design, branding, and digital media quotes.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Bridge Creative",
    description:
      "Contact Bridge Creative, your local design studio in Stalybridge. Get in touch for logo design, branding, and digital media quotes.",
    url: "https://www.bridgecreative.co.uk/contact",
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
