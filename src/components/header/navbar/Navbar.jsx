import React, { use } from 'react';
import logo from '../../../assets/logo.jpg'
import users from '../../../assets/user.png'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../../provider/AuthProvider';
const Navbar = () => {
  const {user,logOut}=use(AuthContext);
  const handleLogOut=()=>{
    console.log('user trying to logout');
    logOut().then(()=>{
   alert('you logged out successfully')
    }).catch((error)=>{
   console.log(error);
    });
  }
    return (
        <div className="navbar bg-base-100 shadow-sm p-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/profile">My Profile</NavLink></li>
       
      </ul>
    </div>
    <a className="btn btn-ghost text-xl p-0">
        <img className="w-16 sm:w-20   h-auto object-contain" src={logo} alt="logo not found" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink className={({ isActive }) => isActive ? "text-primary font-bold border-b-2 border-blue" : "font-bold text-black"} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-primary font-bold border-b-2 border-blue" : "font-bold text-black"} to="/services">Services</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-primary font-bold border-b-2 border-blue" : "font-bold text-black"} to="/profile">My Profile</NavLink></li>
    </ul>
  </div>
<div className="navbar-end flex gap-5 items-center">
  {user && user.email ? (
    <div className="flex items-center gap-4">
     
      <span className="text-sm font-medium hidden sm:inline-block">
        {user.email}
      </span>
      <div className="tooltip tooltip-bottom" data-tip={user?.displayName || "User"}>
        <div className="avatar">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img 
              src={user?.photoURL || users} 
              alt="User" 
            />
          </div>
        </div>
      </div>
      
      <button onClick={handleLogOut} className='btn btn-neutral px-6'>LogOut</button>
    </div>
  ) : (
    <Link to='/auth/login' className="btn btn-primary px-10">Login</Link>
  )}
</div>
</div>
    );
};

export default Navbar;