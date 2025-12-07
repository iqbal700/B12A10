import React from 'react';
import { useNavigate, useParams } from 'react-router';
import auth from '../Firebase/firebase.config';
import { sendPasswordResetEmail } from 'firebase/auth';

const Forgetpass = () => {

    const {email} = useParams();
    console.log(email)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const formEmail = e.target.email.value;
    sendPasswordResetEmail(auth, formEmail)
        .then(() => {
               window.open('https://mail.google.com/mail/u/0/#inbox')
            })
            .catch((error) => {
              console.log(error);
              
            });
    }
  
    return (
        <div className="card mt-20 mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className='card-body'>
            <form onSubmit={handleSubmit} >
                <fieldset className="fieldset">
                <label className="label">Email</label>
                <input defaultValue={email}  name='email' type="email" className="input" placeholder="Email"/>                   
                <button  className="btn btn-neutral mt-4">submit</button>
            </fieldset>
        </form>
        </div>
        </div>
        
    );
};

export default Forgetpass;