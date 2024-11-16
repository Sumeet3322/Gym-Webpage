import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
 

const Main = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[]);
  const info = [
    {
      text: "No Crowd ",
      logo: "",
    },
    {
      text: "Premium equpiment ",
      logo: "",
    },
    {
      text: "Qulified Personal Trainers ",
      logo: "",
    },
    {
      text: "7 Days",
      logo: "",
    },

  ];

  return (
    <>
      <div className="speciality flex justify-center md:m-1 m-1 bg-gray-500 md:h-72 lg:h-80 py-8 md:my-6" style={{ backgroundImage: `url(${'/Images/Textures/WhiteTexture.jpg'})`, backgroundPosition:'center'}}>
        <div className=" font-semibold bg-[#272727] items-center md:w-[85%] justify-center text-center md:h-48  w-full transform md:skew-x-12 m-1 mt-2 p-4">
          <div className="text-xl md:text-2xl lg:text-3xl font-serif m-3 font-extrabold md:transform md:-skew-x-12 text-white">Specialities of <span className='text-[#ff0000]'>our </span>Gym</div>

          <div className="md:flex md:justify-evenly md:flex-row gap-3 grid grid-cols-2 py-3 ">
          {info.map((text) => (
            <div  className='w-[80%] md:w-[20%] bg-white m-auto md:transform md:-skew-x-12 h-40 md:shadow-red-500 md:shadow-md rounded-md ' data-aos="zoom-in">
            <div  className="text-base md:text-xl lg:text-2xl md:transform md:-skew-x-12 text-black">{text.text}</div>
            </div>
          ))}
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Main;
