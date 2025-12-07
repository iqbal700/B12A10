import React from 'react';
import { motion } from 'framer-motion'; 
import tips01 from '../assets/tips.png'


const tips = [
  {
    "focus_area": "Indoor Safety",
    "key_action": "Keep Pets Inside when temperatures drop severely.",
    "rationale": "Prevents life-threatening Hypothermia and Frostbite. If it's too cold for you, it's too cold for them."
  },
  {
    "focus_area": "Paw Protection",
    "key_action": "Wipe Paws Thoroughly after every walk to remove ice, salt, and de-icing chemicals.",
    "rationale": "Salt and chemicals can cause irritation, cracking, and are toxic if licked."
  },
  {
    "focus_area": "Outdoor Attire",
    "key_action": "Bundle Up short-haired, small, elderly, or thin pets with a warm sweater or coat.",
    "rationale": "Provides essential insulation, as they lose body heat quickly."
  },
  {
    "focus_area": "Hazard Watch",
    "key_action": "Clean Up Antifreeze Spills immediately. Antifreeze is deadly poison, even in small amounts.",
    "rationale": "Minimizes risk of fatal ingestion; this is a top winter hazard due to its sweet taste."
  },
  {
    "focus_area": "Hydration",
    "key_action": "Ensure Fresh, Unfrozen Water is always accessible, both indoors and outdoors.",
    "rationale": "Dry indoor air and the cold can lead to dehydration; snow is not an adequate water source."
  },
  {
    "focus_area": "Sleeping Area",
    "key_action": "Provide a Warm, Draft-Free Bed elevated off cold floors.",
    "rationale": "Allows the pet to retain body heat more effectively for restful sleep."
  }
];


const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, 
            delayChildren: 0.15 
        }
    }
};


const itemVariants = {
    hidden: { opacity: 0, y: 50 }, 
    show: { 
        opacity: 1, 
        y: 0, 
        transition: {
            type: "spring",
            stiffness: 100 
        }
    }
};


const TipsCare = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <h1 className=' text-2xl md:text-3xl text-center h1-heading p-5'>Pet Care Tips</h1>
            
           
            <motion.div 
                className='card grid md:grid-cols-3 gap-7'
                variants={containerVariants}
                initial="hidden"
                whileInView="show" 
                viewport={{ once: true, amount: 0.3 }} 
            >
                {
                    tips.map((tip, index) => 
                        
                        <motion.div 
                            key={index} 
                            className='card-body shadow-sm bg-white rounded-lg p-5'
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.05, 
                                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", 
                                transition: { duration: 0.2 }
                            }}
                        >
                            <img className='w-10 h-10 rounded-full' src={tips01} alt="tips" />
                            <h1 className='text-2xl h1-heading'>{tip.focus_area} </h1>
                            <p className='text-gray-600 font-semibold'>{tip.key_action}</p>
                            <p className='text-gray-500 font-semibold'>{tip.rationale}</p>
                        </motion.div>
                    )
                }
            </motion.div>
        </div>
    );
};

export default TipsCare;