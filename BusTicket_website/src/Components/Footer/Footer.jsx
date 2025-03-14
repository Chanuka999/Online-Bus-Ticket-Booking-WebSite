import React from "react";
import RootLayout from "../Layout/RootLayout";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-neutral-950 py-6 px-8">
      <RootLayout className="space-y-10">
        <div className="w-full grid grid-cols-5 gap-8">
          <div className="col-span-2 space-y-8 md:pr-10 pr-0">
            <div className="space-y-3">
              <Link to="/" className="text-6xl text-red-500 font-bold">
                Bus
              </Link>

              <p className="text-sm text-neutral-500 font-normal">
                Bus is all about booking ticket through nline platform to make
              </p>
            </div>

            <div className="w-full flex items-center gap-x-5">
              <div className="w-11 h-11 rounded-x1 bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-500">
                <FaInstagram />
              </div>

              <div className="w-11 h-11 rounded-x1 bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-500">
                <FaFacebookF />
              </div>

              <div className="w-11 h-11 rounded-x1 bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-500">
                <FaYoutube />
              </div>

              <div className="w-11 h-11 rounded-x1 bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-500">
                <FaXTwitter />
              </div>
            </div>
          </div>
          <div className="col-span-1 space-y-5">
            <h1 className="text-lg text-neutral-100 font-smibold">
              Quick Links
            </h1>

            <div className="space-y-2">
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                About us
              </Link>

              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                My Account
              </Link>

              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                Reserve Your ticket
              </Link>

              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                Create your account
              </Link>
            </div>
          </div>
          <div className="col-span-1 space-y-5">
            <h1 className="text-lg text-neutral-100 font-smibold">
              Top Reserved Routes
            </h1>

            <div className="space-y-2">
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                Laxapana - Hatton
              </Link>

              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                Laxapana - Ginigathhena
              </Link>

              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                Laxapana - kandy
              </Link>

              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                Ginigathhena - Hatton
              </Link>
            </div>
          </div>
          <div className="col-span-1 space-y-5">
            <h1 className="text-lg text-neutral-100 font-smibold">
              Support Links
            </h1>

            <div className="space-y-2">
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                Privacy Policy
              </Link>

              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                Terma & condition
              </Link>

              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                Helps & Support center
              </Link>

              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                FAQs
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-neutral-800/50" />
      </RootLayout>
    </div>
  );
};

export default Footer;
