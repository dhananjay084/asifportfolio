import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => (
  <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-3xl font-bold text-center mb-8"
    >
      Contact Me
    </motion.h2>

    <div className="flex flex-col md:flex-row justify-around items-center gap-10">
      <div className="text-center space-y-4">
        <FaPhoneAlt className="mx-auto text-accent text-3xl" />
        <p className="text-lg">865-108-9346</p>
      </div>
      <div className="text-center space-y-4">
        <FaEnvelope className="mx-auto text-accent text-3xl" />
        <p className="text-lg">mdasifrazadcs@gmail.com</p>
      </div>
    </div>
  </section>
);

export default Contact;
