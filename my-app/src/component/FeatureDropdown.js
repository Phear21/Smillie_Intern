import React,{useState} from 'react'
import arrowdownicon from '../assets/icon-arrow-down.svg'
import arrowupicon from '../assets/icon-arrow-up.svg'
import calendaricon from '../assets/icon-calendar.svg'
import todolisticon from '../assets/icon-todo.svg'
import planingicon from '../assets/icon-planning.svg'
import reminder from '../assets/icon-reminders.svg'

export default function FeatureDropdown() {
    const [isDropdown, setDropdown] = useState(false);

    const toggleDropdown = () => {
      setDropdown(!isDropdown);
    };

    // using the reuseable content for the dropdown 
    const Dropdown = ({iconimg,title,link}) => (
    <a href={link} className="flex text-gray w-full  font-normal text-[15px] items-center relative hover:cursor-pointer hover:text-black hover:font-bold ">
      <div className="flex m:px-7 ml-10  m:ml-0  py-2">
        <img className='h-4 mr-2' src={iconimg} alt={`${title} Icon`} />
        {title}
      </div>
    </a>

    );
  return (
    <div>

                <a
                  className="flex font-epilogue font-bold items-center hover:text-black text-gray mx-5 hover:cursor-pointer"
                  onClick={toggleDropdown}
                  aria-expanded={isDropdown}
                  aria-haspopup="true"
                >
                  Features
                  <img className='h-[8px] ml-2'  src={isDropdown ? arrowupicon : arrowdownicon}/>
                </a>

                {/* Dropdown Content */}
                {isDropdown && (
                  <div className="relative flex flex-col items-center  z-10   rounded-[0px] m:absolute m:shadow-2xl m:left-[150px] m:rounded-[10px] m:mt-4">
                    {/* Dropdown items go here */}
                    <div className='mt-1 w-full m:w-[100%] '>
                         
                    <Dropdown iconimg={todolisticon} title="Todo List"  />
                    <Dropdown iconimg={calendaricon} title="Calendar" />
                    <Dropdown iconimg={reminder} title="Reminder" />
                    <Dropdown iconimg={planingicon} title="Planning" />
                    </div>
                 
                  </div>
                )}
    
    

    </div>
    
  )
}
