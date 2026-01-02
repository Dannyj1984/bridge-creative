
import { Metadata } from 'next';
import Link from 'next/link';
import PageLayout from '../../components/PageLayout';
import ServiceSchema from '../../components/schema/ServiceSchema';

export const metadata: Metadata = {
    title: "Digital Design Services | Social Media & Digital Assets | Bridge Creative",
    description:
        "Engaging digital design services in Stalybridge. From social media graphics to email templates, we help your brand look professional on every screen.",
    keywords: ["digital design", "social media graphics", "web assets", "email design manchester"],
    openGraph: {
        title: "Digital Design | Bridge Creative",
        description: "Captivating visuals for the digital world.",
        type: "website",
    }
};

export default function DigitalDesignPage() {
    return (
        <PageLayout>
            <ServiceSchema
                name="Digital Design"
                description="Engaging digital design services in Stalybridge. From social media graphics to email templates, we help your brand look professional on every screen."
                url="https://www.bridgecreative.co.uk/services/digital-design"
            />
            <section className="relative py-20 bg-white overflow-hidden">

                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <div className="mb-12 text-center">
                        <h1 className="font-display text-5xl md:text-6xl text-neutral-900 mb-6">Digital Design</h1>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                            Designs that live on screens. We create engaging visuals to help you connect with your audience online.
                        </p>
                    </div>

                    <div className="relative h-80 md:h-96 w-full mb-16 rounded-3xl overflow-hidden shadow-sm border border-neutral-100">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                            <span className="text-blue-200 font-display text-4xl">Digital Presence</span>
                        </div>
                    </div>

                    <div className="prose prose-lg prose-neutral max-w-none">
                        <h2 className="font-display text-3xl text-neutral-800">Consistent Online Presence</h2>
                        <p className="text-neutral-600">
                            Your digital channels are 24/7 storefronts for your brand. It&apos;s crucial that your visual identity remains consistent whether a customer finds you on Instagram, receives your newsletter, or visits your website. We help you translate your brand for the digital space.
                        </p>

                        <dl className="space-y-8 my-12 not-prose">
                            <div className="flex flex-col md:flex-row gap-4 md:items-start">
                                <dt className="w-full md:w-1/4 font-display text-2xl text-neutral-800">Social Media</dt>
                                <dd className="w-full md:w-3/4 text-neutral-600">
                                    Stop the scroll with custom templates and graphics for Instagram, Facebook, and LinkedIn. We create cohesive feeds that tell your story at a glance.
                                </dd>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 md:items-start border-t border-neutral-100 pt-8">
                                <dt className="w-full md:w-1/4 font-display text-2xl text-neutral-800">Email Marketing</dt>
                                <dd className="w-full md:w-3/4 text-neutral-600">
                                    Beautifully designed headers and newsletter layouts that encourage clicks and keep your audience reading.
                                </dd>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 md:items-start border-t border-neutral-100 pt-8">
                                <dt className="w-full md:w-1/4 font-display text-2xl text-neutral-800">Web Assets</dt>
                                <dd className="w-full md:w-3/4 text-neutral-600">
                                    Icons, banners, and hero images that make your website feel polished and professional.
                                </dd>
                            </div>
                        </dl>

                        <h2 className="font-display text-3xl text-neutral-800">Optimised for Screens</h2>
                        <p className="text-neutral-600">
                            Digital design isn&apos;t just about looking good; it&apos;s about performance. We design with screen sizes in mind, ensuring text is legible on mobile devices and images are optimised for fast loading without sacrificing quality.
                        </p>

                        <div className="mt-16 text-center">
                            <h3 className="font-display text-3xl text-neutral-800 mb-6">Boost your online look?</h3>
                            <Link
                                href="/contact"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-neutral-950 px-8 font-medium text-white transition-all hover:bg-neutral-800 hover:scale-105"
                            >
                                Let&apos;s Get Digital
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}
