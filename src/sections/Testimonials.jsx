import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';

// Data grouped by service
const testimonialData = [
  { 
    service: "GST Registration", 
    quote: "Registration was done in record time! Absolutely seamless and professional guidance.", 
    client: "Vikas Sharma", 
    rating: 5 
  },
  { 
    service: "Income Tax Return", 
    quote: "Filing my ITR used to be stressful. Asif made it simple, accurate, and completely hassle-free.", 
    client: "Deepa Menon", 
    rating: 5 
  },
  { 
    service: "RoC Filing", 
    quote: "Excellent handling of our corporate governance and RoC filings. Highly reliable.", 
    client: "Aarav", 
    rating: 4 
  },
  { 
    service: "Project Report / CMA", 
    quote: "The Project Report prepared for our loan application was comprehensive and top-notch. Highly recommended for finance reports.", 
    client: "Bhavana", 
    rating: 5 
  },
  { 
    service: "TDS Filing", 
    quote: "Ensured 100% compliance with all our TDS requirements. Timely and meticulous work.", 
    client: "Rajan", 
    rating: 4 
  },
  { 
    service: "Digital Signature Certificate", 
    quote: "Quick and easy procurement of our DSC. Saved us a lot of time and effort.", 
    client: "Kishore", 
    rating: 5 
  },
  { 
    service: "PAN/TAN Card", 
    quote: "Guided us through the entire process for obtaining our official tax identification documents.", 
    client: "Priya", 
    rating: 5 
  },
  { 
    service: "Tax Audit", 
    quote: "Conducted a thorough and professional tax audit. Clear communication throughout.", 
    client: "Zenith", 
    rating: 4 
  },
];

// Determine cards per view based on screen size
const getCardsPerView = (width) => {
  if (width >= 1024) return 4; // lg: 4 cards
  if (width >= 768) return 2;  // md: 2 cards
  return 1;                    // default: 1 card
};

const Testimonials = ({ id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView(window.innerWidth));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const totalSlides = Math.ceil(testimonialData.length / cardsPerView);

  // Resize listener
  useEffect(() => {
    const handleResize = () => {
      const newCardsPerView = getCardsPerView(window.innerWidth);
      setCardsPerView(newCardsPerView);
      setCurrentIndex((prevIndex) => 
        Math.min(prevIndex, Math.ceil(testimonialData.length / newCardsPerView) - 1)
      );
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id={id} className="py-20 flex flex-col items-center text-center px-8 bg-[#181818] min-h-screen">
      <h2 className="text-4xl font-bold mb-4 text-white">
        <FaQuoteLeft className="inline text-primary-blue mr-3"/> Client <span className='text-primary-blue'>Testimonials</span>
      </h2>
      <p className="text-lg text-text-light mb-12 max-w-2xl">
        Hear directly from clients on how my expertise in GST, Tax, and Corporate Filings delivered peace of mind and success.
      </p>

      {/* Carousel Container */}
      <motion.div 
        ref={ref}
        className="relative w-full max-w-7xl overflow-hidden rounded-xl shadow-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1 }}
      >
        {/* Carousel Track */}
        <motion.div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
            width: `${totalSlides * 100}%`,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div
              key={slideIndex}
              className="grid gap-8 p-4 flex-shrink-0"
              style={{
                width: `${100 / totalSlides}%`,
                gridTemplateColumns: `repeat(${cardsPerView}, minmax(0, 1fr))`,
              }}
            >
              {testimonialData
                .slice(slideIndex * cardsPerView, (slideIndex + 1) * cardsPerView)
                .map((testimonial, cardIndex) => (
                  <motion.div
                    key={cardIndex}
                    className="bg-card-dark p-6 rounded-xl border border-primary-blue border-opacity-30 shadow-lg flex flex-col justify-between h-full"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: cardIndex * 0.15 }}
                  >
                    <p className="text-text-light text-base italic mb-4">
                      "{testimonial.quote}"
                    </p>
                    <div className="pt-4 border-t border-gray-700">
                      <div className="text-primary-blue flex space-x-1 mb-2">
                        {Array(5)
                          .fill()
                          .map((_, i) => (
                            <FaStar
                              key={i}
                              className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}
                            />
                          ))}
                      </div>
                      {/* Only show first name (hide firm or position) */}
                      <p className="text-white font-semibold">
                        {testimonial.client.split(' ')[0]}
                      </p>
                      {/* <p className="text-sm text-primary-blue">Service: {testimonial.service}</p> */}
                    </div>
                  </motion.div>
                ))}
            </div>
          ))}
        </motion.div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-4 bg-primary-blue text-dark-navy rounded-full shadow-lg hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed z-10 ml-2"
          disabled={currentIndex === 0}
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-4 bg-primary-blue text-dark-navy rounded-full shadow-lg hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed z-10 mr-2"
          disabled={currentIndex === totalSlides - 1}
        >
          <FaArrowRight />
        </button>
      </motion.div>

      {/* Slide Indicators */}
      <div className="flex space-x-2 mt-8">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-primary-blue' : 'bg-gray-700 hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
