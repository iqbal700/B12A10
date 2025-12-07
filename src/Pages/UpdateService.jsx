import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';

const UpdateService = () => {
    
    const {user} = useContext(AuthContext);
    const {id} = useParams();
    const [service, setService] = useState();
    const [category, setCategory] = useState();
    const navigation = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:3000/services/${id}`)
        .then(res => {
             setService(res.data);
             setCategory(res.data.category)
        })
    }, [id])

    console.log(service)

   const handleSubmit = (e) => {

    e.preventDefault();
     const form = e.target;
       const name = form.name.value;
       const category = form.category.value;
       const location = form.location.value;
       const price = parseInt(form.price.value);
       const description = form.description.value;
       const imgUrl = form.imageUrl.value;
       const date = form.date.value;
       const email = form.email.value;

        const formData = {
                name,
                category,
                location,
                price,
                description,
                imgUrl,
                date,
                email
     }

     console.log(formData);

     axios.put(`http://localhost:3000/update/${id}`, formData)
       .then(res => {
         console.log(res.data)
         navigation('/my-services')
       })
       .catch(err => console.log(err))
      
   }
    

    return (
            <div className="min-h-screen mt-10 p-8 flex items-center justify-center">
            <div className="w-full max-w-2xl bg-white bg-opacity-95 backdrop-blur-sm p-8 rounded-xl shadow-2xl">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-2">
                  Update Listing 🐾
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                    <label htmlFor="productPetName" className="block text-sm font-medium text-gray-700">
                    Product/Pet Name
                    </label>
                    <input
                    type="text"
                    name="name"
                    id="productPetName"
                    defaultValue={service?.name}
                    placeholder='Item name'
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

            
               <div className="flex space-x-4">

                <div className="flex-1">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                        Category
                    </label>
                    <select
                        value={category}
                        onChange={(e)=> setCategory(e.target.value)}
                        name="category"
                        id="category"
                        required
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
                    >
                        <option value="pets">Pets</option>
                        <option value="food">Food</option>
                        <option value="accessories">Accessories</option>
                        <option value="care products">Care Products</option>
                    </select>
                </div>

                <div className="flex-1">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                        Price
                    </label>
                    <input
                        type="number"
                        name="price"
                        defaultValue={service?.price}
                        id="price"
                        min="0"
                        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                    />
                </div>
            </div>

                <div className="flex space-x-4">
                    <div className="flex-1">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                        Location
                    </label>
                    <input
                        type="text"
                        name="location"
                        defaultValue={service?.location}
                        id="location"
                        placeholder="City, State"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    </div>
                    <div className="flex-1">
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                        Pickup Date
                    </label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    </div>
                </div>

                
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                    </label>
                    <textarea
                    name="description"
                    id="description"
                    rows="4"
                    placeholder="Tell us more about the item or pet..."
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                </div>

            
                <div>
                    <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
                    Image URL (of the Pet/Product)
                    </label>
                    <input
                    type="url"
                    name="imageUrl"
                    id="imageUrl"
                    placeholder="https://example.com/image.jpg"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

            
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Contact Email
                    </label>
                    <input
                    defaultValue={user?.email}
                    type="email"
                    name="email"
                    id="email"
                    readOnly
                    className="mt-1 block w-full px-3 py-2 border border-gray-200 bg-gray-50 rounded-md shadow-sm text-gray-600 cursor-not-allowed"
                    />
                </div>

            
                <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                >
                    Update Listing
                </button>
                </form>
            </div>
    </div>
    );
};

export default UpdateService;