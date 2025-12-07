import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../Firebase/firebase.config';
import { LogOut } from 'lucide-react';
import { PawPrint } from 'lucide-react';
import { UserPlus } from 'lucide-react';

const Navbar = () => {

  const {user} = useContext(AuthContext);

  const handleSignOut = () => {
     signOut(auth)
  }


    const links =
        <div className='nav-links flex gap-4 text-white '>
        <NavLink  to='/'> Home </NavLink>
        <NavLink  to='/services' > Services </NavLink>
        {
            user && 
            <> 
               <NavLink to='/add-service'> Add Service</NavLink>
               <NavLink to='/my-services'> My Service</NavLink>
               <NavLink to='/myorders'> My Order</NavLink>
              <NavLink to='/profile'> My Profile </NavLink>
             </>
        }
        </div>

    return (
       <div className="navbar fixed top-0 z-50 justify-between p-3 w-full bg-[#093672]  shadow-sm">
            <div className="flex">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                        <ul className="p-2 flex flex-col space-x-3">
                            {links}
                        </ul>
                        
                    </ul>
                </div>
                
                 <div className="flex items-center text-3xl font-bold text-blue-300">
                    <PawPrint className="w-8 h-8 mr-2 text-blue-300" />
                        Petpaws
                </div>

            </div>

            <div className="hidden lg:flex space-x-5">
                  {links} 
            </div>

            <div className='flex items-center justify-center gap-2'>

              <div>
    {
        user ? (
            <NavLink 
                onClick={handleSignOut} 
                to='/login'
                className='flex items-center space-x-2 p-2 text-white border rounded-lg transition-colors duration-200 font-semibold'
            > 
                <LogOut size={18} aria-hidden="true" />
                <span>Logout</span>
            </NavLink>
        ) : (
            <NavLink 
                to='/login'
               
                className='flex items-center px-4 py-2 hover:scale-x-102  text-white transition-colors duration-200 font-semibold border rounded-lg'
            > 
                 <UserPlus size={18} aria-hidden="true" />
                <span>Login</span>
            </NavLink>
        )
    }
            </div>

            {
                !user && (
                <NavLink 
                    to='/register'
                    className='flex border items-center space-x-2 p-2 hover:scale-x-102  text-white rounded-lg transition-colors duration-200 font-semibold shadow-md '
                > 
                    <UserPlus size={18} aria-hidden="true" />
                    <span>Register Now</span>
                </NavLink>
                )
            }
            
            {
                user && (
                         <div className="w-12 h-12 rounded-full border-2 border-blue-300 p-0.5 shadow-lg">
                            <img 
                                src={user?.photoURL} 
                                alt={''} 
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                )
            }

           


            </div>

            
           
       </div>
    );
};

export default Navbar;