import React from 'react'
import logo from "../assets/Logo.svg"

const Header = () => {
  return (
    <div className="w-[80%] flex flex-col items-center mx-auto">
        <img src={logo} alt="" width={120} />
        <h2 className="text-2xl  font-bold underline  my-10">
          Employment Form
        </h2>
      </div>
  )
}

export default Header