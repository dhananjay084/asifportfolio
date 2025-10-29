import React from "react";
import { motion } from "framer-motion";
import { services } from "../data/services";

const Services = () => (
  <section id="services" className="max-w-6xl mx-auto px-6 py-20">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-3xl font-bold text-center mb-12"
    >
      Services
    </motion.h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {services.map((s, i) => (
     <motion.div
     key={i}
     whileHover={{ scale: 1.05, y: -5 }}
     initial={{ opacity: 0, y: 40 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ delay: i * 0.1 }}
     className="bg-secondary/50 border border-accent/30 p-8 rounded-2xl shadow-glow text-center hover:shadow-accent/40"
   >
     <h3 className="text-lg font-semibold text-accent mb-3">{s.title}</h3>
     <p className="text-gray-400 text-sm">{s.description}</p>
   </motion.div>
   
      ))}
    </div>
  </section>
);

export default Services;
