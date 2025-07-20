'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { projects } from '../data/projects';
import Link from 'next/link';
import { useState } from 'react';
import Work from './Work';

export default function WorkCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredProjects = projects.filter((p) => p.featured);

  const getPosition = (index: number) => {
    const diff = index - currentIndex;
    const normalizedDiff = ((diff + featuredProjects.length) % featuredProjects.length);
    const adjustedDiff = normalizedDiff <= featuredProjects.length / 2 ? normalizedDiff : normalizedDiff - featuredProjects.length;
    return adjustedDiff;
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <section className="py-4 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 hidden md:block">
        <motion.h2 
          className="text-3xl font-semibold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Work
        </motion.h2>
        <div className="relative h-[500px] flex items-center justify-center">
          <button
            onClick={handlePrev}
            className="cursor-pointer absolute left-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Previous project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence>
              {featuredProjects.map((project, index) => {
                let position = getPosition(index);
                const isVisible = Math.abs(position) <= 2;

                if (!isVisible) return null;

                return (
                  <motion.div
                    key={project.id}
                    className={`absolute w-[300px] h-[400px] cursor-pointer transition-shadow hover:shadow-xl`}
                    style={{
                      pointerEvents: 'auto',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1 - Math.abs(position) * 0.3,
                      x: `${position * 250}px`,
                      scale: 1 - Math.abs(position) * 0.2,
                      zIndex: 10 - Math.abs(position),
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    onClick={(e) => {
                      if (position !== 0) {
                        e.preventDefault();
                        const stepsToMove = -position;
                        setCurrentIndex((prev) => (prev + stepsToMove + featuredProjects.length) % featuredProjects.length);
                      }
                    }}
                  >
                    {position === 0 ? (
                      <Link href={`/work/${project.id}`} className="block w-full h-full">
                        <div className="relative w-full h-full bg-white rounded-lg overflow-hidden shadow-lg">
                          <div className="relative h-100 w-full">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              style={{ objectFit: 'cover' }}
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                          <p className="text-gray-600 mb-2">{project.description}</p>
                        </div>
                      </div>
                    </Link>) : <div className="block w-full h-full">
                    <div className="relative w-full h-full bg-white rounded-lg overflow-hidden shadow-lg">
                          <div className="relative h-100 w-full">
                            <Image
                              src={project.image}
                            alt={project.title}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                          <p className="text-gray-600 mb-2">{project.description}</p>
                        </div>
                      </div></div>}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          <button
            onClick={handleNext}
            className="cursor-pointer absolute right-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Next project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <Work />
    </section>
  );
}
