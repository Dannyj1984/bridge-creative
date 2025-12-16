'use client';

import { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";

export default function FastWorkCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const featuredProjects = useMemo(() =>
    projects.filter((project) => project.featured), []
  );

  const total = featuredProjects.length;

  // Get the 3 projects to display in fixed positions
  const getVisibleProjects = useCallback(() => {
    const leftIndex = (currentIndex - 1 + total) % total;
    const centerIndex = currentIndex;
    const rightIndex = (currentIndex + 1) % total;

    return {
      left: featuredProjects[leftIndex],
      center: featuredProjects[centerIndex],
      right: featuredProjects[rightIndex]
    };
  }, [currentIndex, total, featuredProjects]);

  const handleNavigation = useCallback((direction: 'prev' | 'next') => {
    if (isTransitioning) return; // Prevent rapid clicks

    setIsTransitioning(true);
    setCurrentIndex(prev => {
      const newIndex = direction === 'next'
        ? (prev + 1) % total
        : (prev - 1 + total) % total;
      return newIndex;
    });

    // Reset transition lock after animation completes
    setTimeout(() => setIsTransitioning(false), 150); // Reduced from 300ms
  }, [isTransitioning, total]);

  const handlePrev = useCallback(() => handleNavigation('prev'), [handleNavigation]);
  const handleNext = useCallback(() => handleNavigation('next'), [handleNavigation]);

  const handleCardClick = useCallback((position: 'left' | 'right') => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(prev =>
        position === 'right'
          ? (prev + 1) % total
          : (prev - 1 + total) % total
      );
      setTimeout(() => setIsTransitioning(false), 150);
    }
  }, [isTransitioning, total]);

  const visibleProjects = getVisibleProjects();

  return (
    <section className="relative py-12 md:py-24 bg-gray-50 overflow-hidden border-b border-gray-100/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-200 to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 hidden md:block">
        <h2 className="font-display text-3xl md:text-4xl text-gray-800 mb-12 text-center">
          Featured Work
        </h2>

        <div className="relative h-[500px] flex items-center justify-center">
          {/* Previous button */}
          <button
            onClick={handlePrev}
            disabled={isTransitioning}
            className="absolute left-4 z-20 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors disabled:opacity-50 text-gray-800"
            aria-label="Previous project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel container - Fixed 3-card layout */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Left card */}
            <div
              className="carousel-card absolute w-[300px] h-[400px] cursor-pointer"
              style={{
                transform: `translateX(-250px) scale(0.8)`,
                opacity: 0.6,
                zIndex: 5,
                transition: isTransitioning ? 'opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
                willChange: 'opacity'
              }}
              onClick={() => handleCardClick('left')}
            >
              <div className="relative w-full h-full bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-3/4 w-full">
                  <Image
                    src={visibleProjects.left.image}
                    alt={visibleProjects.left.title.replace(/-/g, ' ')}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="300px"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 h-1/4 flex flex-col justify-center">
                  <h3 className="text-lg font-semibold mb-1 truncate text-gray-800">{visibleProjects.left.title.replace(/-/g, ' ')}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{visibleProjects.left.description}</p>
                </div>
              </div>
            </div>

            {/* Center card */}
            <div
              className="carousel-card absolute w-[300px] h-[400px] cursor-pointer"
              style={{
                transform: `translateX(0px) scale(1)`,
                opacity: 1,
                zIndex: 10,
                transition: isTransitioning ? 'opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
                willChange: 'opacity'
              }}
            >
              <div className="relative w-full h-full bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-3/4 w-full">
                  <Image
                    src={visibleProjects.center.image}
                    alt={visibleProjects.center.title.replace(/-/g, ' ')}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="300px"
                    loading="eager"
                    priority
                  />
                </div>
                <div className="p-4 h-1/4 flex flex-col justify-center">
                  <h3 className="text-lg font-semibold mb-1 truncate text-gray-800">{visibleProjects.center.title.replace(/-/g, ' ')}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{visibleProjects.center.description}</p>
                </div>
                <Link
                  href={`/work/${visibleProjects.center.title}`}
                  className="absolute inset-0 z-10"
                  aria-label={`View ${visibleProjects.center.title.replace(/-/g, ' ')} project`}
                />
              </div>
            </div>

            {/* Right card */}
            <div
              className="carousel-card absolute w-[300px] h-[400px] cursor-pointer"
              style={{
                transform: `translateX(250px) scale(0.8)`,
                opacity: 0.6,
                zIndex: 5,
                transition: isTransitioning ? 'opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
                willChange: 'opacity'
              }}
              onClick={() => handleCardClick('right')}
            >
              <div className="relative w-full h-full bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-3/4 w-full">
                  <Image
                    src={visibleProjects.right.image}
                    alt={visibleProjects.right.title.replace(/-/g, ' ')}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="300px"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 h-1/4 flex flex-col justify-center">
                  <h3 className="text-lg font-semibold mb-1 truncate text-gray-800">{visibleProjects.right.title.replace(/-/g, ' ')}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{visibleProjects.right.description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="absolute right-4 z-20 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors disabled:opacity-50 text-gray-800"
            aria-label="Next project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {featuredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsTransitioning(false), 150);
                }
              }}
              disabled={isTransitioning}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex
                ? 'bg-gray-800'
                : 'bg-gray-300 hover:bg-gray-400'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
