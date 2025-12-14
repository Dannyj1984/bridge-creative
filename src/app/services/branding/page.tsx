
import { Metadata } from 'next';
import Link from 'next/link';
import PageLayout from '../../components/PageLayout';
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Branding & Identity | Strategy & Design | Bridge Creative",
    description:
        "Strategic branding services in Stalybridge. We define your voice, visuals, and values to build a cohesive brand identity that connects with your ideal customers.",
    keywords: ["branding stalybridge", "brand identity design", "brand strategy", "rebranding services"],
    openGraph: {
        title: "Branding & Identity | Bridge Creative",
        description: "Building brands that bridge the gap to your audience.",
        type: "website",
    }
};

export default function BrandingPage() {
    return (
        <PageLayout>
            <section className="relative py-20 bg-white overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <div className="mb-12 text-center">
                        <h1 className="font-display text-5xl md:text-6xl text-neutral-900 mb-6">Branding & Identity</h1>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                            Your brand is more than just a logo. It's how you make people feel. We build cohesive identities that tell your story.
                        </p>
                    </div>

                    <div className="relative h-80 md:h-96 w-full mb-16 rounded-3xl overflow-hidden shadow-sm border border-neutral-100">
                        <Image
                            src="/work/sutton/wall-sign.webp"
                            alt="Logo Design"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="prose prose-lg prose-neutral max-w-none">
                        <h2 className="font-display text-3xl text-neutral-800">What is Branding?</h2>
                        <p className="text-neutral-600">
                            Branding is the "gut feeling" a person has about your product, service, or company. It's the sum of every interaction they have with you. While we can't control everything, we <em>can</em> control how you look, sound, and present yourself to the world.
                        </p>

                        <h3 className="font-display text-2xl text-neutral-800 mt-12 mb-6">Our Branding Package Includes:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
                                <span className="block text-4xl mb-2">🎨</span>
                                <h4 className="font-bold text-lg mb-2 text-neutral-600">Visual Identity</h4>
                                <p className="text-sm text-neutral-600">Logo, color palette, typography systems, and graphic elements.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
                                <span className="block text-4xl mb-2">📢</span>
                                <h4 className="font-bold text-lg mb-2 text-neutral-600">Tone of Voice</h4>
                                <p className="text-sm text-neutral-600">Defining how you speak to your audience. Are you fun? Serious? authoritative?</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
                                <span className="block text-4xl mb-2">📘</span>
                                <h4 className="font-bold text-lg mb-2 text-neutral-600">Brand Guidelines</h4>
                                <p className="text-sm text-neutral-600">A rulebook to ensure consistency across all future marketing materials.</p>
                            </div>
                        </div>

                        <h2 className="font-display text-3xl text-neutral-800 mt-12">Building Trust</h2>
                        <p className="text-neutral-600">
                            Consistency builds trust. When your website matches your business card, which matches your van livery, which matches your invoice, you signal to your customer that you are professional, reliable, and paying attention to the details. A strong brand identity makes you memorable in a crowded marketplace.
                        </p>

                        <div className="mt-16 text-center">
                            <h3 className="font-display text-3xl text-neutral-800 mb-6">Let's build your brand</h3>
                            <Link
                                href="/contact"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-neutral-950 px-8 font-medium text-white transition-all hover:bg-neutral-800 hover:scale-105"
                            >
                                Start the Journey
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}
