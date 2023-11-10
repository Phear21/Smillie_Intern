import React from 'react'
import homepic from '../assets/image-hero-desktop.png'
import audiophilelogo from'../assets/client-audiophile.svg'
import databizlogo from'../assets/client-databiz.svg'
import makerlogo from'../assets/client-maker.svg'
import mettlogo from'../assets/client-meet.svg'

export default function Home() {
  return (
    <div className='flex justify-between h-vh ml-20 mt-16' >
        <div  className='w-1/2 flex flex-col justify-center mx-auto p-5 mr-20 mt-20'>
          
          <h1 className='text-left font-bold text-[100px] leading-[100px]'>Make <br/>remote work</h1>
          <p className='text-left pr-20 my-10 font-bold text-[20px] text-gray'>Get your team in sync, no matter your location.
          <br/>Streamline processes, create team rituals, and <br/>watch productivity soar.</p>
            <button className=' rounded-xl   w-[13vw] h-14 bg-black text-base'>
              <p className='font-epilogue font-bold text-white text-[20px]'>
              Learn more
              </p>
             
              </button>
              {/* for the sponser */}
              <div className='flex justify-between mt-20 w-[65vh] items-center '>
                <img  className='h-[2.5vh]' style={{ width: '8vw' }} src={databizlogo} alt="Databiz Logo" />
                <img   style={{ width: '5vw' }} src={audiophilelogo}/>
                <img   className='h-[2.5vh]' style={{ width: '6vw' }} src={mettlogo}/>

                <img  className='h-[3vh]' style={{ width: '6vw' }} src={makerlogo}/>
          
              </div>

        </div>
        <div  className='flex mr-32'>
            <img src={homepic} className='w-4/4 items-right'></img>
        </div>
    </div>

  )
}
