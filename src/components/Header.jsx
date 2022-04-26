import React from "react";
import Logo from "/Users/lindsayellis/project/react-redux-project/src/assets/chicken.ico";

function Header(props) {
  return (
    <div className="fixed z-50 w-screen bg-slate-300 p-6 px-16">
      <div className="hidden md:flex w-full h-full">
        <div className="flex items-center gap-2">
          <img src={Logo} className="w-10 object-cover" alt="logo" />
        </div>
      </div>

      <div className="fex md:hidden w-full h-full"></div>
    </div>
  );
}

export default Header;
