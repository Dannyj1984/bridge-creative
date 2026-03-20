

import PageLayout from '../components/PageLayout';
import About from '../components/About';
import LocalBusinessSchema from '../components/schema/LocalBusinessSchema';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Bridge Creative | Graphic Designer in Stalybridge",
  description:
    "Bridge Creative is a Stalybridge design studio specialising in logo design, branding and digital media for businesses across Greater Manchester.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Bridge Creative | Stalybridge Graphic Designer",
    description:
      "Professional graphic design studio in Stalybridge offering logo design, branding and digital media services.",
    locale: "en_GB",
    type: "website",
    url: "https://www.bridgecreative.co.uk/about",
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
