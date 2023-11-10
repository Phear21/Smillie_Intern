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
  return (
    <div>
                <a
                  className="flex font-epilogue font-bold items-center text-gray mx-5 hover:cursor-pointer"
                  onClick={toggleDropdown}
                  aria-expanded={isDropdown}
                  aria-haspopup="true"
                >
                  Features
                  <img className='h-[8px] ml-2'  src={isDropdown ? arrowupicon : arrowdownicon}/>
                </a>

                {/* Dropdown Content */}
                {isDropdown && (
                  <div className="absolute left-[150px] z-10 mt-4 shadow-2xl">
                    {/* Dropdown items go here */}
                    <a href="#" className="flex px-4 py-2 text-gray items-center hover:bg-gray">
                      <img  className='h-4 mr-2' src={todolisticon}/>
                      Todo List
                    </a>
                    <a href="#" className="flex px-4 py-2 text-gray items-center hover:bg-gray">
                    <img  className='h-4 mr-2' src={calendaricon}/>
                      Calendar
                    </a>
                    <a href="#" className="flex px-4 py-2 text-gray items-center hover:bg-gray">
                    <img  className='h-4 mr-2' src={reminder}/>
                     Reminder
                    </a>
                    <a href="#" className="flex px-4 py-2 text-gray items-center hover:bg-gray">
                    <img  className='h-4 mr-2' src={planingicon}/>
                     Planing
                    </a>
                  </div>
                )}
    </div>
  )
}
