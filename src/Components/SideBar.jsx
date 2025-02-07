import { FaFileSignature } from "react-icons/fa6";
import { FaFileWaveform } from "react-icons/fa6";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { MdHealthAndSafety, MdDocumentScanner } from "react-icons/md";
import { GiBank, GiBookshelf } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import HoverTitle from "./HoverTitle";
import { useState } from "react";

const SideBar = () => {
  // State to track which icon is being hovered (null means no icon is hovered)
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Define messages for each icon
  const hoverMessages = [
    "Personal Details",
    "Contact",
    "Education",
    "Health",
    "Bank",
    "Upload",
    "Agreements",
    "Declarations",
  ];

  return (
    <div className="py-4 flex justify-center gap-12 text-slate-600">
      {[
        { icon: <FaUser />, to: "/", message: hoverMessages[0] },
        { icon: <FaPhoneAlt />, to: "/contact", message: hoverMessages[1] },
        { icon: <GiBookshelf />, to: "/education", message: hoverMessages[2] },
        { icon: <MdHealthAndSafety />, to: "/health", message: hoverMessages[3] },
        { icon: <GiBank />, to: "/bank", message: hoverMessages[4] },
        { icon: <MdDocumentScanner />, to: "/upload", message: hoverMessages[5] },
        { icon: <FaFileWaveform />, to: "/Agreements", message: hoverMessages[6] },
        { icon: <FaFileSignature />, to: "/declarations", message: hoverMessages[7] },
      ].map((item, index) => (
        <span
          key={index}
          className={`relative p-3 rounded-full text-base md:text-xl lg:text-lg ${
            // Apply background color conditionally
            window.location.pathname === item.to
              ? "bg-blue-500"
              : "bg-slate-300"
          }`}
          onMouseEnter={() => setHoveredIndex(index)} // Set hovered index on hover
          onMouseLeave={() => setHoveredIndex(null)} // Reset on mouse leave
        >
          <NavLink
            to={item.to}
            className="text-white"
          >
            {item.icon}
          </NavLink>
          {/* Show hover message only for the hovered icon */}
          {hoveredIndex === index && (
            <HoverTitle message={item.message} />
          )}
        </span>
      ))}
    </div>
  );
};

export default SideBar;
