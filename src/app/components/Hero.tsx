'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="sr-only">Bridge Creative | Brand Identity & Digital Design</h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-[800px] mx-auto mb-12"
        >
          <div className="relative w-full aspect-[2/1] md:aspect-[5/2]">
            <Image
              src="/logo-tsp.png"
              alt="Bridge Creative Logo"
              fill
              className="object-contain drop-shadow-sm mt-1 lg:mt-8"
              priority
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px'
            />
          </div>
        </motion.div>

        <motion.p
          className="font-display text-4xl md:text-5xl/relaxed text-gray-800 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          Crafting meaningful brand experiences through thoughtful design
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            href="/work"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950 px-8 font-medium text-neutral-50 transition-all duration-300 hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2 hover:scale-105"
          >
            <span className="relative">View Our Work</span>
          </Link>
          <Link
            href="/services"
            className="group inline-flex h-12 items-center justify-center rounded-full border-2 border-neutral-200 bg-white px-8 font-medium text-neutral-950 transition-all duration-300 hover:border-neutral-950 hover:bg-neutral-50 hover:scale-105"
          >
            <span>Services</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
