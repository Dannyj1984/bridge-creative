
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '../../components/PageLayout';

export const metadata: Metadata = {
    title: "Logo Design in Stalybridge | Professional Brand Identity | Bridge Creative",
    description:
        "Professional logo design services in Stalybridge and Greater Manchester. We create memorable, scalable, and meaningful logos that define your brand identity.",
    keywords: ["logo design stalybridge", "brand identity", "vector logo design", "business logo design manchester"],
    openGraph: {
        title: "Logo Design | Bridge Creative",
        description: "Memorable and meaningful logo design for your business.",
        type: "website",
    }
};

export default function LogoDesignPage() {
    return (
        <PageLayout>
            <section className="relative py-20 bg-white overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <div className="mb-12 text-center">
                        <h1 className="font-display text-5xl md:text-6xl text-neutral-900 mb-6">Logo Design</h1>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                            The face of your business. We craft logos that are simple, memorable, and built to last.
                        </p>
                    </div>

                    <div className="relative h-80 md:h-96 w-full mb-16 rounded-3xl overflow-hidden shadow-sm border border-neutral-100">
                        <Image
                            src="/work/sutton/logo-landscape.png"
                            alt="Logo Design"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="prose prose-lg prose-neutral max-w-none">
                        <h2 className="font-display text-3xl text-neutral-800">More Than Just a Pretty Picture</h2>
                        <p className="text-neutral-600">
                            Your logo is often the very first interaction a potential customer has with your brand. It needs to work hard—communicating your values, your industry, and your professionalism in a split second. At Bridge Creative, we don't just draw shapes; we build identities.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 not-prose">
                            <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100">
                                <h3 className="font-display text-2xl mb-3 text-neutral-800">Scalable & Versatile</h3>
                                <p className="text-neutral-600">
                                    A great logo looks as good on a business card as it does on a billboard. We design in vector formats to ensure your logo is crisp at any size.
                                </p>
                            </div>
                            <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100">
                                <h3 className="font-display text-2xl mb-3 text-neutral-800">Timeless Design</h3>
                                <p className="text-neutral-600">
                                    Trends come and go. We focus on classic design principles to ensure your logo serves your business for years to come, not just for the current season.
                                </p>
                            </div>
                        </div>

                        <h2 className="font-display text-3xl text-neutral-800">Our Process</h2>
                        <ul className="list-none pl-0 space-y-4">
                            <li className="flex items-start">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center mr-4 font-bold text-sm">1</span>
                                <div className="text-neutral-600">
                                    <strong className="text-neutral-900">Discovery:</strong> We get to know you, your business, and your competitors.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center mr-4 font-bold text-sm">2</span>
                                <div className="text-neutral-600">
                                    <strong className="text-neutral-900">Concepting:</strong> We search for the best ideas, sketching and iterating to find the perfect direction.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center mr-4 font-bold text-sm">3</span>
                                <div className="text-neutral-600">
                                    <strong className="text-neutral-900">Refinement:</strong> We polish the chosen concept, perfecting the geometry and color balance.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center mr-4 font-bold text-sm">4</span>
                                <div className="text-neutral-600">
                                    <strong className="text-neutral-900">Delivery:</strong> You receive a full suite of files (print, web, transparent) ready for action.
                                </div>
                            </li>
                        </ul>

                        <div className="mt-16 text-center">
                            <h3 className="font-display text-3xl text-neutral-800 mb-6">Ready to define your brand?</h3>
                            <Link
                                href="/contact"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-neutral-950 px-8 font-medium text-white transition-all hover:bg-neutral-800 hover:scale-105"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}
