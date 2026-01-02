import { Metadata } from 'next';
import FastWorkCarousel from '../components/FastWorkCarousel';
import PageLayout from '../components/PageLayout';
import Work from '../components/Work';

export const metadata: Metadata = {
  title: "Our Portfolio | Bridge Creative",
  description:
    "Explore our portfolio of professional design work including logo design, branding, print design, and digital design. See real examples of how Bridge Creative delivers exceptional creative solutions for businesses in Stalybridge and beyond.",
};

export default function WorkPage() {
  return (
    <PageLayout>
      <FastWorkCarousel />
      <Work />
    </PageLayout>
  );
}
