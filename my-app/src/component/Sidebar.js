import React from 'react';
import close from '../assets/icon-close-menu.svg';
import Companydropdown from './Companydropdown';
import FeatureDropdown from './FeatureDropdown';

const Sidebar = ({ isOpen, onToggle }) => {
  return (
    <div className="fixed">

    {isOpen && <div className="fixed inset-0 bg-black opacity-50" style={{ zIndex: 999 }}></div>}
    {/*  // Fixed position to the right of the viewport */}
    <div className={`fixed inset-y-0 right-0 w-[60vw] bg-white w-8 h-full text-black p-4 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ zIndex: 1000 }}>

        <div className='flex justify-end'>
            <button onClick={onToggle} className="px-4  mt-3 py-2 bg-gray-600 hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray rounded-lg text-white">
                <img src={close} alt="Close" className="h-6 w-6 " />
            </button>
        </div>
        <div className="flex flex-col justify-start">
                <div className="flex flex-col justify-between gap-5">
                    <FeatureDropdown />
                    <Companydropdown />
                    <a href="/" className="font-epilogue font-bold text-left text-gray mx-5 hover:cursor-pointer hover:text-black">
                    Career
                    </a>
                    <a href="/" className="font-epilogue font-bold text-gray text-left mx-5  hover:cursor-pointer hover:text-black">
                    About
                    </a>
                </div>

       

            <div className='flex flex-col items-center p-4 mt-4'>
              <button className='mx-10 font-epilogue font-bold text-gray hover:cursor-pointer' >Login</button>
              <button className='font-epilogue font-bold text-gray rounded-md  mt-6 outline outline-3 outline-offset-4 w-full h-8 border-gray-500 text-base hover:cursor-pointer'>
                Register
              </button>

            </div>
        </div>
    </div>

    
  </div>
  );
};

export default Sidebar;
