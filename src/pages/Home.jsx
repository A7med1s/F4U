import React from 'react';
import { motion } from 'framer-motion';
import imgOne from '../assets/ashy.png'
import Logo from '../components/Logo';
const Home = () => {
  return (

    <div className={`bg-one bg-cover`}>
    <div className='bg-black/50'>
        <Logo/>
    <div className=' flex flex-col md:flex-row items-center justify-between p-6 min-h-screen'>
     <motion.div
        className="md:w-1/2 w-full text-center md:text-left mb-6 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        >
        <h1 className="text-2xl md:text-6xl mt-12 md:mt-2 font-bold text-white mb-4">
        Create Your Visible, Touchable Company Shares In The Metaverse As NFT's!
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
        Uses The Concept Of Nft's To Change The Way Companies Create And Issue Electronic Shares, We Call Them Nfs(Non-Fungible Shares).
        </p>

      </motion.div>

      <motion.div
        className="md:w-1/2 w-full"
        //  initial={{ opacity: 1, y: 10 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
    
      >
        <img
          src={imgOne}
          alt="Hero"
          className="w-3/4 h-auto rounded-md ml-12"
        />
      </motion.div>
     </div>
    </div>
    </div>
  );
};

export default Home;