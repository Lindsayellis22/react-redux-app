import React from "react";
import Logo from "/Users/lindsayellis/project/react-redux-project/src/assets/chicken.ico";
import { MdAddShoppingCart } from "react-icons/md";
import { GiChicken } from "react-icons/gi";

function Header(props) {
  return (
    <header className="fixed z-50 w-screen px-16">
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={Logo} className="w-10 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8 ">
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
          </ul>
          <div className="relative flex items-center justify-center">
            <MdAddShoppingCart className="text-textColor text-2xl ml-8 cursor-pointer" />
            <div className="w-10 h-10 rounded-full text-red flex items-center justify-center">
              <p className="text-sm text-pink font-semibold">2</p>
            </div>
          </div>
          <GiChicken className="w-10 h-10 drop-shadow-xl" />
        </div>
      </div>

      <div className="fex md:hidden w-full h-full"></div>
    </header>
  );
}

export default Header;
