import React, { useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import CloseIcon from '@mui/icons-material/Close';
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import logo from "../assets/logo.png";

export const Headers = () => {
  const [open, setOpen] = useState(true);
  const [open1,setOpen1] = useState(true)
  const handler1 = ()=>{
    setOpen1(!open1)
  }
  const handler = () => {
    setOpen(!open);
  };
  const listItem = [
    {title:'Package Tour',link:'/package',icon:<ArrowForwardIosIcon/>},
    {title:'Holidays Tour',link:'/holidays',icon:<ArrowForwardIosIcon/>},
    {title:'Hotel',link:'/hotel'},
    {title:'Visa',link:'/visa'},
    {title:'Services',link:'/services'},
    {title:'Sports & Outdoor',link:'/sports'},
    {title:'Child',link:'/child'},
    {title:'Groceries $ Pets',link:'/groceries'},
    {title:'Health & Beauty',link:'/health'},
  ]
  return (
    <div className="absolute top-0 z-50 w-screen">
      <div
        className={`md:flex p-4 transition-all ease-in duration-500 justify-between relative  shadow-lg ${
          open ? "top-0" : "-top-96"
        }`}
      >
        <div onClick={handler1} className="flex items-center hover:cursor-pointer">
          <span>
            {open1?<span className="text-black"><ArrowForwardIosIcon/></span>:<span className="text-black"><DensitySmallIcon /></span>}
          </span>
        </div>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex items-center">
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search for Products."
          />
          <span>
            <MdOutlineLocationOn />
          </span>
          <p className="text-xs">Select Location</p>
        </div>
        <div className="flex items-center">
          <button>English</button>
          <span>/বাংলা</span>
        </div>
        <div className="flex items-center">
          <button className="px-3 py-2 font-semibold text-black rounded-full bg-slate-400">
            Login in
          </button>
        </div>
      </div>
      <div
        onClick={handler}
        className="absolute z-50 md:hidden top-8 right-6 hover:cursor-pointer"
      >
        <span>
          {open? <span className="text-black"><CloseIcon/></span> :<span className="text-black"><DensityMediumIcon /></span>}
        </span>
      </div>
      <div className={`bg-white absolute transition-all z-50 ease-in duration-500 ${!open?'top-8':'top-22'} ${ open1 ? 'left-0': '-left-96'}`}>
        <ul className="p-4 shadow-md">
            {listItem.map((item,index)=>(
                <li className="p-1" key={index}><a href={item.link}>{item.title}</a><span className="ml-10">{item.icon}</span></li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Headers;
