import { FaFileSignature } from "react-icons/fa6";
import { FaFileWaveform } from "react-icons/fa6";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { MdHealthAndSafety, MdDocumentScanner } from "react-icons/md";
import { GiBank, GiBookshelf } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import HoverTitle from "./HoverTitle";

import { useState } from "react";


const SideBar =()=>{
    const [hoverMessage,setHoverMessage]=useState(false);
return (
    <div className="fixed top-1/4 right-[4%] md:right-[4%] lg:right-[8%] flex flex-col gap-10 text-slate-600">
        <span className="relative text-base md:text-xl lg:text-3xl">
          <NavLink to="/">
            <FaUser className="" onMouseEnter={()=>{
         setHoverMessage(true)
            }}
            onMouseLeave={()=>{
                setHoverMessage(false);
            }}/>
          </NavLink>
          {hoverMessage&& (<HoverTitle message={"Personal Details"}/>)}
        </span>
        <span className="text-base md:text-xl lg:text-3xl">
          <NavLink to="/contact">
            <FaPhoneAlt />
          </NavLink>
        </span>

        <span className="text-base md:text-xl lg:text-3xl">
          <NavLink to="/education">
            <GiBookshelf />
          </NavLink>
        </span>

        <span className="text-base md:text-xl lg:text-3xl">
          <NavLink to="/health">
            <MdHealthAndSafety />
          </NavLink>
        </span>

        <span className="text-base md:text-xl lg:text-3xl">
          <NavLink to="/bank">
            <GiBank />
          </NavLink>
        </span>

        <span className="text-base md:text-xl lg:text-3xl">
          <NavLink to="/upload">
            <MdDocumentScanner />
          </NavLink>
        </span>
        <span className="text-base md:text-xl lg:text-3xl">
          <NavLink to="/Agreements">
            <FaFileWaveform />
          </NavLink>
        </span>

        <span className="text-base md:text-xl lg:text-3xl">
          <NavLink to="/declarations">
            <FaFileSignature />
          </NavLink>
        </span>
      </div>
);
};
 export default SideBar;