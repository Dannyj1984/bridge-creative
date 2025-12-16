
import { Metadata } from 'next';
import Link from 'next/link';
import PageLayout from '../../components/PageLayout';

export const metadata: Metadata = {
    title: "Print Design Services | Business Cards, Flyers & Brochures | Bridge Creative",
    description:
        "Expert print design services in Stalybridge. From tactile business cards to eye-catching flyers and brochures, we create print materials that leave a lasting impression.",
    keywords: ["print design stalybridge", "business card design", "brochure design", "flyer design manchester"],
    openGraph: {
        title: "Print Design | Bridge Creative",
        description: "Tangible marketing materials that stand out.",
        type: "website",
    }
};

export default function PrintDesignPage() {
    return (
        <PageLayout>
            <section className="relative py-20 bg-white overflow-hidden">

                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <div className="mb-12 text-center">
                        <h1 className="font-display text-5xl md:text-6xl text-neutral-900 mb-6">Print Design</h1>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                            In a digital world, something tangible stands out. We create print materials that people want to hold onto.
                        </p>
                    </div>

                    <div className="relative h-80 md:h-96 w-full mb-16 rounded-3xl overflow-hidden shadow-sm border border-neutral-100">
                        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center">
                            <span className="text-stone-300 font-display text-4xl">Tangible Experiences</span>
                        </div>
                    </div>

                    <div className="prose prose-lg prose-neutral max-w-none">
                        <h2 className="font-display text-3xl text-neutral-800">The Power of Print</h2>
                        <p className="text-neutral-600">
                            There is a unique validity that comes with high-quality print marketing. Whether it&apos;s a heavyweight business card that exudes confidence or a brochure that perfectly explains your services, print is an opportunity to put your brand literally in your customer&apos;s hands.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 not-prose">
                            <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-100 transition-all hover:shadow-md">
                                <h3 className="font-display text-xl mb-2 text-neutral-900">Business Cards</h3>
                                <p className="text-neutral-600 text-sm">First impressions count. We design cards that spark conversation.</p>
                            </div>
                            <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-100 transition-all hover:shadow-md">
                                <h3 className="font-display text-xl mb-2 text-neutral-900">Brochures & Flyers</h3>
                                <p className="text-neutral-600 text-sm">Communicate your message clearly with layouts that guide the reader.</p>
                            </div>
                            <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-100 transition-all hover:shadow-md">
                                <h3 className="font-display text-xl mb-2 text-neutral-900">Posters & Signage</h3>
                                <p className="text-neutral-600 text-sm">Large format designs that catch the eye and direct foot traffic.</p>
                            </div>
                            <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-100 transition-all hover:shadow-md">
                                <h3 className="font-display text-xl mb-2 text-neutral-900">Packaging</h3>
                                <p className="text-neutral-600 text-sm">Unboxing experiences that elevate your product&apos;s perceived value.</p>
                            </div>
                        </div>

                        <h2 className="font-display text-3xl text-neutral-800">Print Perfection</h2>
                        <p className="text-neutral-600">
                            Preparing files for print is a technical art. We ensure your colors are set to the correct profiles (CMYK vs Pantone), your resolution is crisp (300dpi+), and your bleeds are correct. We can even advise on paper stocks and finishes like spot UV or foil blocking to give your project that extra &quot;wow&quot; factor.
                        </p>

                        <div className="mt-16 text-center">
                            <h3 className="font-display text-3xl text-neutral-800 mb-6">Need something printed?</h3>
                            <Link
                                href="/contact"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-neutral-950 px-8 font-medium text-white transition-all hover:bg-neutral-800 hover:scale-105"
                            >
                                Let&apos;s Talk Print
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}
