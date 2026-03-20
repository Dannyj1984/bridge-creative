import { Metadata } from 'next';
import FastWorkCarousel from '../components/FastWorkCarousel';
import PageLayout from '../components/PageLayout';
import Work from '../components/Work';

export const metadata: Metadata = {
  title: "Our Portfolio | Bridge Creative",
  description:
    "Explore our portfolio of professional design work including logo design, branding, print design, and digital design. See examples of our work in Stalybridge and beyond.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Our Portfolio | Bridge Creative",
    description: "Explore our portfolio of professional design work.",
    url: "https://www.bridgecreative.co.uk/work",
    type: "website",
  }
};

export default function WorkPage() {
  return (
    <PageLayout>
      <FastWorkCarousel />
      <Work />
    </PageLayout>
  );
}
