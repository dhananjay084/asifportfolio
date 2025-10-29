import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ id }) => {
    return (
        <section 
            id={id} 
            className="h-screen flex flex-col justify-center items-start px-8 md:px-20 text-left 
            bg-[radial-gradient(circle_at_top_left,rgba(0,123,255,0.1),transparent_70%)]"
        >
            <motion.h1
                className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-blue"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Asif Raza
            </motion.h1>
            <motion.h2
                className="text-2xl md:text-3xl text-primary-blue font-light mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
              GST & Tax Consultant
            </motion.h2>
            <motion.p
                className="text-lg text-text-light max-w-xl mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                Your strategic partner in financial compliance, regulatory filings, and business advisory services.
            </motion.p>
            <motion.a
                href="#services"
                className="py-3 px-8 bg-primary-blue text-dark-navy font-bold rounded-md shadow-lg hover:bg-blue-600 transition duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 100 }}
            >
                View My Services
            </motion.a>
        </section>
    );
};

export default Hero;