import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../Firebase/firebase.config';

const Profile = () => {
    const {user, setUser} = useContext(AuthContext);
    const [upOpen, setUpOpen] = useState(false);

    const handleUpdateProfile =(e) => {
        e.preventDefault();
        setUpOpen(!upOpen);
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;

         updateProfile(auth.currentUser, {
                        displayName: name, photoURL: photoURL
                        }).then(() => {
                          setUser({...user, photoURL:photoURL, displayName: name})
                        })
                        .catch((error) => {
                            console.log(error)
                        });  
    }


    return (
       <div className="max-w-xl mt-30 mx-auto px-4">
   
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-8 transition duration-300 border border-gray-100">
        
        <div className="flex flex-col items-center">
            
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-pink-300 p-0.5 shadow-lg mb-4">
                <img 
                    src={user?.photoURL} 
                    alt={''} 
                    className="w-full h-full object-cover rounded-full"
                />
            </div>
            
            <div className="text-center w-full mb-6">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-1 leading-tight">
                   Name: {user?.displayName || 'Welcome User!'}
                </h2>
                <p className="text-lg font-medium text-pink-600 mb-4">
                   Email: {user?.email || 'No Email Found'}
                </p>
                
                {!upOpen && (
                    <button 
                        onClick={handleUpdateProfile} 
                        className='mt-3 py-2 px-6 rounded-full text-base font-semibold text-white bg-pink-500 hover:bg-pink-600 transition duration-200 ease-in-out shadow-md focus:outline-none focus:ring-4 focus:ring-pink-300'
                    >
                        Update Profile
                    </button>
                )}
            </div>
        </div>

     
        {upOpen && (
            <div className="mt-6 p-6 bg-pink-50 rounded-xl border border-pink-200 shadow-inner">
                <h3 className="text-xl font-bold text-pink-700 mb-4 text-center">Edit Profile</h3>
                <form onSubmit={handleUpdate} className="space-y-4">
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input 
                            defaultValue={user?.displayName} 
                            name='name' 
                            type="text" 
                            className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:ring-pink-500 focus:border-pink-500 transition duration-150 shadow-sm" 
                            placeholder="Your name"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
                        <input 
                            defaultValue={user?.photoURL} 
                            name='photoURL' 
                            type="text" 
                            className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:ring-pink-500 focus:border-pink-500 transition duration-150 shadow-sm" 
                            placeholder="Photo URL"
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="w-full py-2 px-4 rounded-lg font-semibold text-white bg-gray-700 hover:bg-gray-800 transition duration-200 ease-in-out shadow-lg"
                    >
                        Save Changes
                    </button>
                    
                </form>
            </div>
        )}
    </div>
</div>
    );
};

export default Profile;


