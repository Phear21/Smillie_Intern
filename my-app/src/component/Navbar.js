import React from 'react'
import logo from '../assets/logo.svg';
export default function Navbar() {
  return (
    <div className='lg'>
        <nav className="hidden sm:block navbar navbar-expand-lg navbar-light bg-light">
        <div className='flex flex-row justify-between items-center mx-5 p-4'>
            
            <div className='flex flex-row items-center mr-5 p-4'>
              <div>
              <img src={logo} alt="logo" className="w-24  mt-1 mr-10" />
              </div>
               
                <a href='/' className='font-epilogue font-bold text-gray mx-5 hover:cursor-pointer'>
                    Features
                </a>
                <a  href='/'  className='font-epilogue font-bold text-gray mx-5 hover:cursor-pointer'>
                    Company
                </a>
                <a  href='/'  className='font-epilogue font-bold text-gray mx-5 hover:cursor-pointer'>
                    Career
                </a>
                <a href='/'  className='font-epilogue font-bold text-gray mx-5 hover:cursor-pointer'>
                    About
                </a>  
            </div>
            <div className='flex flex-row items-center p-4'>
              <button className='mx-10 font-epilogue font-bold text-gray hover:cursor-pointer' >Login</button>
              <button className='font-epilogue font-bold text-gray rounded-md  outline outline-3 outline-offset-4 w-24 h-8 border-gray-500 text-base hover:cursor-pointer'>
                Register
              </button>

            </div>
        </div>
       
        </nav>

        <nav className="sm:hidden navbar navbar-light bg-light">
        <div className='flex flex-row justify-between items-center mx-5 p-4'>
            
            <div className='flex flex-row items-center mr-5 p-4'>
              <div>
              <img src={logo} alt="logo" className="w-24  mt-1 mr-10" />
              </div>
          </div>
          </div>
        </nav>



    </div>
  )
}
