import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sliderImages } from "../data/sliderImages";
import playIcon from "../assets/play_icon.png";
import arrowBtn from "../assets/arrow_btn.png";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i) => setIndex(i);

  return (
    <div id="home" className="min-h-screen min-w-screen text-white relative overflow-hidden flex items-center">
      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={sliderImages[index]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${sliderImages[index]}')` }}
          />
        </AnimatePresence>

        {/* GRADIENT OVERLAYS */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30"></div>
      </div>

      {/* HERO TEXT */}
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 xl:col-span-8 2xl:col-span-7">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent drop-shadow-2xl"
            >
              Give in to <br /> your passions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed"
            >
              Experience the ultimate driving pleasure with our premium car collection.
              Your journey begins here.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4"
            >
              <a
                href="#explore"
                className="group bg-gradient-to-r from-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center gap-3 sm:gap-4 shadow-2xl shadow-red-500/50 hover:shadow-red-500/70 hover:scale-105 transition-all duration-300 text-sm sm:text-base font-semibold w-full sm:w-auto justify-center"
              >
                <span>Explore the features</span>
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all">
                  <img src={arrowBtn} alt="Arrow" className="w-3.5 h-3.5 sm:w-4 sm:h-4 brightness-0 invert" />
                </span>
              </a>

              <a
                href="#video"
                className="group flex items-center gap-3 border-2 border-white/50 backdrop-blur-sm bg-white/10 px-5 sm:px-6 py-3 sm:py-4 rounded-full hover:bg-white/20 hover:border-white transition-all duration-300 text-sm sm:text-base font-medium"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/50 bg-white/10 flex items-center justify-center group-hover:border-white group-hover:bg-white/20 transition-all">
                  <img src={playIcon} alt="Play" className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5 sm:ml-1" />
                </div>
                <span>See the video</span>
              </a>
            </motion.div>

            {/* DOTS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 sm:mt-12 flex gap-3 sm:gap-4"
            >
              {sliderImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === index
                      ? "w-10 sm:w-12 h-2.5 sm:h-3 bg-gradient-to-r from-blue-500"
                      : "w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white/60 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* BOTTOM RIGHT VIDEO CTA */}
      <a
        href="#video"
        className="hidden lg:flex absolute right-6 lg:right-10 bottom-8 lg:bottom-12 items-center gap-4 group hover:scale-105 transition-all duration-300"
      >
        <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border-2 border-white/50 bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:border-white group-hover:bg-white/20 transition-all shadow-lg">
          <img src={playIcon} alt="Play" className="w-6 h-6 lg:w-7 lg:h-7 ml-1" />
        </div>
        <span className="text-white font-medium drop-shadow-lg">See the video</span>
      </a>
    </div>
  );
}
