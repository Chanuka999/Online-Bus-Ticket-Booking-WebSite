import React from "react";

const PassengerData = () => {
  return (
    <div className="w-full col-span-4 py-4 space-y-6">
      <h1 className="text-xl text-neutral-700 font-semibold">
        Passenger Information
      </h1>
      <div className="space-y-7">
        <div className="w-full space-y-2">
          <label
            htmlFor="fullname"
            className="text-sm h-14 h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50  rounded-xl focus:border-neutral-400 text-base text-neutral-600 font-normal placeholder:text-neutral-400"
          ></label>
        </div>
      </div>
    </div>
  );
};

export default PassengerData;
