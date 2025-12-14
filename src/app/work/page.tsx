import { Metadata } from 'next';
import FastWorkCarousel from '../components/FastWorkCarousel';
import PageLayout from '../components/PageLayout';
import Work from '../components/Work';

export const metadata: Metadata = {
  title: "Example Work | Bridge Creative",
  description:
    "Example work from Bridge Creative, showcasing our design services in Stalybridge.",
};

export default function WorkPage() {
  return (
    <PageLayout>
      <FastWorkCarousel />
      <Work />
    </PageLayout>
  );
}
