import React from 'react';
import '../components/footer.css';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import gmail from '../assets/gmail.png';



const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-10 md:px-20">
     
      <div className="flex flex-col md:flex-row justify-between border-b border-gray-700 pb-8 gap-10">
        
      
        <div className="md:w-1/4">
          <h2 className="text-white font-semibold mb-3">CS — Ticket System</h2>
          <p className="text-sm leading-6 text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

       
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Our Mission</a></li>
            <li><a href="#" className="hover:text-white">Contact Sales</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Products & Services</a></li>
            <li><a href="#" className="hover:text-white">Customer Stories</a></li>
            <li><a href="#" className="hover:text-white">Download Apps</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-3">Information</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Join Us</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-3">Social Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <img src={twitter} alt="Twitter" className="w-4 h-4 icon-white" /> @CS — Ticket System
            </li>
            <li className="flex items-center gap-2">
              <img src={linkedin} alt="LinkedIn" className="w-4 h-4 icon-white" /> CS — Ticket System
            </li>
            <li className="flex items-center gap-2">
              <img src={facebook} alt="Facebook" className="w-4 h-4 icon-white " /> @CS — Ticket System
            </li>
            <li className="flex items-center gap-2">
              <img src={gmail} alt="Gmail" className="w-4 h-4 icon-white" /> support@cst.com
            </li>
          </ul>
        </div>
      </div>
  
      <div className="text-center text-gray-400 text-sm mt-6">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
