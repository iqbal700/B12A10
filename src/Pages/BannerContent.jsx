import React from 'react';
import { motion } from 'framer-motion';

const BannerContent = ({ title, description, imageSrc, imageAlt }) => {
    
    const contentVariant = {
        initial: { x: -100, opacity: 0 },
        animate: { x: 0, opacity: 1 },
    };

    const imageVariant = {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
    };

    return (
        <div 
            className={`h-[600px] w-full flex md:flex-row flex-col  items-center justify-between bg-gray-100 relative`}
        >
         
            <motion.div 
                key={description} 
                className="md:w-1/2 w-full md:p-26 p-15 z-10 space-y-3.5 h1-heading"
                variants={contentVariant}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                  {/* Text Section  */}
                <p className="text-2xl font-semibold text-[#093672] md:w-150">{description}</p>
                <h2 className="text-[17px] text-gray-700 mb-4">{title}</h2>
                <motion.button 
                 
                    className="md:mt-8 px-6 py-3 border text-[#093672] font-bold rounded-lg hover:bg-[#093672] hover:text-white transition"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    Shop Now
                </motion.button>
            </motion.div>

            {/* Image Section  */}
            <motion.div 
                key={imageSrc} 
                className="md:w-1/2 w-full h-full z-10 flex justify-center items-center"
                variants={imageVariant}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
            >
                <img 
                    src={imageSrc} 
                    alt={imageAlt} 
                    className='h-4/5 w-4/5 object-contain rounded-xl shadow-2xl'
                />
            </motion.div>
        </div>
    );
};

export default BannerContent;
