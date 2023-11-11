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
    <a href={link} className="flex text-gray w-[8.5vw] font-normal text-[15px] items-center relative hover:cursor-pointer hover:text-black hover:font-bold">
      <div className="flex px-7 py-2">
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
                  <div className="absolute left-[150px] z-10 mt-4 shadow-2xl w-[8.5vw] rounded-[10px]  flex flex-col items-center">
                    {/* Dropdown items go here */}
                    <div className='mt-1'>
                         
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
