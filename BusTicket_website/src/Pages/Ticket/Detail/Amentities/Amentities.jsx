import React from "react";
import { IoCheckboxOutline } from "react-icons/io5";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Amentities = () => {
  return (
    <div className="col-span-3 w-full">
      <div className="w-full space-y-3">
        <h1 className="text-lg text-neutral-600 font-medium text-start">
          Bus Amenties
        </h1>

        <div className="w-full grid grid-cols-2 gap-8">
          <div className="col-span-1 w-full space-y-1">
            <div className="flex items-center gap-x-2 w-full">
              <IoCheckboxOutline className="w-5 h-5 text-green-500" />
              <p className="text-base text-neutral-700 font-normal">Super AC</p>
            </div>

            <div className="flex items-center gap-x-2 w-full">
              <IoCheckboxOutline className="w-5 h-5 text-green-500" />
              <p className="text-base text-neutral-700 font-normal">
                Charging port
              </p>
            </div>

            <div className="flex items-center gap-x-2 w-full">
              <IoCheckboxOutline className="w-5 h-5 text-green-500" />
              <p className="text-base text-neutral-700 font-normal">
                Internet/Wifi
              </p>
            </div>

            <div className="flex items-center gap-x-2 w-full">
              <IoCheckboxOutline className="w-5 h-5 text-green-500" />
              <p className="text-base text-neutral-700 font-normal">
                AC & Air Suspension
              </p>
            </div>

            <div className="flex items-center gap-x-2 w-full">
              <AiOutlineCloseSquare className="w-5 h-5 text-red-500" />
              <p className="text-base text-neutral-700 font-normal">
                Sleeper Seat
              </p>
            </div>

            <div className="flex items-center gap-x-2 w-full">
              <AiOutlineCloseSquare className="w-5 h-5 text-red-500" />
              <p className="text-base text-neutral-700 font-normal">Snacks</p>
            </div>
          </div>
          <div className="w-full col-span-1">
            <div className="flex items-center gap-x-2 w-full">
              <IoCheckboxOutline className="w-5 h-5 text-green-500" />
              <p className="text-base text-neutral-700 font-normal">Super AC</p>
            </div>

            <div className="flex items-center gap-x-2 w-full">
              <IoCheckboxOutline className="w-5 h-5 text-green-500" />
              <p className="text-base text-neutral-700 font-normal">LED TV</p>
            </div>

            <div className="flex items-center gap-x-2 w-full">
              <IoCheckboxOutline className="w-5 h-5 text-green-500" />
              <p className="text-base text-neutral-700 font-normal">
                Water Bottels
              </p>
            </div>

            <div className="flex items-center gap-x-2 w-full">
              <IoCheckboxOutline className="w-5 h-5 text-green-500" />
              <p className="text-base text-neutral-700 font-normal">
                2*2 VIP Sofa
              </p>
            </div>

            <div className="flex items-center gap-x-2 w-full">
              <AiOutlineCloseSquare className="w-5 h-5 text-red-500" />
              <p className="text-base text-neutral-700 font-normal">
                Cooler fan
              </p>
            </div>

            <div className="flex items-center gap-x-2 w-full">
              <AiOutlineCloseSquare className="w-5 h-5 text-red-500" />
              <p className="text-base text-neutral-700 font-normal">
                Luxury seat
              </p>
            </div>

            <div className="flex items-center gap-x-2 w-full">
              <IoCheckboxOutline className="w-5 h-5 text-green-500" />
              <p className="text-base text-neutral-700 font-normal">
                Confortable Seat
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amentities;
