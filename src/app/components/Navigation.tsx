'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const route = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkStyle = (path: string) => `
    relative text-gray-600 transition-all duration-300
    hover:text-black hover:scale-110 hover:font-caveat
    ${route === path ? 'text-black font-caveat scale-110 font-medium' : ''}
  `;

  return (
    <nav className="fixed h-24 top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100/50 supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-6xl mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="relative hover:scale-105 transition-transform duration-300">
            <Image
              src="/logo-tsp.png"
              alt="Bridge Creative"
              width={100}
              height={100}
              priority={true}
              className="object-contain" // Ensures aspect ratio is maintained
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={linkStyle('/')}>Home</Link>
            <Link href="/about" className={linkStyle('/about')}>About</Link>
            <Link href="/services" className={linkStyle('/services')}>Services</Link>
            <Link href="/work" className={linkStyle('/work')}>Work</Link>
            <Link href="/contact" className={linkStyle('/contact')}>Contact</Link>
            <Link
              href="mailto:katy.jebb@gmail.com"
              className="bg-neutral-950 text-white px-6 py-2.5 rounded-full hover:bg-neutral-800 transition-all duration-300 hover:scale-105"
            >
              Email Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link
              href="mailto:katy.jebb@gmail.com"
              className="bg-neutral-950 text-white px-4 py-2 rounded-full hover:bg-neutral-800 transition-colors text-sm"
            >
              Email
            </Link>
            <button
              className="p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative">
                {isMenuOpen ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/close-icon.png"
                      alt="Close menu"
                      width={24}
                      height={24}
                      className="opacity-100 transition-opacity duration-200"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col justify-between h-full">
                    <span className="w-full h-0.5 bg-black transition-transform" />
                    <span className="w-full h-0.5 bg-black transition-opacity" />
                    <span className="w-full h-0.5 bg-black transition-transform" />
                  </div>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-100 overflow-hidden"
            >
              <div className="px-5 py-6 space-y-4">
                <Link href="/" className="block text-2xl font-caveat text-gray-800 hover:text-black" onClick={toggleMenu}>Home</Link>
                <Link href="/about" className="block text-2xl font-caveat text-gray-800 hover:text-black" onClick={toggleMenu}>About</Link>
                <Link href="/services" className="block text-2xl font-caveat text-gray-800 hover:text-black" onClick={toggleMenu}>Services</Link>
                <Link href="/work" className="block text-2xl font-caveat text-gray-800 hover:text-black" onClick={toggleMenu}>Work</Link>
                <Link href="/contact" className="block text-2xl font-caveat text-gray-800 hover:text-black" onClick={toggleMenu}>Contact</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
