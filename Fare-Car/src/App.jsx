import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Explore from "./components/Explore";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className=" bg-black text-white">
      <Navbar />
      <Hero />
      <Explore />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
