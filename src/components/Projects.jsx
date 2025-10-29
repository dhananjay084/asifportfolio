import React from "react";
import { motion } from "framer-motion";

const Projects = () => (
  <section id="projects" className="max-w-6xl mx-auto px-6 py-20 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-3xl font-bold mb-8"
    >
      Reports & Projects
    </motion.h2>
    <p className="text-gray-400 max-w-2xl mx-auto">
      I have prepared several project reports and CMA data analyses for clients
      across multiple industries. My reports help businesses evaluate their
      financial performance and plan for sustainable growth.
    </p>
  </section>
);

export default Projects;
