'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function About() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const animationProps = (initialCoords: { x: number }) => ({
    initial: { opacity: 0, x: initialCoords.x },
    ...(isHomePage
      ? { whileInView: { opacity: 1, x: 0 }, viewport: { once: true, margin: "-100px" } }
      : { animate: { opacity: 1, x: 0 } }
    ),
    transition: { duration: 0.8 }
  });

  return (
    <section id="about" className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-200 to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Text Content */}
          <motion.div
            {...animationProps({ x: -20 })}
          >
            <h2 className="font-display text-4xl md:text-5xl text-gray-800 mb-8">
              A little bit about us...
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Hey there! We are <span className="font-semibold text-gray-900">The Bridge Creative</span> - a small but mighty graphic design company based in Stalybridge, Greater Manchester. We’re all about helping businesses bring their ideas to life through bold visuals, smart branding and innovative design that connects with people.
              </p>
              <p>
                From logos, flyers and posters to full-on brand identities, we love working with passionate people to create work that looks great and gets results. We believe that good design should build bridges (see what we did there!?) between you and your audience to ensure the best for you and your company.
              </p>
              <p>
                Whether you&apos;ve got a clear vision or just a rough sketch on a napkin, we&apos;re here to make it happen.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/contact"
                className="group inline-flex h-12 items-center justify-center rounded-full bg-neutral-950 px-8 font-medium text-neutral-50 transition-all duration-300 hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2 hover:scale-105"
              >
                Let&apos;s Start a Project
              </Link>
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            className="relative"
            {...animationProps({ x: 20 })}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-square md:aspect-[4/5] w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-100 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
              <div className="bg-white p-8 rounded-2xl shadow-xl h-full flex items-center justify-center border border-gray-100 relative overflow-hidden">
                {/* Decorative wash */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-y-1/2 -translate-x-1/2"></div>

                <Image
                  src="/logo-tsp.png"
                  alt="Bridge Creative Studio"
                  width={400}
                  height={400}
                  className="object-contain relative z-10 p-8"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
