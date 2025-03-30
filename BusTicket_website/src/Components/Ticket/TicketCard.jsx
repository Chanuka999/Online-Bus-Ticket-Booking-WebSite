import React from "react";
import { FaBus, FaStar, FaWifi } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { RiVipFill } from "react-icons/ri";
import { MdOutlineChair } from "react-icons/md";
import { GiWaterBottle, GiCharging } from "react-icons/gi";
import { IoTv } from "react-icons/io5";

const TicketCard = ({
  busName,
  routeFrom,
  routeTo,
  arrivalTime,
  departureTime,
  price,
  timeDuration,
}) => {
  return (
    <div className="w-full rounded-xl p-5 border-2 border-neutral-300 space-y-4">
      <div className="space-y-5 w-full border-b border-neutral-300/60 pb-4">
        <div className="space-y-0">
          <div className="w-full flex items-center gap-x-2">
            <FaBus className="text-lg text-neutral-700 font-semibold" />
            <p className="text-lg text-neutral-700 font-semibold">{busName}</p>
          </div>

          <div className="w-full flex items-center gap-x-4">
            <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0">
              <TbAirConditioning className="w-4 h-4 text-primary" />
              <p className="text-xs text-neutral-600 font-normal">AC</p>
            </div>

            <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0">
              <FaStar className="w-4 h-4 text-primary" />
              <p className="text-xs text-yellow-600 font-normal">4.5</p>
            </div>

            <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0">
              <RiVipFill className="w-4 h-4 text-primary" />
              <p className="text-xs text-yellow-600 font-normal">Sofa</p>
            </div>

            <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0">
              <MdOutlineChair className="w-4 h-4 text-primary -rotate-90" />
              <p className="text-xs text-yellow-600 font-normal">35 seats</p>
            </div>
          </div>
        </div>

        <div className="space-y-0.5">
          <div className="w-full flex items-center justify-between gap-x-2.5">
            <h1 className="text-2xl text-neutral-600 font-semibold">
              {arrivalTime}
            </h1>

            <div className="flex-1 border-dashed border border-neutral-300 relative">
              <p className="absolute w-14 h-14 p-0.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-50 border-dashed border border-neutral-400 rounded-full flex items-center justify-center">
                🚌
              </p>
            </div>

            <h1 className="text-2xl text-neutral-600 font-semibold">
              {departureTime}
            </h1>
          </div>

          <div className="w-full flex items-center justify-between gap-x-3">
            <h1 className="text-xl text-neutral-600 font-semibold">
              {routeFrom}
            </h1>

            <div className="flex-1 border-dashed border-neutral-400 relative">
              <p className="absolute w-fit px-3 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-50 rounded-full flex items-center justify-center text-sm text-neutral-500 font-normal border-dashed border border-neutral-400">
                {timeDuration || "N/A"}
              </p>
            </div>

            <h1 className="text-xl text-neutral-600 font-semibold">
              {routeTo}
            </h1>
          </div>
        </div>

        <div className="w-full flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-x-1">
            <FaWifi className="w-3 h-3 text-neutral-500" />
            <p className="text-xs text-neutral-600 font-normal">Internet</p>
          </div>

          <div className="flex items-center gap-x-1">
            <GiWaterBottle className="w-3 h-3 text-neutral-500" />
            <p className="text-xs text-neutral-600 font-normal">Snacks</p>
          </div>

          <div className="flex items-center gap-x-1">
            <IoTv className="w-3 h-3 text-neutral-500" />
            <p className="text-xs text-neutral-600 font-normal">TV</p>
          </div>

          <div className="flex items-center gap-x-1">
            <GiCharging className="w-3 h-3 text-neutral-500" />
            <p className="text-xs text-neutral-600 font-normal">
              Mobile Charging
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-between">
        <h1 className="text-xl text-neutral-700 font-semibold">Rs. {price}</h1>

        <button className="w-fit px-5 py-1.5 bg-red-500 hover:bg-transparent border-2 border-red-500 hover:border-red-500 rounded-xl text-sm font-normal text-white flex items-center justify-center gap-x-2 hover:text-red-500 ease-in-out duration-300">
          Reserve Seat
        </button>
      </div>
    </div>
  );
};

export default TicketCard;
