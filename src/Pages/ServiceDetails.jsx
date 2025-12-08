import React, { useEffect, useState, useMemo, useContext } from 'react';
import { useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';

const ServiceDetails = () => {
    const { id } = useParams();
    const [detailsService, setDetailsService] = useState(null); 
    const { user } = useContext(AuthContext);

    console.log('this is form details: ', user);

    useEffect(() => {
        axios.get(`https://petpaw-server-phi.vercel.app/services/${id}`)
            .then(res => {
                setDetailsService(res.data);
            })
            .catch(error => {
                console.error("Error fetching service details:", error);
                setDetailsService(false);
            });
    }, [id]);


    if (detailsService === null) {
        return <div className="text-center p-10 mt-20 text-gray-600">Loading...</div>;
    }

    if (detailsService === false) {
        return (
            <div className="text-center p-10 text-gray-600 bg-gray-50 rounded-xl m-10 shadow-lg max-w-xl mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-red-500">Service Not Found</h2>
                <p>The requested service ID ({id}) could not be located in the data source.</p>
            </div>
        );
    }
    
    const imageUrl = detailsService.imgUrl;

    const handleOrder = (e) => {
        e.preventDefault();
        const form = e.target

        const buyerName = form.buyer.value;
        const email = form.email.value;
        const quantity = parseInt(form.quantity.value);
        const price = parseInt(form.price.value);
        const address = form.address.value;
        const phone = form.phone.value;


        const formData = {
            productId: id,
            buyerName,
            email,
            quantity,
            price,
            address,
            phone,
            Date:new Date()
        }

        console.log(formData)

        axios.post('https://petpaw-server-phi.vercel.app/orders', formData)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }


    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-8 lg:p-12 mt-20 font-sans">
            <ToastContainer />
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="md:flex">
                    <div className=" w-full p-6 md:p-10 border-r border-gray-100">
                        <div className="rounded-xl overflow-hidden mb-8 shadow-xl border border-gray-100">
                            <img
                                className='w-full h-80 object-cover object-center transition duration-500 ease-in-out hover:scale-[1.03] transform'
                                src={imageUrl}
                                alt={detailsService.name}
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x600/fecaca/9d174d?text=Image+Missing" }}
                            />
                        </div>

                        <h1 className='text-4xl h1-heading font-extrabold text-gray-800 mb-4 border-b pb-3 border-pink-100'>
                            <span className='mr-3 text-3xl'>📦</span>
                            {detailsService.name}
                        </h1>
                        <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                            {detailsService.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-6 mt-6 pt-4 border-t border-gray-100">
                            <div className="flex items-center text-xl font-semibold text-yellow-700 bg-yellow-50 px-5 py-2 rounded-full shadow-md">
                                <span className="mr-2 text-xl">{detailsService.category}</span>
                             
                            </div>
                            <div className="flex items-center text-xl font-bold text-[#093672] bg-yellow-50 px-5 py-2 rounded-full shadow-md">
                                <span className="mr-1">$</span>
                                {detailsService.price}
                            </div>
                            <button className=" border border-[#093672] hover:bg-[#093672] hover:text-white p-2 rounded-lg" onClick={() => document.getElementById('my_modal_3').showModal()}>
                               Adopt / Order Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="p-4">
                        <form onSubmit={handleOrder} className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <legend className="fieldset-legend text-3xl h1-heading">Order details</legend>

                            <label className="label">Product Name</label>
                            <input name='name'  readOnly defaultValue= {detailsService.name} type="text" className="input" placeholder="My awesome page" />

                            <label className="label">Buyer Name</label>
                            <input name='buyer' defaultValue={user?.displayName} type="text" className="input" placeholder="my-awesome-page" />

                            <label className="label">Buyer Email</label>
                            <input name='email' defaultValue={user?.email} type="email" className="input" placeholder="email" />

                            <label className="label">Quantity</label>
                            <input required name='quantity' type="number" className="input" placeholder="qunanitty" />

                            <label className="label">Price</label>
                            <input name='price' readOnly defaultValue={detailsService.price} type="number" className="input" placeholder="price" />

                            <label className="label">Adress</label>
                            <input name='address' type="text" className="input" placeholder="Address" />

                            <label className="label">Phone</label>
                            <input name='phone' type="text" className="input" placeholder="phone" />

                            <button className="btn w-full btn-primary text-white bg-[#093672] hover:bg-gray-700 mt-3">Submit</button>
                            
                        </form>
                        
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ServiceDetails;