import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

const Services = () => {

    const [services, setServices] = useState([]);
    const [category, setCategory] = useState('')

     
    

      // ==-== when we use database for showing data in the web page then use it ==-== //
       useEffect(() =>{
          fetch(`http://localhost:3000/services?category=${category}`)
          .then(res=> res.json())
          .then(data => setServices(data))
      }, [category])
   
      console.log(services)
   
       return (
            <div className='md:mx-[140px] p-5 mt-10'>
                    <h1 className='font-bold h1-heading text-2xl md:text-5xl text-center p-5'>ALL Pet Section </h1>

                   <select onChange={(e)=> setCategory(e.target.value)} defaultValue="choose category" className="select my-5">
                       <option value="pets">Pets</option>
                        <option value="food">Food</option>
                        <option value="accessories">Accessories</option>
                        <option value="care products">Care Products</option>
                    </select>

                          <div className='grid w-full grid-cols-1 md:grid-cols-3 gap-3'>
                             {
                               services.map(service =>
                                   
                                     <div className="card w-full bg-base-100 shadow-sm p-2">
                                       <figure>
                                           <img className='h-100 w-350'
                                           src={service.imgUrl}
                                           alt="pet" />
                                       </figure>
                                       <div className=" h1-heading flex flex-col gap-5 p-3">
                                           <h2 className="card-title">{service.serviceName}</h2>
                                           <p className='text-gray-500'>{service.description}</p>
                                           <div className='flex justify-between items-center font-semibold text-2xl'>
                                               <p className=' '>{service.category} </p>
                                               <p>${service.price} </p>
                                               
                                           </div>
                                           <div className="card-actions justify-end">
                                          <Link to={`/details/${service._id}`}>
                                                    <button className="p-2 rounded-lg text-[#093672] border">View Details</button>
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

export default Services;