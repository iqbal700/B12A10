import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react"

const PopularSection = () => {

    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch('/Data.json')
        .then(res=> res.json())
        .then(data => setServices(data))
    }, [])

   
    return (
        <div className='md:mx-[140px] p-5'>
            <h1 className='font-bold h1-heading text-2xl md:text-5xl text-center p-5'>Popular Pet Section </h1>

               <div className='grid w-full grid-cols-1 md:grid-cols-3 gap-3'>
                  {
                    services.map(service =>
                        
                          <div className="card w-full bg-base-100 shadow-sm p-2">
                            <figure>
                                <img className='h-100 w-350'
                                src={service.image}
                                alt="Shoes" />
                            </figure>
                            <div className=" h1-heading flex flex-col gap-5 p-3">
                                <h2 className="card-title">{service.serviceName}</h2>
                                <p className='text-gray-500'>{service.description}</p>
                                <div className='flex justify-between items-center font-semibold text-2xl'>
                                    <p className=' '>{service.rating} </p>
                                    <p className='  '>${service.price} </p>
                                    
                                </div>
                                <div className="card-actions justify-end">
                               <Link to={`/details/${service.serviceId}`}>
                                         <button  className=" p-3 border text-[#093672] font-bold rounded-lg hover:bg-[#093672] hover:text-white transition">View Details</button>
                                    </Link>
                                </div>
                            </div>
                    </div>
                
                         
                    )
                  }
               </div>
            </div>
        
    );
};

export default PopularSection;