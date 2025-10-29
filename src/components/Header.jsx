import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav 
            className={`fixed top-0 left-0 w-full z-50 py-4 px-8 flex justify-between items-center transition-all duration-300 ${
                scrolled ? 'bg-dark-navy bg-opacity-95 shadow-lg' : 'bg-transparent'
            }`}
            initial={{ y: -100 }} 
            animate={{ y: 0 }} 
            transition={{ duration: 0.5 }}
        >
            <div className="text-2xl font-bold text-primary-blue">
                Asif Raza <span className="text-white font-light text-xl">| Consultant</span>
            </div>
            <div className="hidden md:flex space-x-8">
                {['home', 'services', 'partnerships', 'contact'].map((link) => (
                    <a 
                        key={link}
                        href={`#${link}`} 
                        className="text-text-light font-medium hover:text-primary-blue transition duration-300 relative group"
                    >
                        {link.charAt(0).toUpperCase() + link.slice(1)}
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
                    </a>
                ))}
            </div>
        </motion.nav>
    );
};

export default Header;