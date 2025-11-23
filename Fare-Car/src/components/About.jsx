import React from "react";
import { motion } from "framer-motion";
import video1 from "../assets/video1.mp4";

export default function About() {
  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "500+", label: "Premium Vehicles" },
    { number: "50+", label: "Cities Covered" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 relative overflow-hidden">
      {/* Background Gradient Accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-[1920px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left: Video/Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div id="video" className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-gray-800/50 hover:shadow-purple-500/30 transition-all duration-500">
              <video
                className="w-full h-auto rounded-xl sm:rounded-2xl"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-pink-500/20"></div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              About Fare-Car
            </h2>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6">
              We're revolutionizing the way people travel. With a commitment to excellence,
              safety, and customer satisfaction, Fare-Car has become the trusted choice for
              thousands of riders worldwide.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Our mission is to provide seamless, comfortable, and affordable transportation
              solutions that connect people to their destinations with style and reliability.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-xs sm:text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 xl:gap-10"
        >
          <div className="text-center p-6 sm:p-8 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
              <span className="text-3xl sm:text-4xl">🚗</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Quality Fleet</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Meticulously maintained vehicles for your comfort and safety
            </p>
          </div>

          <div className="text-center p-6 sm:p-8 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-500/30">
              <span className="text-3xl sm:text-4xl">⭐</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Professional Drivers</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Experienced and courteous drivers committed to your journey
            </p>
          </div>

          <div className="text-center p-6 sm:p-8 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 sm:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
              <span className="text-3xl sm:text-4xl">💎</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Premium Experience</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Luxury and comfort in every ride, every time
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

