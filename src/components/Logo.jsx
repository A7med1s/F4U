import React from 'react'
import { Link } from 'react-router-dom'
const Logo = () => {

  return (
    <div className='text-center'>
 <Link to={'/'}>
 <p className='font-extrabold text-5xl pt-4 cursor-pointer'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>F4U</span></p></Link>
    </div>
  )
}

export default Logo
