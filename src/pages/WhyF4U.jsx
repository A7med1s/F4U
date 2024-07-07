import React from 'react'
import { motion } from 'framer-motion';
import imgOne from '../assets/wallet_front.png'
import imgTwo from '../assets/key_front.png'
import imgThree from '../assets/cash_top.png'
import Logo from '../components/Logo';

const WhyF4U = () => {
  return (
  <>
    <div className={`bg-blue-900 bg-cover`}>
     <div className='bg-black/50 '>
         <Logo/>
         <p className='text-center text-xl md:text-2xl font-bold text-white my-4'>WHY TOKENIZE SHARES AS NFT'S IN THE METAVERSE?</p>
     <div className='flex flex-col md:flex-row items-center justify-between p-6 '>
     <motion.div
        className="md:w-1/2 w-full text-center md:text-left mb-6 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        >
        <p className="text-2xl md:text-6xl mt-1 md:mt-2 font-bold text-white mb-4">
        Visible, Touchable Company Shares
        </p>
        <p className="text-lg md:text-xl text-gray-300">
        See and feel your shares, hold them in your hands or store them in a vault on the Metaverse. You can move around with them and yes you can share them with your friends.


        </p>

      </motion.div>

      <motion.div
        className="md:w-1/2 w-full"
        //  initial={{ opacity: 1, y: 10 }}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
    
      >
        <img
          src={imgOne}
          alt="Hero"
          className="w-3/4 h-auto rounded-md ml-12"
        />
      </motion.div>
     </div>
     <div className='flex flex-col md:flex-row items-center justify-between p-6 '>
     <motion.div
        className="md:w-1/2 w-full text-center md:text-left mb-6 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        >
        <p className="text-2xl md:text-6xl mt-1 md:mt-2 font-bold text-white mb-4">
        Shares Are NFT Standardized
        </p>
        <p className="text-lg md:text-xl text-gray-300">
        NFT's are what gives your company shares unique identity and make them indivisible. These shares can be collaterized for Defi loans by holders and also used to setup DAO governance structure.


        </p>

      </motion.div>

      <motion.div
        className="md:w-1/2 w-full"
        //  initial={{ opacity: 1, y: 10 }}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
    
      >
        <img
          src={imgTwo}
          alt="Hero"
          className="w-3/4 h-auto rounded-md ml-12"
        />
      </motion.div>
     </div>
     <div className='flex flex-col md:flex-row items-center justify-between p-6 '>
     <motion.div
        className="md:w-1/2 w-full text-center md:text-left mb-6 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        >
        <p className="text-2xl md:text-6xl mt-1 md:mt-2 font-bold text-white mb-4">
        Earn Royalties When Shares Are Sold
        </p>
        <p className="text-lg md:text-xl text-gray-300">
        Companies can now choose to earn royalty fees for each share resale transaction. Total control and massive boost to the company revenue streams.


        </p>

      </motion.div>

      <motion.div
        className="md:w-1/2 w-full"
        //  initial={{ opacity: 1, y: 10 }}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
    
      >
        <img
          src={imgThree}
          alt="Hero"
          className="w-3/4 h-auto rounded-md ml-12"
        />
      </motion.div>
     </div>
     </div>
    </div>
  </>
  )
}

export default WhyF4U
