import React from 'react';
import { motion } from 'framer-motion'; 

import vet01 from '../assets/VET-01.jpg';
import vet02 from '../assets/Vet-02.jpg';
import vet03 from '../assets/Vet-03.jpeg';

const expertData = [
    {
        id: 1,
        name: "Dr. Elena Petrova",
        title: "Head of Global VAT Strategy",
        experience: "25 Years Experience",
        image: vet01
    },
    {
        id: 2,
        name: "Dr. Anjali Verma",
        title: "VAT Technology & Digital Services Lead",
        experience: "16 Years Experience",
        image: vet02
    },
    {
        id: 3,
        name: "Dr. Isabelle Dubois",
        title: "EU & E-Commerce VAT Specialist",
        experience: "19 Years Experience",
        image: vet03
    }
];


const cardVariants = {
   
    1: {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    },
   
    2: {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 } }
    },

    3: {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1.0, delay: 0.2 } }
    },
};

const Vat = () => {
    return (
        <div className='flex flex-col mt-10'>
          
            <motion.h1 
                className='w-full font-bold h1-heading text-5xl text-center p-5'
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }}   
                transition={{ duration: 0.5 }}  
            >
                Meet our Expert 
            </motion.h1>
          
            <div className='flex md:flex-row flex-col justify-center items-center'>
    
                {expertData.map((expert) => (
                    <motion.div 
                        key={expert.id} 
                        className='p-5'
                        variants={cardVariants[expert.id]}
                        initial="hidden"
                        whileInView="visible" 
                        viewport={{ once: true, amount: 0.5 }} 
                    >
                        <div className="card bg-base-100 shadow-sm p-3 hover:shadow-lg transition-shadow duration-300">
                            <figure>
                                <img 
                                    className='h-100 w-350'
                                    src={expert.image}
                                    alt="VAT Expert" 
                                />
                            </figure>
                            <div className="card-body h1-heading text-gray-500">
                                <h2 className="card-title">{expert.name}</h2>
                                <p>{expert.title}</p>
                                <p>{expert.experience}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Vat;