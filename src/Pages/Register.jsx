import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../Firebase/firebase.config';
import { FcGoogle } from "react-icons/fc";

const Register = () => {

    const {registerwithEmailPass, setUser, handlegoogleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
   

    const handleSubmit = (e) => {

            e.preventDefault();
            const email = e.target.email.value;
            const pass = e.target.password.value;
            const name = e.target.name.value;
            const photourl = e.target.photoUrl.value;

            const uppercase = /[A-Z]/;
            const lowercase = /[a-z]/;

            if ( pass.length < 6) {
                return alert('must be 6 character')
            }
            if (!uppercase.test(pass)) {
                return alert('must be uppercase')
            }
            if (!lowercase.test(pass)) {
                return alert('must be lowercase')
            }
            

           
            registerwithEmailPass(email, pass)
                .then((userCredential) => {

                    updateProfile(auth.currentUser, {
                        displayName: name, photoURL: photourl
                        }).then(() => {
                          setUser(userCredential.user)
                          navigate('/')
                        
                        })
                        .catch((error) => {
                            console.log(error)
                        });                    
                    })
                    .catch(error => {
                        console.log('error message', error)
                    })
          
    }


      const googleSignIn = () => {

        handlegoogleSignIn()
         .then(result => setUser(result.user))
          .catch(error => console.log(error))
    }

    return (
        <div className="card mt-20 mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="fieldset">
                        <label className="label">Name</label>
                        <input name='name'  type="text" className="input" placeholder="Full Name" />
                        <label className="label">Email</label>
                        <input name='email'  type="email" className="input" placeholder="Email" />
                        <label className="label">Photo Url</label>
                        <input name='photoUrl'  type="text" className="input" placeholder="Photo url" />                    
                        <label className="label">Password</label>
                        <input name='password'  type="password" className="input" placeholder="Password" />
                        <button className="btn btn-neutral mt-4">Register</button>
                   </form>
                     <div onClick={googleSignIn} className='btn my-1 bg-gray-100'><FcGoogle />Sign in with  google</div>
                     <div className='text-center'><span>Already have an account?</span> <Link to='/login' className='text-blue-700'>Login</Link></div>
                  

                </div>
            </div>
        
    );
};

export default Register;

