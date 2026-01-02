
import { Metadata } from 'next';
import PageLayout from '../components/PageLayout';
import Services from '../components/Services';

export const metadata: Metadata = {
  title: "Graphic Design Services in Stalybridge | Bridge Creative",
  description:
    "Professional design services in Stalybridge including logo design, branding, digital design, and print design. We help startups and small businesses create memorable brand identities and marketing materials that stand out.",
  openGraph: {
    title: "Graphic Design Services in Stalybridge | Bridge Creative",
    description:
      "Professional design services in Stalybridge including logo design, branding, digital design, and print design. We help startups and small businesses create memorable brand identities and marketing materials that stand out.",
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
