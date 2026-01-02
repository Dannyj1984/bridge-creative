

import PageLayout from '../components/PageLayout';
import About from '../components/About';
import LocalBusinessSchema from '../components/schema/LocalBusinessSchema';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Bridge Creative | Graphic Designer in Stalybridge",
  description:
    "Bridge Creative is a Stalybridge-based graphic design studio specialising in logo design, brand identity and digital media for local businesses across Greater Manchester.",
  openGraph: {
    title: "About Bridge Creative | Stalybridge Graphic Designer",
    description:
      "A professional graphic design studio in Stalybridge offering logo design, branding and digital media services.",
    locale: "en_GB",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <PageLayout>
      <LocalBusinessSchema />
      <About />
    </PageLayout>
  );
}
