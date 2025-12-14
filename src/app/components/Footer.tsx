'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-neutral-950 text-white py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] opacity-20"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="font-display text-4xl text-white">Bridge Creative</h3>
            <p className="text-neutral-400 leading-relaxed max-w-xs">
              Crafting meaningful brand experiences through thoughtful design and digital storytelling.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-neutral-200">Quick Links</h4>
            <nav className="space-y-3">
              <Link href="/" className="block text-neutral-400 hover:text-white transition-colors duration-200">Home</Link>
              <Link href="/about" className="block text-neutral-400 hover:text-white transition-colors duration-200">About</Link>
              <Link href="/services" className="block text-neutral-400 hover:text-white transition-colors duration-200">Services</Link>
              <Link href="/work" className="block text-neutral-400 hover:text-white transition-colors duration-200">Work</Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-neutral-200">Connect</h4>
            <div className="space-y-4">
              <Link href="/contact" className="block text-neutral-400 hover:text-white transition-colors duration-200">Contact Us</Link>
              <span className="!text-white">Stalybridge, Manchester</span>
              <div className="pt-4">
                <h4 className="text-sm font-semibold mb-4 text-neutral-200 uppercase tracking-wider">Socials</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/the_bridge_creative/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.linkedin.com/company/bridge-creative"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800 text-center text-neutral-500 text-sm">
          <p>&copy; {new Date().getFullYear()} The Bridge Creative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
