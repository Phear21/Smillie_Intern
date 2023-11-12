import React from 'react'
import homepic from '../assets/image-hero-desktop.png'
import audiophilelogo from'../assets/client-audiophile.svg'
import databizlogo from'../assets/client-databiz.svg'
import makerlogo from'../assets/client-maker.svg'
import mettlogo from'../assets/client-meet.svg'
import mobilehompic from '../assets/image-hero-mobile.png'

export default function Home() {
  return (
    <div>
        <div className='hidden m:block'> 
          <div className='flex justify-center h-vh mx-10 mt-8'>
            <div className='flex flex-col items-left w-[50%] h-[100%] justify-center p-5 mr-[2vw] mt-[2vh]'>
              <h1 className='text-left font-bold text-[60px] h-[40%] lg:text-[100px] mt-[6vh] leading-[100px]'>
                Make <br/>remote work
              </h1>
              <p className='text-left my-10 h-[20%] font-normal text-[18px] lg:text-[18px] text-gray'>
                Get your team in sync, no matter your location.
                <br/>Streamline processes, create team rituals, and <br/>watch productivity soar.
              </p>
              <button className='flex rounded-[18px] h-[10%] w-[200px] items-center justify-center h-[8vh] bg-black  justify-center text-white hover:bg-white hover:text-black hover:outline'>
                <p className='font-epilogue font-bold text-lg lg:text-[20px]   '>
                  Learn more
                </p>
              </button>
            
              <div className='flex justify-between  w-full lg:w-[80%] md:w-[100%] h-[30%] items-end'>
                <div className='flex justify-between gap-10 items-center'>
                <img className='h-[2.5vh]  max-w-[25%] md:w-auto lg:w-auto' src={databizlogo} alt="Databiz Logo" />
                <img className='h-8 max-w-[25%] w-auto' src={audiophilelogo} alt="Audiophile Logo" />
                <img className='h-[2.5vh]  lg:h-[2.5vh] max-w-[25%] w-auto' src={mettlogo} alt="Mett Logo" />
                <img className='h-[3vh] lg:h-[3vh] max-w-[25%] w-auto' src={makerlogo} alt="Maker Logo" />
                </div>
              
              </div>

            </div>

            <div className='flex w-[full] flex-shrink-0 '>
              <img src={homepic} className='w-full h-[70vh]' alt="Home " />
            </div>
         </div>
        </div>
      <div className='m:hidden'>
            <div className='flex  '>
              <img src={mobilehompic} className='w-full ' alt="Home " />
            </div>
            <div className='flex flex-col h-[50vh] -mt-4 justify-center items-center'>
              
                <h1 className='flex justify-center items-center font-bold text-[40px]  h-[20%] '>
                    Make remote work
                  </h1>
                  <p className=' h-[20%]  mb-4  px-3 font-normal text-[18px] lg:text-[18px] text-gray'>
                    Get your team in sync, no matter your location.
                    Streamline processes, create team rituals, and watch productivity soar.
                  </p>
                  <div className='flex  my-4  items-center justify-center'>
                    <button className=' rounded-[18px] bg-black h-[60px] w-[160px] justify-center text-white hover:bg-white hover:text-black hover:outline'>
                      <p className='font-epilogue font-bold text-lg lg:text-[20px]   '>
                        Learn more
                      </p>
                    </button>
                  </div>
            
       
              <div className='flex justify-center w-[100%] mt-4 h-[20%] items-center gap-[4vw] '>
                <img className='h-4 l w-auto' src={databizlogo} alt="Databiz Logo" />
                <img className='h-8 w-auto' src={audiophilelogo} alt="Audiophile Logo" />
                <img className='h-4  w-auto' src={mettlogo} alt="Mett Logo" />
                <img className='h-6 w-auto' src={makerlogo} alt="Maker Logo" />
              </div>

            </div>
             
              
            
        </div>
    </div>
  
  


  )
}
