import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FaUsers, FaHandshake } from 'react-icons/fa';

const Partnerships = ({ id }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const blockVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.7, type: "spring", stiffness: 100 } 
    },
  };

  return (
    <section
      id={id}
      className="min-h-[50vh] py-20 flex flex-col items-center text-center px-8"
    >
      <h2 className="text-4xl font-bold mb-4 text-white">
        <FaHandshake className="inline text-primary-blue mr-3" /> Trusted Collaborations
      </h2>
      <p className="text-lg text-text-light mb-12">
        Delivering comprehensive solutions through strong professional ties.
      </p>

      {/* Cards wrapper */}
      <div ref={ref} className="flex flex-col items-center w-full max-w-5xl gap-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-center gap-10 w-full">
          <motion.div
            className="bg-card-dark p-8 rounded-xl border border-primary-blue border-opacity-40 shadow-xl flex-1"
            variants={blockVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <FaUsers className="text-3xl text-primary-blue mx-auto mb-2" />
            <p className="text-primary-blue font-light">Tie up with:</p>
            <h3 className="text-2xl font-semibold text-white mt-1">
              Sangita Gupta & Associates
            </h3>
          </motion.div>

          <motion.div
            className="bg-card-dark p-8 rounded-xl border border-primary-blue border-opacity-40 shadow-xl flex-1"
            variants={blockVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <FaUsers className="text-3xl text-primary-blue mx-auto mb-2" />
            <p className="text-primary-blue font-light">Tie up with:</p>
            <h3 className="text-2xl font-semibold text-white mt-1">
              DN Dokania & Associates
            </h3>
          </motion.div>
        </div>

        {/* Bottom centered card */}
        <motion.div
          className="bg-card-dark p-8 rounded-xl border border-primary-blue border-opacity-40 shadow-xl w-full md:w-2/3 lg:w-1/2 mx-auto"
          variants={blockVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
        >
          <FaUsers className="text-3xl text-primary-blue mx-auto mb-2" />
          <p className="text-primary-blue font-light">Tie up with:</p>
          <h3 className="text-2xl font-semibold text-white mt-1">
            ADMK & Associates
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnerships;
