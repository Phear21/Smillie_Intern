import React,{useState} from 'react'
import arrowdownicon from '../assets/icon-arrow-down.svg'
import arrowupicon from '../assets/icon-arrow-up.svg'
import calendaricon from '../assets/icon-calendar.svg'
import todolisticon from '../assets/icon-todo.svg'
import planingicon from '../assets/icon-planning.svg'
import reminder from '../assets/icon-reminders.svg'


export default function Companydropdown() {
    const [isDropdown, setDropdown] = useState(false);

    const toggleDropdown = () => {
      setDropdown(!isDropdown);
    };
    
    const Dropdown = ({title,link}) => (
        <a href={link} className="flex text-gray w-[8.5vw] font-normal font-epilogue text-[15px] items-center justify-center relative hover:cursor-pointer hover:text-black hover:font-bold">
        <div className="flex py-2 mr-auto ml-10">
          {title}
        </div>
      </a>
        );
  return (
    <div>
                <a
                  className="flex font-epilogue font-bold items-center text-gray mx-5 hover:text-black hover:cursor-pointer"
                  onClick={toggleDropdown}
                  aria-expanded={isDropdown}
                  aria-haspopup="true"
                >
                  Company
                  <img className='h-[8px] ml-2'  src={isDropdown ? arrowupicon : arrowdownicon}/>
                </a>

                {/* Dropdown Content */}
                {isDropdown && (
                  <div className="absolute z-10 mt-4 shadow-2xl w-[7vw] ml-4  rounded-[10px]  flex flex-col items-center">
                    {/* Dropdown items go here */}

                    <div className='my-2'>
                         
                    <Dropdown  title="History"  />
                    <Dropdown  title="Our Team" />
                    <Dropdown  title="blog" />
                    </div>
                  </div>
                )}
    </div>
  )
}
