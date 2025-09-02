'use client';

import FastWorkCarousel from '../components/FastWorkCarousel';
import PageLayout from '../components/PageLayout';
import Work from '../components/Work';

export default function WorkPage() {
  return (
    <PageLayout>
      <FastWorkCarousel />
      <Work />
    </PageLayout>
  );
}
