import React from 'react'
import logo from '../assets/logo.svg';
export default function Navbar() {
  return (
    <div className='lg'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className='flex flex-row items-center mx-10 p-4'>
            <img src={logo} alt="logo" className="w-16" />
            <div className='flex flex-row items-center mx-10 p-4'>
                <a className='font-epilogue font-bold'>
                    Features
                </a>
                
            </div>
        </div>
       
        </nav>

    </div>
  )
}
