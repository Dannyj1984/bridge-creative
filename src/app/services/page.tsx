
import { Metadata } from 'next';
import PageLayout from '../components/PageLayout';
import Services from '../components/Services';

export const metadata: Metadata = {
  title: "Logo Design in Stalybridge | Professional Logo Designer",
  description:
    "Custom logo design services in Stalybridge for startups and small businesses. Professional branding tailored to your business.",
};

export default function ServicesPage() {
  return (
    <PageLayout>
      <Services />
    </PageLayout>
  );
}
