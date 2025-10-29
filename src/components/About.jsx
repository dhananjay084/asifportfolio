import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="max-w-6xl mx-auto px-6 py-20 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-3xl font-bold mb-6"
    >
      About Me
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.7 }}
      className="text-gray-400 leading-relaxed max-w-3xl mx-auto"
    >
      I am an Accounts Executive specializing in taxation, compliance, and
      business consulting. I assist clients in GST registration, income tax
      filings, ROC filings, and preparing CMA and project reports. I’m tied up
      with <span className="text-accent font-semibold">Sangita Gupta & Associates</span>
      and follow-up partner <span className="text-accent font-semibold">CA Rahul Sureka</span>.
      My goal is to simplify taxation for entrepreneurs and individuals.
    </motion.p>
  </section>
);

export default About;
