import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", link: "/" },
    { label: "Services", link: "/services" },
    { label: "Tickets", link: "/tickets" },
    { label: "About", link: "/about" },
  ];

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > scrollPosition && currentScroll > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setScrollPosition(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <nav
      //backdrop-blur-lg
      className={`w-full h-[8ch] fixed top-0 left-0 lg:px-24 md:px-16 sm:px-7 px-4  transition-transform duration-300 z-50 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      } ${scrollPosition > 50 ? "bg-violet-200" : "bg-neutral-100/10"}`}
    >
      <div className="w-full h-full flex items-center justify-between">
        <Link to="/" className="text-4xl text-red-500 font-bold">
          Bus
        </Link>

        {/* Mobile Menu Icon */}
        <div
          className="w-fit md:hidden flex items-center justify-center cursor-pointer text-neutral-700"
          onClick={handleOpen}
        >
          <FaBars className="w-5 h-5" />
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            open ? "flex" : "hidden"
          } md:flex absolute md:static top-20 left-0 w-full md:w-auto bg-neutral-50 md:bg-transparent border md:border-none border-neutral-200 md:shadow-none shadow-md rounded-xl md:flex-row flex-col items-center md:gap-14 gap-8 py-4 md:py-0`}
        >
          <ul className="list-none flex md:flex-row flex-col md:items-center items-start gap-8 text-lg text-neutral-500 font-normal">
            {navItems.map((item, ind) => (
              <li key={ind}>
                <Link
                  to={item.link}
                  className="hover:text-red-500 ease-in-out duration-300"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center mt-4 md:mt-0">
            <button className="md:w-fit w-full md:px-4 px-6 md:py-1 py-2.5 bg-red-500 border border-red-500 hover:border-red-500 md:rounded-full rounded-xl text-base font-normal text-neutral-50 hover:text-red-500 ease-in-out duration-300">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
