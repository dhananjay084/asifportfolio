import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = ({ id }) => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sent! I will respond to your query shortly.');
        e.target.reset(); // Clear form
        // NOTE: For production, integrate with a backend service (e.g., Formspree, Netlify Forms) here.
    };

    const infoItem = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    return (
        <section 
            id={id} 
            className="py-20 flex flex-col items-center px-8 
            bg-[radial-gradient(circle_at_bottom_right,rgba(0,123,255,0.1),transparent_70%)]"
        >
            <h2 className="text-4xl font-bold mb-4 text-white">
                <FaPaperPlane className="inline text-primary-blue mr-3"/> Get In Touch
            </h2>
            <p className="text-lg text-text-light mb-12">
                Let's discuss your compliance and financial advisory needs.
            </p>

            <div className="flex flex-col lg:flex-row justify-between w-full max-w-6xl gap-12 mt-10">
                
                {/* Contact Information Block */}
                <motion.div
                    className="flex-1 lg:p-0 text-center lg:text-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    <h3 className="text-3xl font-bold mb-8 text-primary-blue">Contact Details</h3>
                    
                    <motion.div variants={infoItem} className="flex  justify-center lg:justify-start mb-6">
                        <FaPhoneAlt className="text-primary-blue text-xl mr-4 flex-shrink-0"/>
                        <p className="text-lg">+91 865-108-9346</p>
                    </motion.div>
                    
                    <motion.div variants={infoItem} className="flex  justify-center lg:justify-start mb-6">
                        <FaEnvelope className="text-primary-blue text-xl mr-4 flex-shrink-0"/>
                        <p className="text-lg">mdasifrazadcs@gmail.com</p>
                    </motion.div>

                    <motion.div variants={infoItem} className="flex  justify-center lg:justify-start mb-6">
                        <FaMapMarkerAlt className="text-primary-blue text-xl mr-4 flex-shrink-0"/>
                        <p className="text-lg">Serving clients across India (Online & Local)</p>
                    </motion.div>
                </motion.div>

                {/* Contact Form Block */}
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <h3 className="text-3xl font-bold mb-8 text-white">Send Me a Message</h3>
                    <form
  action="https://formspree.io/f/mqagqnvj" // <-- replace with your real Formspree endpoint
  method="POST"
  className="flex flex-col p-8 bg-card-dark rounded-xl shadow-2xl"
>
  <input 
    type="text" 
    name="name"
    placeholder="Your Name" 
    required 
    className="p-4 mb-5 border-none rounded-lg bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-primary-blue"
  />
  <input 
    type="email" 
    name="email"
    placeholder="Your Email" 
    required 
    className="p-4 mb-5 border-none rounded-lg bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-primary-blue"
  />
  <input 
    type="tel" 
    name="phone"
    placeholder="Phone Number" 
    required 
    className="p-4 mb-5 border-none rounded-lg bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-primary-blue"
  />
  <textarea 
    name="message"
    placeholder="Your Compliance Query..." 
    required 
    rows="5"
    className="p-4 mb-5 border-none rounded-lg bg-[#2a2a2a] text-white resize-y focus:outline-none focus:ring-2 focus:ring-primary-blue"
  />
  <motion.button 
    type="submit" 
    className="py-3 px-8 bg-primary-blue text-dark-navy font-bold text-lg rounded-lg transition duration-300"
    whileHover={{ scale: 1.02, backgroundColor: '#0056b3' }} 
    whileTap={{ scale: 0.98 }}
  >
    Submit Query
  </motion.button>
</form>

                </motion.div>
            </div>
        </section>
    );
};

export default Contact;