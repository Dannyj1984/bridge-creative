'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <Image src="/logo-tsp.png" alt="Bridge Creative" width={75} height={75} />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-black">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-black">About</Link>
            <Link href="/services" className="text-gray-600 hover:text-black">Services</Link>
            <Link href="/work" className="text-gray-600 hover:text-black">Work</Link>
            <Link href="/contact" className="text-gray-600 hover:text-black">Contact</Link>
            <Link 
              href="tel:+1234567890" 
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Call Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link 
              href="tel:+1234567890" 
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm"
            >
              Call
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
              className="md:hidden"
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
