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

  return (
    <nav className="fixed h-25 top-0 left-0 right-0 bg-[#CBCBCBFF] backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-25">
        <div className="flex items-center justify-between h-25 px-5">
          <Link href="/">
            <Image src="/logo-tsp.png" alt="Bridge Creative" width={125} height={125} />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" prefetch={true} className={`text-gray-600 hover:text-red-500 ${route === '/' ? 'text-red-600 scale-130 font-caveat italic' : ''}`}>Home</Link>
            <Link href="/about" prefetch={true} className={`text-gray-600 hover:text-red-500 ${route === '/about' ? 'text-red-600 scale-130 font-caveat italic' : ''}`}>About</Link>
            <Link href="/services" prefetch={true} className={`text-gray-600 hover:text-red-500 ${route === '/services' ? 'text-red-600 scale-130 font-caveat italic' : ''}`}>Services</Link>
            <Link href="/work" prefetch={true} className={`text-gray-600 hover:text-red-500 ${route === '/work' ? 'text-red-600 scale-130 font-caveat italic' : ''}`}>Work</Link>
            <Link href="/contact" prefetch={true} className={`text-gray-600 hover:text-red-500 ${route === '/contact' ? 'text-red-600 scale-130 font-caveat italic' : ''}`}>Contact</Link>
            <Link 
              href="mailto:katy.jebb@gmail.com" 
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Email Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link 
              href="mailto:katy.jebb@gmail.com" 
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm"
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
              className="md:hidden bg-[#CBCBCBFF] backdrop-blur-md border-b border-gray-100 p-5"
            >
              <div className="py-4 space-y-4">
                <Link href="/" className="block text-gray-600 hover:text-black" onClick={toggleMenu}>Home</Link>
                <Link href="/about" className="block text-gray-600 hover:text-black" onClick={toggleMenu}>About</Link>
                <Link href="/services" className="block text-gray-600 hover:text-black" onClick={toggleMenu}>Services</Link>
                <Link href="/work" className="block text-gray-600 hover:text-black" onClick={toggleMenu}>Work</Link>
                <Link href="/contact" className="block text-gray-600 hover:text-black" onClick={toggleMenu}>Contact</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
