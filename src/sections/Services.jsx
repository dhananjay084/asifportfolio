import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FaFileInvoiceDollar, FaBalanceScale, FaChartLine, FaSignature, FaBuilding, FaUserCheck } from 'react-icons/fa';

const serviceData = [
    { title: "GST Registration", desc: "Seamless new business setup and compliance.", icon: FaFileInvoiceDollar },
    { title: "Income Tax Return", desc: "Accurate and timely personal & business filings.", icon: FaBalanceScale },
    { title: "ROC Filing", desc: "Registrar of Companies corporate governance.", icon: FaBuilding },
    { title: "Project Report / CMA", desc: "Detailed reports for finance, loans, and credit monitoring.", icon: FaChartLine },
    { title: "TDS Filing", desc: "Compliance with Tax Deduction at Source regulations.", icon: FaBalanceScale },
    { title: "Digital Signature Certificate", desc: "Obtaining secure e-signature for transactions.", icon: FaSignature },
    { title: "PAN/TAN Card", desc: "Essential tax identification documentation.", icon: FaUserCheck },
    { title: "Bookkeeping & Accounting", desc: "Maintain accurate and up-to-date financial records to ensure smooth business operations.", icon: FaBalanceScale },
    { title: "Financial Statements Preparation", desc: "Prepare clear and compliant balance sheets, income statements, and cash flow reports for informed decision-making.", icon: FaBalanceScale },
    { title: "Tax Audit", desc: "Statutory compliance verification and report.", icon: FaBalanceScale },

];

// Stagger Animation Variants
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1, 
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

const Services = ({ id }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 }); 

    return (
        <section id={id} className="min-h-screen pt-24 pb-16 flex flex-col items-center text-center px-8">
            <h2 className="text-4xl font-bold mb-4 text-white">
                <span className="text-primary-blue">Core</span> Services & Expertise
            </h2>
            <p className="max-w-xl text-lg text-text-light mb-12">
                Providing comprehensive, timely, and precise financial and regulatory services to ensure your business remains compliant and agile.
            </p>
            
            <motion.div 
                ref={ref}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {serviceData.map((service, index) => (
                    <motion.div 
                        key={index} 
                        className="bg-card-dark p-6 rounded-xl text-left border-l-4 border-primary-blue shadow-xl transition duration-300 hover:shadow-2xl hover:translate-y-[-5px]"
                        variants={itemVariants}
                    >
                        <div className="text-3xl text-primary-blue mb-4 p-3 bg-primary-blue bg-opacity-10 rounded-full inline-block">
                            <service.icon />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                        <p className="text-sm text-text-light">{service.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Services;