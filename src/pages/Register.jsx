import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth'; 
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
const Register = () => {
    const { createUser, setUser,signInWithGoogle } = use(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate(); 
    const location=useLocation();
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user=result.user;
                console.log(user);
                
                navigate(location?.state ? location.state : "/");
            })
            .catch((err) => {
                setError(err.message);
            });
    };
    const handleRegister = (e) => {
        e.preventDefault();
        setError("");
       const form = e.target;
      const name = form.name.value;
      const photo = form.photo.value;
         const email = form.em.value;
        const password = form.pass.value;
        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError("Password must contain at least one uppercase letter.");
            return;
        }
      
        if (!/[a-z]/.test(password)) {
            setError("Password must contain at least one lowercase letter.");
            return;
        }
        
       
        createUser(email, password)
            .then((result) => {
                const user = result.user;
               updateProfile(user, {
                    displayName: name,
                    photoURL: photo
                })
                .then(() => {
                
                  setUser({ ...user, displayName: name, photoURL: photo });
                    navigate(location?.state ? location.state : "/"); 
                })
                .catch(err => console.log("Profile update error", err));
            })
            .catch((error) => {
                 console.error("Registration error:", error.message);
                 setError(error.message);
                
            });
    };
    return (
        <div className='flex justify-center items-center'>
            <div className="card bg-base-300 w-full max-w-sm shrink-0 shadow-2xl py-5">
                  <h2 className='font-semibold text-2xl text-center'>Register your account</h2>
                 <form onSubmit={handleRegister} className="card-body">
                <fieldset className="fieldset">
                        {/* name */}
                    <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="Name" required />
                      {/* photo url */}
                <label className="label">Photo URL</label>
                        <input name='photo' type="text" className="input" placeholder="Photo URL" required />
                      {/* email */}
            <label className="label">Email</label>
                        <input name='em' type="email" className="input" placeholder="Email" required />
                        {/* password */}
                  <label className="label">Password</label>
                      <input name='pass' type="password" className="input" placeholder="Password" required />
                       {error && ( <p className="text-red-600    text-xs ">  {error} </p>
                        )} 
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    <p className='font-semibold text-center pt-5'>
                            Already Have An Account? {" "} 
                        <Link className='text-secondary' to='/auth/login'>Login</Link>
                        </p>
                    </fieldset>
                </form>
                <div className='space-y-3'> 
<button    onClick={handleGoogleSignIn} className="btn btn-secondary btn-outline w-full"><FcGoogle size={24} /> Login with Google </button>
</div>
            </div>
        </div>
    );
};

export default Register;
