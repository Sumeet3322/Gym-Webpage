import { HiUserCircle } from "react-icons/hi";
import NavE from "./NavE";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Navbar = ({ title }) => {
  const [navbar, setNavbar] = useState(false);
  const [open, onClose] = useState(false);

  const navToggle = () => {
    onClose(!open);
  };
  const changebackground = () => {
    if (window.scrollY >= 44) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changebackground);
  const nav_links = [
    {
      text: "HOME",
      link: "/",
    },
    {
      text: "ABOUT",
      link: "/about",
    },
    {
      text: "EVENTS",
      link: "/events",
    },
    {
      text: "GALLERY",
      link: "/gallery",
    },

    {
      text: "CONTACT",
      link: "/contact",
    },
  ];
  return (
    <>
      <nav
        className={
          !navbar
            ? "flex-col   bg-[#262626] w-full "
            : "flex-col bg-[#262626]  bg-opacity-40 blur-backdrop-filter w-full fixed transform transition-all duration-500  z-40"
        }
      >
        <NavE navbar={navbar} />
        <div
          className={
            !navbar
              ? "flex justify-between items-center px-4 md:pt-9 md:pb-1 md:px-4 xl:px-12  w-full "
              : "flex justify-between items-center px-4 md:pb-1 md:px-4 xl:px-12  w-full "
          }
      >
          <div className="md:order-2 ">
            <div
              className="hamburger cursor-pointer inline-block md:hidden "
              onClick={navToggle}
            >
              <div className="line h-0.5 w-6 bg-white my-1"></div>
              <div className="line h-0.5 w-6 bg-white my-1"></div>
              <div className="line h-0.5 w-6 bg-white my-1"></div>
            </div>
            <div
              className={
                !open
                  ? "features text-white font-navFont md:flex mx-4  space-x-4 md:mx-0 md:text-sm lg:text-base lg:space-x-10 xl:space-x-16 hidden  transform ease-out duration-500"
                  : "sm:px-20 px-10 text-white font-navFont fixed top-0 pt-10 flex-row  md:hidden text-center  justify-center h-screen left-0 w-[60%] z-50 bg-[#262626] transform ease-in duration-500 "
              }
            >
              {nav_links.map((texts) => (
                <div
                  key={texts.text}
                  className="cursor-pointer group px-1 pt-3 transform duration-300"
                >
                  {texts.text}
                  <div className=" bg-[#FF0000]  h-[.125rem] w-0 group-hover:w-full group-active:w-full transform transition-all duration-500"></div>
                </div>
              ))}
              <IoMdClose
                onClick={navToggle}
                className={
                  open
                    ? 
                        "text-white text-3xl absolute top-0.5 hover:border hover:border--2px right-0   md:hidden "
                    
                    : "hidden "
                }
              />
            </div>
          </div>

          <div className="logo md:order-1 text-center items-center flex ">
            <div
              className={
                !navbar
                  ? "text-white font-navFont text-4xl md:-mt-4"
                  : "text-white font-navFont text-4xl "
              }
            >
              {title}
            </div>
          </div>
          <div className="md:space-x-10 text-white md:order-3 pt-2 transform ease-in duration-150">
            <button className="text-white focus:outline-none ">
              <HiUserCircle className="text-5xl" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
