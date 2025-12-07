import React, { useEffect, useState, useMemo, useContext } from 'react';
import { useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';

const ServiceDetails = () => {
    const { id } = useParams();
    const [services, setServices] = useState([]);
    const [booking, setBooking] = useState({ name: '', email: '' });
    const { user } = useContext(AuthContext);

    console.log('this is form details: ', user);

    useEffect(() => {
        fetch('/Data.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.error(error));
    }, []);

    const detailsBook = useMemo(() => {
        if (services.length === 0) return null;
        const newId = parseInt(id, 10);
        return services.find(service => service.serviceId === newId);
    }, [id, services]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBooking(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setBooking({ name: '', email: '' });
        const notify = () => toast("Your Booking Successfully Done");
        notify();
    };

    if (!detailsBook) {
        return (
            <div className="text-center p-10 text-gray-600 bg-gray-50 rounded-xl m-10 shadow-lg max-w-xl mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-red-500">Service Not Found</h2>
                <p>The requested service ID ({id}) could not be located in the data source.</p>
            </div>
        );
    }

    const imageUrl = detailsBook.image;

    const  handleOrder = (e) => {
            e.preventDefault();
            const form = e.target

                        
                  const buyerName = form.buyer.value;
                  const email  = form.email.value;
                  const  quantity  = parseInt(form.quantity.value);
                  const  price = parseInt(form.price.value);
                  const address  = form.address.value;
                  const phone  = form.phone.value;



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

                axios.post('http://localhost:3000/orders', formData)
                 .then(res => console.log(res))
                 .catch(err => console.log(err))

    }


    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-8 lg:p-12 mt-20 font-sans">
            <ToastContainer />
            <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="md:flex">
                    <div className="md:w-3/5 p-6 md:p-10 border-r border-gray-100">
                        <div className="rounded-xl overflow-hidden mb-8 shadow-xl border border-gray-100">
                            <img
                                className='w-full h-80 object-cover object-center transition duration-500 ease-in-out hover:scale-[1.03] transform'
                                src={imageUrl}
                                alt={detailsBook.serviceName}
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x600/fecaca/9d174d?text=Image+Missing" }}
                            />
                        </div>

                        <h1 className='text-4xl font-extrabold text-gray-800 mb-4 border-b pb-3 border-pink-100'>
                            <span className='mr-3 text-3xl'>📦</span>
                            {detailsBook.serviceName}
                        </h1>
                        <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                            {detailsBook.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-6 mt-6 pt-4 border-t border-gray-100">
                            <div className="flex items-center text-xl font-semibold text-yellow-700 bg-yellow-50 px-5 py-2 rounded-full shadow-md">
                                <span className="mr-2 text-2xl">⭐</span>
                                {detailsBook.rating}
                            </div>
                            <div className="flex items-center text-2xl font-bold text-pink-600 bg-pink-100 px-5 py-2 rounded-full shadow-md">
                                <span className="mr-1">$</span>
                                {detailsBook.price}
                            </div>
                            <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>
                                Make Order
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
                            <legend className="fieldset-legend">Order details</legend>

                            <label className="label">Product Name</label>
                            <input name='name'  readOnly defaultValue= {detailsBook.serviceName} type="text" className="input" placeholder="My awesome page" />

                            <label className="label">Buyer Name</label>
                            <input name='buyer' defaultValue={user?.displayName} type="text" className="input" placeholder="my-awesome-page" />

                            <label className="label">Buyer Email</label>
                            <input name='email' defaultValue={user?.email} type="email" className="input" placeholder="email" />

                            <label className="label">Quantity</label>
                            <input required name='quantity' type="number" className="input" placeholder="qunanitty" />

                            <label className="label">Price</label>
                            <input name='price' readOnly defaultValue={detailsBook.price} type="number" className="input" placeholder="price" />

                            <label className="label">Adress</label>
                            <input name='address' type="text" className="input" placeholder="Address" />

                            <label className="label">Phone</label>
                            <input name='phone' type="text" className="input" placeholder="phone" />

                            <button className="btn w-full btn-primary mt-3">Submit</button>
                        </form>
                       
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ServiceDetails;