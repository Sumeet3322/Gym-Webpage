import { MdOutlineEmail } from "react-icons/md";
import { SlCallOut } from "react-icons/sl";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const NavE = ({ navbar }) => {
  const E_logo = [
    {
      name: "insta",
      logo: <AiFillInstagram />,
    },
    {
      name: "whatsapp",
      logo: <IoLogoWhatsapp />,
    },
    {
      name: "twitter",
      logo: <FaTwitter />,
    },
    {
      name: "youtube",
      logo: <IoLogoYoutube />,
    },
  ];
  return (
    <div>
      <div
        className={
          !navbar
            ? " flex justify-between bg-[#FF0000] py-1.5 px-6 mt-0 md:absolute transform ease-in-out duration-500 right-0 z  w-full md:w-[620px] lg:w-[850px] xl:w-[1060px] 2xl:w-[1100px] sm:px-10 lg:pr-28 xl:pr-32 xl:ps-20"
            : "transform ease-in-out duration-500 hidden"
        }
      >
        <div className="absolute bg-[#FF0000] hidden md:block h-11 w-[64px]  rotate-45 -left-10 -top-4 "></div>
        <div className="flex lg:space-x-8 md:space-x-8 xl:space-x-24  ">
          <div className="flex items-center font-navFont font-thin space-x-1 cursor-pointer ">
            <MdOutlineEmail className="text-white text-xl" />
            <div className="text-white text-sm ">fitencity2@gmail.com</div>
          </div>
          <div className="flex items-center font-navFont font-thin space-x-1 absolute md:static right-4 sm:right-8">
            <SlCallOut className="text-white text-xl font-bold" />
            <div className="text-white text-xs  text-nowrap flex space-x-4 ">
              <div className="cursor-pointer  hover:text-gray-200">
                {" "}
                +91 9999999999{" "}
              </div>
              <div className="hidden lg:block cursor-pointer  hover:text-gray-200">
                {" "}
                +91 9999999999
              </div>
            </div>
          </div>
        </div>
        <div className=" justify-between gap-3 md:flex hidden ">
          {E_logo.map((logos) => (
            <div
              className="h-8 w-8 bg-[#C70000]   flex items-center justify-center rounded-full "
              key={logos.name}
            >
              <div className="text-white text-[22px] hover:text-3xl duration-150 cursor-pointer ">
                {logos.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavE;
