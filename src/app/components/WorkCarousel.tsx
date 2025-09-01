'use client';

import { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";
import "./carousel.css";

export default function WorkCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const featuredProjects = useMemo(() => 
    projects.filter((project) => project.featured), []
  );
  
  const total = featuredProjects.length;

  const handleNavigation = useCallback((direction: 'prev' | 'next') => {
    if (isTransitioning) return; // Prevent rapid clicks
    
    setIsTransitioning(true);
    setCurrentIndex(prev => 
      direction === 'next' 
        ? (prev + 1) % total 
        : (prev - 1 + total) % total
    );
    
    // Reset transition lock after animation completes
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, total]);

  const handlePrev = useCallback(() => handleNavigation('prev'), [handleNavigation]);
  const handleNext = useCallback(() => handleNavigation('next'), [handleNavigation]);

  const handleCardClick = useCallback((index: number) => {
    if (index !== currentIndex && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  }, [currentIndex, isTransitioning]);

  return (
    <section className="py-4 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 hidden md:block">
        <h2 className="text-3xl font-semibold mb-12 text-center">
          Featured Work
        </h2>

        <div className="relative h-[500px] flex items-center justify-center">
          {/* Previous button */}
          <button
            onClick={handlePrev}
            disabled={isTransitioning}
            className="absolute left-4 z-20 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
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

          {/* Carousel container */}
          <div className="relative w-full h-full flex items-center justify-center perspective-1000">
            <div 
              className="carousel-track flex items-center justify-center"
              style={{
                transform: `translateX(${-currentIndex * 250}px)`,
                transition: isTransitioning ? 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
                willChange: 'transform'
              }}
            >
              {featuredProjects.map((project, index) => {
                const offset = index - currentIndex;
                const isCenter = offset === 0;
                const isVisible = Math.abs(offset) <= 2; // Show center + 2 on each side
                
                if (!isVisible) return null;

                return (
                  <div
                    key={project.id}
                    className="carousel-card absolute w-[300px] h-[400px] cursor-pointer"
                    style={{
                      transform: `translateX(${offset * 250}px) scale(${isCenter ? 1 : 0.8})`,
                      opacity: isCenter ? 1 : 0.6,
                      zIndex: isCenter ? 10 : 5,
                      transition: isTransitioning ? 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
                      willChange: 'transform, opacity'
                    }}
                    onClick={() => handleCardClick(index)}
                  >
                    <div className="relative w-full h-full bg-white rounded-lg overflow-hidden shadow-lg">
                      <div className="relative h-3/4 w-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="300px"
                          loading={Math.abs(offset) <= 1 ? "eager" : "lazy"}
                          priority={isCenter}
                        />
                      </div>
                      <div className="p-4 h-1/4 flex flex-col justify-center">
                        <h3 className="text-lg font-semibold mb-1 truncate">{project.title}</h3>
                        <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
                      </div>
                      {isCenter && (
                        <Link 
                          href={`/work/${project.id}`}
                          className="absolute inset-0 z-10"
                          aria-label={`View ${project.title} project`}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="absolute right-4 z-20 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
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
              onClick={() => handleCardClick(index)}
              disabled={isTransitioning}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex 
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
