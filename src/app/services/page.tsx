
import { Metadata } from 'next';
import PageLayout from '../components/PageLayout';
import Services from '../components/Services';

export const metadata: Metadata = {
  title: "Graphic Design Services in Stalybridge | Bridge Creative",
  description:
    "Professional design services in Stalybridge including logo design, branding, digital and print design. Helping local businesses create memorable identities.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Graphic Design Services in Stalybridge | Bridge Creative",
    description:
      "Professional design services in Stalybridge including logo design, branding, digital and print design.",
    url: "https://www.bridgecreative.co.uk/services",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <PageLayout>
      <Services />
    </PageLayout>
  );
}
