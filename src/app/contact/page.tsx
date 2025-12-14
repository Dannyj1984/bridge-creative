import PageLayout from '../components/PageLayout';
import Contact from '../components/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact | Bridge Creative",
  description:
    "Contact Bridge Creative for your design needs in Stalybridge.",
};

export default function ContactPage() {
  return (
    <PageLayout>
      <Contact />
    </PageLayout>
  );
}
