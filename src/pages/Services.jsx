import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';

const services = [
  {
    title: 'Send',
    description: 'Send minted shares to multiple wallets addresses with little to no transaction fees. You can also set to receive royalties for everytime these shares are transacted.',
    icon: '🌐',
  },
  {
    title: 'View Transactions',
    description: "see all share transactions in realtime, know who's buying and selling your company shares.",
    icon: '📱',
  },
  {
    title: 'Design',
    description: 'Designing user-friendly and attractive interfaces.',
    icon: '🎨',
  },
];

const Services = () => {
  return (
    <div className=" bg-blue-900">
      <div className='bg-black/50'>
        <Logo/>
      <div className=' flex flex-col items-center justify-center p-6 min-h-screen'>
     <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        
        Services
     </h2>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
       {services.map((service, index) => (
         <motion.div
           key={index}
           className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: index * 0.2 }}
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
         >
           <div className="text-5xl mb-4">{service.icon}</div>
           <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
           <p className="text-gray-700">{service.description}</p>
         </motion.div>
       ))}
     </div>
     </div>
      </div>
     
    </div>
  );
};

export default Services;