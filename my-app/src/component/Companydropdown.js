import React,{useState} from 'react'

export default function Companydropdown() {
    const [isDropdown, setDropdown] = useState(false);

    const toggleDropdown = () => {
      setDropdown(!isDropdown);
    };
  return (
    <div>
         <a
                  className="flex font-epilogue font-bold text-gray mx-5 hover:cursor-pointer"
                  onClick={toggleDropdown}
                  aria-expanded={isDropdown}
                  aria-haspopup="true"
                >
                  Company
                  <svg
                    className="mt-1 mr-1 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                {/* Dropdown Content */}
                {isDropdown && (
                  <div className="absolute  z-10 mt-4 shadow-2xl">
                    {/* Dropdown items go here */}
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-300">
                      Todo List
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-300">
                      Calendar
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-300">
                     Reminder
                    </a>
                  </div>
                )}
    </div>
  )
}
