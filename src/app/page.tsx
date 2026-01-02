'use client';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Footer from './components/Footer';
import LocalBusinessSchema from './components/schema/LocalBusinessSchema';
import OrganizationSchema from './components/schema/OrganizationSchema';

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema includeServices={true} />
      <OrganizationSchema />
      <Navigation />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
