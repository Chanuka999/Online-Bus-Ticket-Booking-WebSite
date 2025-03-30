import React from "react";
import { FaBus } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";

const TicketCard = (
  icon: Icon,
  busName,
  routeFrom,
  routeTo,
  arrivalTime,
  price,
  availableSearts
) => {
  return (
    <div className="w-full rounded-xl p-5 border-2 border-neutral-300 space-y-4">
      <div className="space-y-5 w-full border-b border-neutral-300/60 pb-4">
        <div className="space-y-0">
          <div className="w-ful flex items-center justify-x-2">
            <FaBus className="text-lg text-neutral-700 font-semibold" />
            <p className="text-lg text-neutral-700 font-semibold">{busName}</p>
          </div>

          <div className="w-ful flex items-center justify-x-4">
            <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0">
              <TbAirConditioning className="w-4 h-4 text-primary" />
              <p className="text-xs text-neutral-600 font-normal">AC</p>
            </div>

            <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0">
              <FaStar className="w-4 h-4 text-yellow-600" />
              <p className="text-xs text-yellow-600 font-normal">4.5</p>
            </div>

            <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0">
              <RiVipFill className="w-4 h-4 text-yellow-600" />
              <p className="text-xs text-yellow-600 font-normal">sofa</p>
            </div>
          </div>

          <div className="space-y-0.5">
            <p className="text-x5 text-neutral-400 font-normal">From</p>
            <p className="text-x5 text-neutral-400 font-normal">To</p>
          </div>

          <div className="w-full flex items-center justify-between gap-x-3">
            <h1 className="text-xl text-neutral-600 font-semibold">
              {routeFrom}
            </h1>

            <div className="flex-1 border-dashed border-neutral-400 relative">
              <p className="absolute w-fit px-3 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-50 rounded-full flex items-center justify-center text-sm text-neutral-500 font-normal border-dashed border border-neutral-400">
                {timeDuration}
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
            <p className="text-xs text-neutral-600 font-normal">internet</p>
          </div>
        </div>
        <div className="w-full flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-x-1">
            <GiWaterBottle className="w-3 h-3 text-neutral-500" />
            <p className="text-xs text-neutral-600 font-normal">Snaks</p>
          </div>
        </div>

        <div className="w-full flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-x-1">
            <IoTv className="w-3 h-3 text-neutral-500" />
            <p className="text-xs text-neutral-600 font-normal">TV</p>
          </div>
        </div>
        <div className="w-full flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-x-1">
            <GiCharging className="w-3 h-3 text-neutral-500" />
            <p className="text-xs text-neutral-600 font-normal">
              Mobile Charging
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-between">
        <h1 className="text-x1 text-neutral-700 font-semibold">Rs.{price}</h1>

        <button className="w-fit px-5 py-1.5 bg-red-500 hover:bg-transparent border-2 border-primary hover:border-primary rounded-xl text-sm font-normal text-neutral-50 flex items-center justify-center gap-x-2 hover:text-primary ease-in-out duration-300">
          ReSearve seat
        </button>
      </div>
    </div>
  );
};

export default TicketCard;
