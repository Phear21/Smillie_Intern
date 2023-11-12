import React,{useState} from 'react'
import logo from '../assets/logo.svg';
import Companydropdown from './Companydropdown';
import FeatureDropdown from './FeatureDropdown';
import Sidebar from './Sidebar';
import menu from '../assets/icon-menu.svg'
import close from '../assets/icon-close-menu.svg'

export default function Navbar() {

  const [Sidebaropen, setSidebaropen] = useState(false);


  const toggleSidebar = () => {
    console.log("open")
    setSidebaropen(!Sidebaropen)
  }

  const Tabbar = ({title,link}) => (
    <a  href={link}  className='font-epilogue font-bold text-gray mx-5 hover:cursor-pointer hover:text-black'>
          {title}
    </a>
  );


  return (
    <div >
        <nav className="hidden m:block navbar navbar-expand-lg navbar-white bg-white">
        <div className='flex flex-row justify-between items-center mx-5 p-4'>
            
            <div className='flex flex-row items-center mr-5 p-4'>
              <div className='mr-10 flex-shrink-0'>
              <img src={logo} alt="logo" className="  w-24   mt-1 " />
              </div>

              <div className='flex flex-row'>
                 
              <FeatureDropdown/>
                <Companydropdown/>
                <Tabbar title='Career'/>
                <Tabbar title='About'/>
              </div>
              
            </div>
            <div className='flex flex-row items-center p-4'>
              <button className='mx-10 font-epilogue font-bold text-gray hover:cursor-pointer' >Login</button>
              <button className='font-epilogue font-bold text-gray rounded-md  outline outline-3 outline-offset-4 w-24 h-8 border-gray-500 text-base hover:cursor-pointer'>
                Register
              </button>

            </div>
        </div>
       
        </nav>

        <nav className="m:hidden navbar navbar-white bg-white">
        <div className='flex flex-row justify-between items-center p-4 mt-2'>
            
            <div className='flex flex-row items-center  p-2'>
              
              <img src={logo} alt="logo" className="w-24  " />
            
            </div>
            <div>
              <img src={menu} onClick={toggleSidebar}/>
              <Sidebar isOpen={Sidebaropen}  onToggle={toggleSidebar}/>
            </div>

          </div>
        </nav>



    </div>
  )
}
