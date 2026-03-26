import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sliderImages } from "../data/sliderImages";
import playIcon from "../assets/play_icon.png";
import arrowBtn from "../assets/arrow_btn.png";
import video1 from "../assets/video1.mp4";

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
    <div id="home" className="min-h-screen w-full text-white relative overflow-hidden flex items-center bg-black pt-32 sm:pt-36 md:pt-40 lg:pt-44" style={{ minHeight: '100vh', display: 'flex' }}>
      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0 w-full h-full -z-10" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={sliderImages[index]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('${sliderImages[index]}')`,
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </AnimatePresence>

        {/* GRADIENT OVERLAYS */}
        <div className="absolute inset-0 w-full h-full bg-linear-to-b from-black/80 via-black/60 to-black/90" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>
        <div className="absolute inset-0 w-full h-full bg-linear-to-r from-black/70 via-black/40 to-black/70" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>
      </div>

      {/* HERO TEXT */}
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 xl:col-span-6 2xl:col-span-6">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 bg-linear-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent drop-shadow-2xl"
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
                className="group bg-linear-to-r from-blue-500 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center gap-3 sm:gap-4 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 transition-all duration-300 text-sm sm:text-base font-semibold w-full sm:w-auto justify-center"
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
                      ? "w-10 sm:w-12 h-2.5 sm:h-3 bg-linear-to-r from-blue-500 to-blue-600"
                      : "w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white/60 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </motion.div>

            {/* MOBILE VIDEO - Shows below text on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="lg:hidden mt-8"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-blue-500/30">
                <video
                  className="w-full h-auto rounded-xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={video1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 via-transparent to-cyan-500/10 pointer-events-none"></div>

                {/* Play Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full border-2 border-white/70 bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                    <img src={playIcon} alt="Play" className="w-8 h-8 ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* DESKTOP VIDEO - Shows on right side on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="lg:col-span-5 xl:col-span-6 2xl:col-span-6 hidden lg:block"
          >
            <div id="video" className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-blue-500/30 hover:shadow-blue-500/40 hover:border-blue-500/50 transition-all duration-500">
              <video
                className="w-full h-auto rounded-2xl"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 via-transparent to-cyan-500/10 pointer-events-none"></div>

              {/* Play Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 rounded-full border-2 border-white/70 bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                  <img src={playIcon} alt="Play" className="w-10 h-10 ml-1" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
