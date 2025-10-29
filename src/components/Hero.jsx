import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <section
    id="home"
    className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen max-w-7xl mx-auto px-6 pt-32"
  >
    <motion.div
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="md:w-1/2 space-y-6"
    >
      <h1 className="text-5xl font-bold leading-tight">
        Hi, I'm <span className="text-accent">Asif Raza</span>
      </h1>
      <h2 className="text-lg text-gray-400">Accounts Executive & GST Consultant</h2>
      <p className="text-gray-400 leading-relaxed">
        Helping businesses simplify compliance through transparent, accurate, and reliable financial services.
      </p>
      <a
        href="#contact"
        className="inline-block bg-accent text-dark font-semibold px-8 py-3 rounded-full shadow-glow hover:scale-105 transition-transform"
      >
        Contact Me
      </a>
    </motion.div>
  
    <motion.div
      initial={{ x: 60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="md:w-1/2 flex justify-center"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-accent blur-3xl opacity-20"></div>
        <img
          src={profile}
          alt="Asif Raza"
          className="w-72 h-72 object-cover rounded-full border-4 border-accent shadow-glow"
        />
      </div>
    </motion.div>
  </section>
  
  );
};

export default Hero;
