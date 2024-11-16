import React, { useState, useEffect } from "react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

const SliderMain = () => {
  const slides = [
    {
      url: "/Images/slider/img1.jpg",
    },
    {
      url: "/Images/slider/img2.jpg",
    },
    {
      url: "/Images/slider/img-3.jpg",
    },
    {
      url: "/Images/slider/img4.jpg",
    },
    {
      url: "/Images/slider/img5.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval); // Clear interval on unmount
  }, [currentIndex]);

  return (
    <>
      <div className="max-w-[1500px] h-[650px] w-full m-auto relative z-10 group shadow-md">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full bg-center bg-cover  duration-700 ease-linear"
        ></div>
        <div>
          <SlArrowLeft
            className="hidden absolute group-hover:block top-[50%] -translate-x-0 translate-y-[50%] left-5 text-4xl   cursor-pointer hover:bg-white/20 hover:rounded-full p-2  text-white z-50"
            onClick={prevSlide}
          />
        </div>
        <div>
          <SlArrowRight
            className="hidden absolute group-hover:block top-[50%] -translate-x-0 translate-y-[50%] right-5 cursor-pointer text-4xl  hover:bg-white/20 hover:rounded-full p-2  text-white z-50"
            onClick={nextSlide}
          />
        </div>
      </div>
    </>
  );
};

export default SliderMain;
