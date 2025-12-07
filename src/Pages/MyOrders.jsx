import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyOrders = () => {


    const [myOrders, setMyOrders] = useState([]);

    useEffect(()=>{
            axios('http://localhost:3000/orders')
             .then(res => setMyOrders(res.data))
             .catch(err => console.log(err))
    },[])

    console.log(myOrders)

return (
    <div className='mt-20 px-4 md:px-10 py-10 bg-gray-50 min-h-screen'>
        
        <h1 className='text-4xl md:text-5xl font-extrabold text-[#093672] text-center mb-10 border-b-4 border-pink-500 pb-3 inline-block mx-auto block'>
            Your Order History 📝
        </h1>
        
        <div className="overflow-x-auto bg-white rounded-xl shadow-2xl border border-gray-100">
            <table className="table w-full table-auto">
                <thead className='bg-[#093672] text-white'>
                    <tr className='text-sm md:text-base font-semibold border-b-2 border-pink-500'>
                        <th className='p-4 rounded-tl-xl'>#</th>
                        <th className='p-4'>Product Name</th>
                        <th className='p-4'>Quantity</th>
                        <th className='p-4'>Address</th>
                        <th className='p-4'>Price</th>
                        <th className='p-4 rounded-tr-xl'>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders.map((myOrder, index) => 
                            <tr key={index} className={`border-b border-gray-100 text-gray-700 transition duration-300 ${index % 2 === 0 ? 'bg-white' : 'bg-pink-50/50'} hover:bg-pink-100/80`}>
                                <th className='font-bold text-lg text-pink-500 py-3 px-4'>{index+1}</th>
                                <td className='font-medium text-[#093672] py-3 px-4'> {myOrder.buyerName}</td> 
                                <td className='py-3 px-4 font-mono'>{myOrder.quantity} </td>
                                <td className='py-3 px-4 text-sm max-w-[200px] truncate'>{myOrder.address}</td>
                                <td className='py-3 px-4 font-bold text-green-600'>{myOrder.price}tk </td>
                                <td className='py-3 px-4 font-mono'>{myOrder.phone}</td>
                            </tr>
                        )
                    }
                    {myOrders.length === 0 && (
                        <tr>
                            <td colSpan="6" className="text-center py-8 text-gray-500 text-lg">
                                No orders found. Start shopping now! 🛍️
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyOrders;