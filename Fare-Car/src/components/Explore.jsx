import React from "react";
import { motion } from "framer-motion";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

export default function Explore() {
  const features = [
    {
      id: 1,
      title: "Premium Fleet",
      description: "Experience luxury with our collection of premium vehicles designed for comfort and style.",
      image: image1,
    },
    {
      id: 2,
      title: "Smart Pricing",
      description: "Transparent and competitive pricing with no hidden fees. Get the best value for your journey.",
      image: image2,
    },
    {
      id: 3,
      title: "24/7 Service",
      description: "Round-the-clock availability with professional drivers ready to serve you anytime, anywhere.",
      image: image3,
    },
  ];

  return (
    <section id="explore" className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 relative overflow-hidden">
      {/* Background Gradient Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-[1920px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Explore Our Features
          </h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 leading-relaxed">
            Discover what makes Fare-Car the perfect choice for your transportation needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-red-500/70 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="p-5 sm:p-6 lg:p-7">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </div>
              <div className="absolute top-4 right-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-red-500/30 to-pink-500/30 backdrop-blur-md flex items-center justify-center border border-red-500/30 group-hover:scale-110 transition-transform duration-300">
                <span className="text-red-400 text-lg sm:text-xl font-bold">{feature.id}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <button className="bg-gradient-to-r from-red-500 via-red-600 to-pink-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 transition-all duration-300 shadow-xl shadow-red-500/30 w-full sm:w-auto">
            View All Features
          </button>
        </motion.div>
      </div>
    </section>
  );
}

