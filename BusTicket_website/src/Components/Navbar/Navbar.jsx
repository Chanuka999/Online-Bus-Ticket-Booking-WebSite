import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-[8ch] fixed top-0 left-0 lg:px-24 md:px-16 sm:px-16 sm:px-7 px-4 backdrop-blur-1g transition-transform duration-300 z-50">
      <div className="w-full h-full flex items-center justify-between">
        <Link to="/" className="text-4xl text-red-500 font-bold">
          Bus
        </Link>

        <div className="w-fit md:hidden flex items-center justify-center cursor-pointer flex-col gap-1 text-neutral-700">
          //FaBars
        </div>

        <div className="flex-1 w-full flex items-center justify-end gap-16">
          <ul className="list-none flex md:items-center items-start flex-wrap md:flex-row flex-col md:gap-8 gap-4 text-lg text-neutral-500 font-normal">
            <li>
              <Link
                to="/"
                className="hover:text-red-500 ease-in-out duration-300"
              >
                Home
              </Link>
            </li>
          </ul>

          <div className="flex items-center justify-center">
            <button className="md:w-fit w-full md:px-4 px-6 md:py-1 py-2 5 bg-red-500 border border-red-500 hover:border-red-500 md:rounded-full rounded-xl text-base font-normal text-neutral-50 hover:text-red-500 ease-in-out duration:300">
              Sig In
            </button>
          </div>
          <div className="flex items-center justify-center"></div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
