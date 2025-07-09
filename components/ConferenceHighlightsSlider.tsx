"use client";

import { useState, useEffect } from "react";
import { Icon } from "@/components/icon-mapper";
import Image from "next/image";

export function ConferenceHighlightsSlider({
  highlights,
}: {
  highlights: any[];
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) =>
      Math.min(prev + 1, highlights.length - slidesToShow)
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {/* Slider Container */}
      <div className="relative overflow-hidden">
        {/* Slider Track */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
          }}
        >
          {highlights.map((highlight, index) => (
            <div key={index} className="flex-shrink-0 w-full md:w-1/3 px-4">
              <div className="group relative overflow-hidden bg-slate-900/30 aspect-video rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300">
                <Image
                  src={highlight.image}
                  alt={highlight.alt}
                  fill
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon name="Camera" className="w-6 h-6" />
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
          disabled={currentSlide >= highlights.length - slidesToShow}
        >
          <Icon name="ChevronRight" className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {highlights.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-white w-6" : "bg-slate-600"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </>
  );
}