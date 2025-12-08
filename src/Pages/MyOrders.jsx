import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const MyOrders = () => {

    const [myOrders, setMyOrders] = useState([]);
    const componentRef = useRef(); 

    useEffect(()=>{
            axios('https://petpaw-server-phi.vercel.app/orders')
             .then(res => setMyOrders(res.data))
             .catch(err => console.log(err))
    },[])

    console.log(myOrders)

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Order_History_List',
        pageStyle: '@page { size: A4; margin: 10mm; }',
    });


return (
    <div className='mt-20 px-4 md:px-10 py-10 bg-gray-50 min-h-screen'>
        
        <h1 className='text-4xl md:text-5xl h1-heading font-extrabold text-[#093672] text-center mb-10 border-b-4 border-pink-500 pb-3 inline-block mx-auto'>
            Your Order History 📝
        </h1>
        
        {myOrders.length > 0 && (
            <div className="flex justify-end mb-5">
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 px-5 py-2 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition duration-150"
                >
                    Download List as PDF
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75v-2.25M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </button>
            </div>
        )}

        <div ref={componentRef} className="overflow-x-auto bg-white rounded-xl shadow-2xl border border-gray-100">
            <table className="table w-full table-auto">
                <thead className='bg-[#093672] text-white'>
                    <tr className='text-sm md:text-base font-semibold border-b-2 border-pink-500'>
                        <th className='md:p-4 rounded-tl-xl'>#</th>
                        <th className='md:p-4'>Product Name</th>
                        <th className='md:p-4'>Quantity</th>
                        <th className='md:p-4'>Address</th>
                        <th className='md:p-4'>Price</th>
                        <th className='md:p-4 rounded-tr-xl'>Phone</th>
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


