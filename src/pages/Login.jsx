import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const {signIn,signInWithGoogle}=use(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
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
    const handleLogin=(e)=>{
        e.preventDefault();
        setError("");
        const form=e.target;
     const email=form.em.value;
     const password =form.pass.value;
     console.log({email,password});
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
     signIn(email,password)
     .then(result=>{
        const user=result.user;
        console.log(user);

        navigate(location?.state ? location.state : "/");
     })
     .catch((error)=>{
        const errorCode=error.code;
        const errorMessage=error.message;
        setError(errorMessage)
        //alert(errorCode,errorMessage);
     });
    };
    return (
        <div className='flex justify-center  items-center'>
            <div className="card bg-base-300 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Login your account</h2>
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
  
            {/* email */}
          <label className="label">Email</label>
          <input name='em' type="email" className="input" placeholder="Email" required />
          {/* password */}
          <label className="label">Password</label>
          <input name='pass' type="password" className="input" placeholder="Password" required />
          <div><a className="link link-hover">Forgot password?</a></div>
          {error && <p className='text-red-400 text-xs'>{error}</p>}
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
        <p className='font-semibold text-center pt-5'>
            Don't Have An Account ? {" "} <Link className='text-secondary '  to='/auth/register' state={location.state}>Register</Link> </p>

        </fieldset>
      </form>
    <div className='space-y-3'> 
<button    onClick={handleGoogleSignIn} className="btn btn-secondary btn-outline w-full"><FcGoogle size={24} /> Login with Google </button>
</div>
    </div>
        </div>
    );
};
export default Login;
