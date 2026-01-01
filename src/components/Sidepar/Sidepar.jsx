import React, { useState } from "react";
import Style from "./Sidepar.module.css";
import photo1 from "../../assets/logo-BfNap0Pe.png";
import { MdNoMeals } from "react-icons/md";
import { GiToggles } from "react-icons/gi";
import { Link } from "react-router-dom";

const Sidepar = () => {
  const [isopen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen(!isopen);
  };
  return (
    <>
      <div className="text-3xl text-gray-700 flex justify-end cursor-pointer hover:text-gray-900  transition duration-300 shadow-lg hover:scale-105 fixed z-20 my-4 pl-3 ">
        <GiToggles onClick={toggleSidebar} />
      </div>
      <main
        className={` md:flex z-10 fixed bg-[#e8ebef]  top-0 left-0 bottom-0  h-screen  w-64  shadow-lg ${
          isopen ? "translate-x-0" : "-translate-x-full"
        }  transform  transition-transform duration-300 ease-in-out `}
      >
        <div className="">
          <figure>
            <img src={photo1} alt="Logo" className="w-64 mt-5" />
          </figure>
          <Link to={"/"}>
            <div className=" flex items-center text-white gap-4 p-2 bg-[#8bdc4d] rounded-2xl m-4 cursor-pointer font-bold hover:bg-[#72c830]  transition duration-300 shadow-lg hover:scale-105">
              <MdNoMeals />
              <button> Meals</button>
            </div>
          </Link>
          <Link to={"/"}>
            <div className="border border-[#a4a5a6] flex items-center gap-4 p-2  rounded-2xl m-4 cursor-pointer font-bold   transition duration-300 shadow-lg hover:scale-105">
            <MdNoMeals />
            <button> Ingrediants</button>
          </div>
          </Link>
          <Link to={"/"}>
             <div className=" border border-[#a4a5a6] flex items-center gap-4 p-2  rounded-2xl m-4 cursor-pointer font-bold ]  transition duration-300 shadow-lg hover:scale-105">
            <MdNoMeals />
            <button> Area</button>
          </div>
          </Link>
          
         
        </div>
      </main>
    </>
  );
};

export default Sidepar;
