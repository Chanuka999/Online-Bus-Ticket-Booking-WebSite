import React from "react";
import PaymentMethod from "./Payment/PaymentMethod";

const PassengerData = () => {
  return (
    <div className="w-full col-span-4 py-4 space-y-6">
      <h1 className="text-xl text-neutral-700 font-semibold">
        Passenger Information
      </h1>
      <div className="space-y-7">
        <div className="w-full space-y-2">
          <label htmlFor="fullname" className="w-full h-14 px-4"></label>
          <input
            type="text"
            placeholder="e.g.Ram Bahadur Ghale"
            className="w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50  rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal placeholder:text-neutral-400"
          />
        </div>

        <div className="w-full space-y-2">
          <label htmlFor="email" className="w-full h-14 px-4">
            E mail Address
          </label>
          <input
            type="email"
            placeholder="e.g.Ram Bahadur Ghale"
            className="w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50  rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal placeholder:text-neutral-400"
          />
        </div>

        <div className="w-full space-y-2">
          <label htmlFor="number" className="w-full h-14 px-4">
            Phone
          </label>
          <input
            type="altphone"
            placeholder="e.g. +977-98977877"
            className="w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50  rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal placeholder:text-neutral-400"
          />
        </div>

        <div className="w-full space-y-2">
          <label htmlFor="email" className="w-full h-14 px-4">
            Alternative Phone
          </label>
          <input
            type="altphone"
            placeholder="e.g. +977-98977877"
            className="w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50  rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal placeholder:text-neutral-400"
          />
        </div>

        <div className="w-full space-y-2">
          <label className="w-full h-14 px-4">Pickup Station</label>

          <select className="w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50  rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal placeholder:text-neutral-400">
            <option selected disabled>
              Choose Your Nearest Pickup Station
            </option>
            <option value="balaju">Balaju</option>
            <option value="swoyambhu">swoyambhu</option>
            <option value="kalanki">kalanki</option>
            <option value="checkpost">checkpost</option>
          </select>
          {/* <input
            type="altphone"
            placeholder="e.g. +977-98977877"
            className="w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50  rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal placeholder:text-neutral-400"
          /> */}
        </div>
      </div>

      <PaymentMethod />
    </div>
  );
};

export default PassengerData;
