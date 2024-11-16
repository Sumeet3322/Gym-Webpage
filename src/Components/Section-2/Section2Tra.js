
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Section_2 = () => {


  useEffect(()=>{
    AOS.init({duration:3000})
  },[]);


  return (
    <>
    <div className=''>
      <div className=' w-full md:flex justify-end first'>
      <div className=' md:w-[40%] md:absolute md:pt-[10%] md:left-0 md:z-50 text-center text-white md:h-[450px] md:textsSlite' data-aos='fade-right'>Equipment is a set of tools or devices used to perform a specific task or activity. It can also refer to the act of equipping a person or thing, or the state of being equipped.</div>
      <div className='md:w-[70%] md:border-0 md:h-[450px] overflow-hidden  items-center' ><img className='imageSliteLeft' data-aos="fade-left" src={'/images/slider/img1.jpg'}/></div>
      </div>
    {/* <div className=' w-full md:flex justify-start second'>
      <div className=' md:w-[40%] md:absolute md:pt-[10%] md:right-0 md:z-50 text-center text-white md:h-[450px] ' data-aos='fade-left'>Equipment is a set of tools or devices used to perform a specific task or activity. It can also refer to the act of equipping a person or thing, or the state of being equipped.</div>
      <div className='md:w-[70%] md:border-0 md:h-[450px] overflow-hidden  items-center' ><img className='imageSliteRight' data-aos="fade-right" src={'/images/slider/img1.jpg'}/></div>
      </div>  */}
    </div>
    </>
  )
}

export default Section_2
