import React from 'react'
import homepic from '../assets/image-hero-desktop.png'
import audiophilelogo from'../assets/client-audiophile.svg'
import databizlogo from'../assets/client-databiz.svg'
import makerlogo from'../assets/client-maker.svg'
import mettlogo from'../assets/client-meet.svg'

export default function Home() {
  return (
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
        {/* for the sponser */}
        <div className='flex justify-between  w-96 lg:w-[80%]  h-[30%] items-end'>
          <img className='h-8 lg:h-[2.5vh] w-auto' src={databizlogo} alt="Databiz Logo" />
          <img className='h-8 w-auto' src={audiophilelogo} alt="Audiophile Logo" />
          <img className='h-8 lg:h-[2.5vh] w-auto' src={mettlogo} alt="Mett Logo" />
          <img className='h-8 lg:h-[3vh] w-auto' src={makerlogo} alt="Maker Logo" />
        </div>
      </div>

      <div className='flex w-[32%] '>
        <img src={homepic} className='w-full h-[70vh]' alt="Home " />
      </div>
    </div>


  )
}
