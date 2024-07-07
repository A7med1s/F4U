import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa'; // استيراد الأيقونات
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="p-2  text-white fixed top-4 left-4 z-50"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes  /> : <FaBars />}
      </button>
      <motion.div
        className={`sidebar fixed top-0 left-0 w-64 h-full bg-black text-white p-4 z-40 ${
          isOpen ? 'block' : 'hidden'
        } md:block`}
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? '0%' : '-100%' }}
        transition={{ duration: 0.5 }}
      >
        <nav className="menu mt-12">
          <ul className="space-y-4">
            <li className='mb-2'><Link onClick={toggleSidebar} to="/" className="hover:underline hover:text-lg">Home</Link></li>
            <li className='mb-2'><Link onClick={toggleSidebar} to="/why-f4u" className="hover:underline hover:text-lg">Why F4U</Link></li>
            <li className='mb-2'><Link onClick={toggleSidebar} to="/services" className="hover:underline hover:text-lg">Services</Link></li>
            <li className='mb-2'><Link onClick={toggleSidebar} to="/contact-us" className="hover:underline hover:text-lg">Contact Us</Link></li>
          </ul>
        </nav>
      </motion.div>
    </div>
  );
};

export default Sidebar;