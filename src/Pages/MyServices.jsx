import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';
import axios from 'axios';

const MyServices = () => {

    const [myServices, setMyServices] = useState([]);
    const {user} = useContext(AuthContext)
      
          useEffect(() =>{
              fetch(`http://localhost:3000/my-services?email=${user?.email}`)
              .then(res=> res.json())
              .then(data => setMyServices(data))
              .catch(err => console.log(err))
          }, [user?.email])
        
          console.log(myServices)


          const handleDelete = (id) => {
                axios.delete(`http://localhost:3000/delete/${id}`)
                 .then(res => {
                   console.log(res.data)
                   const filterData = myServices.filter(service => service?._id !== id )
                   setMyServices(filterData);

                 })
                 .catch(err => console.log(err))
          }

    return (
       <div className='mt-20 mx-auto overflow-hidden p-4 md:p-10 bg-gray-50 min-h-screen'>
            
    <h1 className='text-3xl sm:text-4xl md:text-5xl h1-heading font-extrabold text-[#093672] text-center mb-6 md:mb-10 border-b-2 md:border-b-4 border-pink-500 pb-2 md:pb-3 mx-auto block'>
        Your Offered Services 🛠️
    </h1>

    <div className="overflow-x-auto bg-white rounded-xl shadow-lg md:shadow-2xl border border-gray-100">
        <table className="table w-full">
            <thead className='bg-[#093672] text-white'>
                <tr>
                    <th className='p-3 md:p-4 rounded-tl-xl'>
                    </th>
                    <th className='p-3 md:p-4 text-base md:text-lg'>Service Details</th>
                    <th className='p-3 md:p-4 text-base md:text-lg hidden sm:table-cell'>Description</th>
                    <th className='p-3 md:p-4 text-base md:text-lg'>Price</th>
                    <th className='p-3 md:p-4 rounded-tr-xl text-base md:text-lg'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    myServices?.map((myservice, index) => 
                        <tr key={myservice?._id} className={'border-b border-gray-100 text-gray-700 transition duration-30'}>
                            <th className='font-bold text-base md:text-lg text-pink-500 py-3 px-3 md:px-4'>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12 md:h-16 md:w-16">
                                            <img
                                                className='rounded-full'
                                                src={myservice?.imgUrl}
                                                alt={myservice?.serviceName} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-extrabold text-[#093672] text-base md:text-xl">{myservice?.name || 'N/A'}</div>
                                        <div className="text-xs md:text-sm opacity-60 font-medium">category: {myservice?.category || 'N/A'}</div>
                                    </div>
                                </div>
                            </td>
                            <td className='hidden text-[16px] font-semibold sm:table-cell'>
                                {myservice?.description || 'N/A'}
                             
                            </td>
                            <td className='font-semibold text-green-600 text-lg md:text-xl'>{myservice?.price} tk</td>

                            <td className='flex flex-col sm:flex-row gap-2 md:gap-3 items-start sm:items-center py-4 md:h-28'>
                                <button 
                                    onClick={()=> handleDelete(myservice?._id) } 
                                    className="btn text-white bg-red-500 hover:bg-red-600 border-none btn-xs md:btn-sm"
                                >
                                    Delete
                                </button>

                                <Link to={`/update-services/${myservice._id}`}> 
                                    <button className="btn text-white bg-green-500 hover:bg-green-600 border-none btn-xs md:btn-sm">
                                        Edit
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    )
                }
                {myServices?.length === 0 && (
                    <tr>
                        <td colSpan="5" className="text-center py-8 text-gray-500 text-base md:text-lg">
                            You haven't added any services yet. 🐾
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
</div>
    );
};

export default MyServices;