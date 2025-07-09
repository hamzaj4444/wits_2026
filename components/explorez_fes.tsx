"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Icon } from "@/components/icon-mapper";

export default function ExplorezFez({ attractions }: { attractions: any[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Drag state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    isDragging.current = true;
    trackRef.current.classList.add("cursor-grabbing");
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    trackRef.current?.classList.remove("cursor-grabbing");
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    trackRef.current?.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // scroll speed factor
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (trackRef.current) {
      const slideWidth = trackRef.current.querySelector("div")?.clientWidth || 0;
      trackRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      Math.min(prev + 1, attractions.length - slidesToShow)
    );
    if (trackRef.current) {
      const slideWidth = trackRef.current.querySelector("div")?.clientWidth || 0;
      trackRef.current.scrollTo({
        left: slideWidth * (currentSlide + 1),
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
    if (trackRef.current) {
      const slideWidth = trackRef.current.querySelector("div")?.clientWidth || 0;
      trackRef.current.scrollTo({
        left: slideWidth * (currentSlide - 1),
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mb-20" id="attractions">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Explore Fez
        </h2>
        <p className="text-slate-400 text-xl font-medium">
          Discover the rich cultural heritage of Morocco's spiritual capital
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          className="flex overflow-x-scroll scroll-smooth cursor-grab no-scrollbar"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE & Edge
          }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {attractions.map((attraction, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4 scroll-snap-align-start"
            >
              <div className="group relative overflow-hidden bg-slate-900/30 aspect-[3/2] rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300">
                <Image
                  src={attraction.image || "/placeholder.svg"}
                  alt={attraction.name}
                  fill
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-100" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-lg font-semibold">{attraction.name}</h3>
                  <p className="text-sm text-slate-300 hidden sm:block mt-1">
                    {attraction.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-slate-800/50 hover:bg-slate-700/50 text-white p-3 rounded-full ml-2 transition-all"
          onClick={handlePrev}
          disabled={currentSlide === 0}
        >
          <Icon name="ChevronLeft" className="w-6 h-6" />
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-slate-800/50 hover:bg-slate-700/50 text-white p-3 rounded-full mr-2 transition-all"
          onClick={handleNext}
          disabled={currentSlide >= attractions.length - slidesToShow}
        >
          <Icon name="ChevronRight" className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {attractions.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-white w-6" : "bg-slate-600"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
