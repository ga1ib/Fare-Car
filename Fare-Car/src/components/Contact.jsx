import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 relative overflow-hidden">
      {/* Background Gradient Accents */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 leading-relaxed">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 lg:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-medium mb-2 text-gray-200">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-900/80 border border-gray-700 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all text-white placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm sm:text-base font-medium mb-2 text-gray-200">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-900/80 border border-gray-700 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all text-white placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm sm:text-base font-medium mb-2 text-gray-200">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-900/80 border border-gray-700 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all text-white placeholder-gray-500"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm sm:text-base font-medium mb-2 text-gray-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-900/80 border border-gray-700 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all resize-none text-white placeholder-gray-500"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 via-red-600 to-pink-600 text-white px-8 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 transition-all duration-300 shadow-xl shadow-red-500/30"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 lg:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                Contact Information
              </h3>

              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-full flex items-center justify-center shrink-0 border border-green-500/30">
                    <span className="text-xl sm:text-2xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 sm:mb-2 text-base sm:text-lg text-gray-200">Address</h4>
                    <p className="text-gray-300 text-sm sm:text-base">123 Fare Street, Car City, CC 12345</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center shrink-0 border border-blue-500/30">
                    <span className="text-xl sm:text-2xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 sm:mb-2 text-base sm:text-lg text-gray-200">Email</h4>
                    <p className="text-gray-300 text-sm sm:text-base">contact@farecar.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center shrink-0 border border-purple-500/30">
                    <span className="text-xl sm:text-2xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 sm:mb-2 text-base sm:text-lg text-gray-200">Phone</h4>
                    <p className="text-gray-300 text-sm sm:text-base">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center shrink-0 border border-yellow-500/30">
                    <span className="text-xl sm:text-2xl">⏰</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 sm:mb-2 text-base sm:text-lg text-gray-200">Business Hours</h4>
                    <p className="text-gray-300 text-sm sm:text-base">24/7 - Always Available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-500/20 via-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-red-500/40 rounded-2xl p-6 sm:p-8 lg:p-10 hover:border-red-500/60 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Ready to Ride?
              </h3>
              <p className="text-gray-200 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                Download our app and experience premium transportation at your fingertips.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-white text-gray-900 px-6 py-3 sm:py-4 rounded-xl font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base">
                  App Store
                </button>
                <button className="bg-white text-gray-900 px-6 py-3 sm:py-4 rounded-xl font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base">
                  Google Play
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

