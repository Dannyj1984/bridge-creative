'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Brand Identity',
    description: 'Modern branding for tech startup',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2894&auto=format&fit=crop',
    credit: 'Unsplash @kellysikkema'
  },
  {
    id: 2,
    title: 'Digital Design',
    description: 'E-commerce website redesign',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2864&auto=format&fit=crop',
    credit: 'Unsplash @youxventures'
  },
  {
    id: 3,
    title: 'Print Design',
    description: 'Magazine layout and typography',
    image: 'https://images.unsplash.com/photo-1574351406668-7585cd5b080c?q=80&w=2940&auto=format&fit=crop',
    credit: 'Unsplash @joshsorenson'
  },
];

export default function WorkCarousel() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-semibold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Work
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <p className="text-sm text-gray-400">{project.credit}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
