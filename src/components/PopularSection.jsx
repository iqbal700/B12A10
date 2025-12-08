import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

// Define the CategoryCard component
const CategoryCard = ({ title, icon, categoryName }) => {
    return (
        <Link 
            to={`/services?category=${categoryName}`} 
            className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition duration-300 border border-gray-100 cursor-pointer"
        >
            <div className="text-4xl mb-3 text-[#093672]">
                {icon}
            </div>
            <h3 className="text-lg font-bold text-gray-800 text-center">
                {title}
            </h3>
        </Link>
    );
};


const PopularSection = () => {

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
        <div className='md:mx-[140px] p-5'>
          
            <h2 className='text-xl md:text-3xl font-bold text-gray-800 text-center mb-6 mt-8'>
                Shop by Category 🛒
            </h2>
            <div className='grid w-full grid-cols-2 md:grid-cols-4 gap-6 mb-12'>
                <CategoryCard 
                    title="🐶 Pets (Adoption)" 
                    icon="🐾" 
                    categoryName="pets" 
                />
                <CategoryCard 
                    title="🍖 Pet Food" 
                    icon="🥩" 
                    categoryName="food" 
                />
                <CategoryCard 
                    title="🧸 Accessories" 
                    icon="🦴" 
                    categoryName="accessories" 
                />
                <CategoryCard 
                    title="💊 Pet Care Products" 
                    icon="🏥" 
                    categoryName="care" 
                />
            </div>
            {/* END OF CATEGORY CARDS SECTION */}
            
             <h1 className='font-bold h1-heading text-2xl md:text-5xl text-center p-5'>Popular Pet Section </h1>

            <div className='grid w-full grid-cols-1 md:grid-cols-3 gap-3'>
                {
                    services.map(service =>
                        
                        <div key={service._id} className="card w-full max-h-120 bg-base-100 shadow-sm p-2">
                            <figure>
                                <img className='h-100 w-350'
                                src={service.imgUrl}
                                alt="Shoes" />
                            </figure>
                            <div className=" h1-heading flex flex-col gap-5 p-3">
                                <h2 className="card-title">{service.serviceName}</h2>
                                <p className='text-gray-500'>{service.description}</p>
                                <div className='flex justify-between items-center font-semibold text-2xl'>
                                    <p className=' '>{service.category} </p>
                                    <p className=' '>${service.price} </p>
                                    
                                </div>
                                <div className="card-actions justify-end">
                                <Link to={`/details/${service._id}`}>
                                    <button  className=" p-3 border text-[#093672] font-bold rounded-lg hover:bg-[#093672] hover:text-white transition">View Details</button>
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


