import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const location = useLocation();
    
    const [email, setEmail] = useState(location.state?.email || "");
    const auth = getAuth();

    const handleReset = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Reset link sent to your email!");
                // জিমেইলে রিডাইরেক্ট করা
                window.location.href = "https://mail.google.com/";
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-300 w-full max-w-sm shadow-2xl p-8">
                <h2 className='text-2xl font-bold text-center mb-4'>Reset Password</h2>
                <form onSubmit={handleReset}>
                    <div className="form-control">
                        <label className="label">Email Address</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className="input input-bordered" 
                            required 
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-full mt-4">Reset Password</button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;