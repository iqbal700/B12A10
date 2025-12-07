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
        <div className='mt-20 px-4 md:px-10 py-10 bg-gray-50 min-h-screen'>
            
            <h1 className='text-4xl md:text-5xl font-extrabold text-[#093672] text-center mb-10 border-b-4 border-pink-500 pb-3 inline-block mx-auto block'>
                Your Offered Services 🛠️
            </h1>

      <div className="overflow-x-auto bg-white rounded-xl shadow-2xl border border-gray-100">
      <table className="table w-full">
          {/* head */}
          <thead className='bg-[#093672] text-white'>
              <tr>
                  <th className='p-4 rounded-tl-xl'>
                  </th>
                  <th className='p-4 text-lg'>Service Details</th>
                  <th className='p-4 text-lg'>Description/Provider</th>
                  <th className='p-4 text-lg'>Price</th>
                  <th className='p-4 rounded-tr-xl text-lg'>Actions</th>
              </tr>
          </thead>
          <tbody>
        {
            myServices?.map((myservice, index) => 
                <tr key={myservice?._id} className={'border-b border-gray-100 text-gray-700 transition duration-30'}>
                    <th className='font-bold text-lg text-pink-500 py-3 px-4'>
                        {index + 1}
                    </th>
                    <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="mask mask-squircle h-16 w-16">
                                    <img
                                        src={myservice?.image}
                                        alt={myservice?.serviceName} />
                                </div>
                            </div>
                            <div>
                                <div className="font-extrabold text-[#093672] text-lg">{myservice?.serviceName || 'N/A'}</div>
                                <div className="text-sm opacity-60 font-medium">Rating: {myservice?.rating || 'N/A'}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        {myservice?.providerName || 'N/A'}
                        <br />
                        <span className="badge badge-lg bg-pink-500 text-white border-none mt-1">{myservice?.serviceArea || 'N/A'}</span>
                    </td>
                    <td className='font-extrabold text-green-600 text-xl'>{myservice?.price} tk</td>

                    <td className='flex gap-3 items-center h-28'>

                        <button 
                            onClick={()=> handleDelete(myservice?._id) } 
                            className="btn text-white bg-red-500 hover:bg-red-600 border-none btn-sm"
                        >
                            Delete
                        </button>

                        <Link to={`/update-services/${myservice._id}`}> 
                            <button className="btn text-white bg-green-500 hover:bg-green-600 border-none btn-sm">
                                Edit
                            </button>
                        </Link>
                    </td>
                </tr>

            )
                }
                  {myServices?.length === 0 && (
                    <tr>
                        <td colSpan="5" className="text-center py-8 text-gray-500 text-lg">
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