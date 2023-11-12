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
        <div className='hidden md:block'> 
          <div className='flex justify-center h-vh mx-10 mt-8'>
            <div className='flex flex-col items-left w-[50%] h-[100%] justify-center p-5 mr-[2vw] mt-[2vh]'>
              <h1 className='text-left font-bold text-[60px] h-[40%] md:text-[80px] lg:text-[100px] lg: mt-[6vh] leading-[100px]'>
                Make <br/>remote work
              </h1>
              <p className='text-left my-10 md:mb-4 h-[20%] font-normal text-[18px] md:my-20 lg:text-[18px] text-gray'>
                Get your team in sync, no matter your location.
                <br/>Streamline processes, create team rituals, and <br/>watch productivity soar.
              </p>
              <div className='flex  my-4  items-start justify-start'>
                    <button className=' rounded-[18px] bg-black h-[60px] w-[200px] justify-center text-white hover:bg-white hover:text-black hover:outline'>
                      <p className='font-epilogue font-bold text-lg lg:text-[20px]   '>
                        Learn more
                      </p>
                    </button>
                  </div>
            
              <div className='flex  w-full lg:w-[80%] md:w-[100%] h-[30%] items-end'>
                <div className='flex  w-full  justify-between gap-4 items-center'>
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
        {/* Hidden this when the size of the screen is larger */}
      <div className='md:hidden'>
            <div className='flex  '>
              <img src={mobilehompic} className='w-full ' alt="Home " />
            </div>
            <div className='flex flex-col h-[50vh] -mt-4 justify-center items-center'>
              
            <h1 className='flex justify-center items-center font-bold text-[40px] m:text-[50px] h-[20%]'>
                Make remote work
              </h1>

                  <p className=' h-[20%]  mb-4 m:h-[15%] m:mb-0 px-3 font-normal text-[18px] lg:text-[18px] text-gray'>
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
            
                  <div className='mt-10 h-[20%]'>
                  <div className='flex justify-center w-full md:w-[80%]  items-center gap-[4vw] md:gap-[8vw]'>
                    <img className='h-4 lg:h-[2vh] max-w-[20%] w-auto' src={databizlogo} alt="Databiz Logo" />
                    <img className='h-8 max-w-[20%] w-auto' src={audiophilelogo} alt="Audiophile Logo" />
                    <img className='h-4 max-w-[20%] w-auto' src={mettlogo} alt="Mett Logo" />
                    <img className='h-6 max-w-[20%] w-auto' src={makerlogo} alt="Maker Logo" />
                  </div>

                  </div>
                 

            </div>
             
              
            
        </div>
    </div>
  
  


  )
}
