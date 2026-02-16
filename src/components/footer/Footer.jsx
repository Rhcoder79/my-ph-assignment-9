import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
 
const Footer = () => {
    return (
     <div>
          <div className='bg-neutral text-neutral-content gap-5 flex flex-col sm:flex-row p-5 md:p-10 justify-around'>
        <div className='flex flex-col gap-3'>
            <h6 className="footer-title">Company</h6>
            <ul  className='flex  flex-col gap-2' >
                <a className='link link-hover'>About us</a>
                <a className='link link-hover'>Contact</a>
                <a className='link link-hover'>Services</a>
            </ul>
        </div>
        <div className='flex flex-col gap-3'>
            
    <h6 className="footer-title">Legal</h6>
    <div className='flex flex-col gap-2'>
        <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
    </div>
 
        </div>
      <div className='flex flex-col gap-3'>
        <h6 className="footer-title ">Social</h6>
          <div className='flex gap-4'>
      <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 transition-all">
        <FaFacebook size={24} /> 
      </a>

      <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-pink-600 hover:text-pink-800 transition-all">
        <FaInstagram size={24} />
      </a>

      <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-900 transition-all">
        <FaLinkedin size={24} />
      </a> 
     <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-900 transition-all">
        <FaTwitter size={24} />
      </a> 
        </div>
      </div>
       </div>
    <nav className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by PetGuardian Co.</p>
  </aside>
</nav>
     </div>
    );
};

export default Footer;
