import React, { useEffect, useState } from "react";
import { GiSteeringWheel } from "react-icons/gi";
import busSeatData from "../../../../../Constants/Busseat/BusSeatData";
import { MdOutlineChair } from "react-icons/md";

const BusSeat = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showError, setShowError] = useState(false);

  const handleSeatClick = (seatId) => {
    const selectedSeat = busSeatData.find((seat) => seat.id === seatId);
    if (selectedSeat.status === "booked") {
      return;
    }

    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatId)) {
        return prevSelectedSeats.filter((seat) => seat !== seatId);
      } else {
        if (prevSelectedSeats.length >= 10) {
          setShowError(true);
          return prevSelectedSeats;
        } else {
          return [...prevSelectedSeats, seatId];
        }
      }
    });
  };

  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => {
        setShowError(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showError]);

  const getSeatName = (seat) => {
    if (seat.status === "booked") {
      return "text-primary cursor-not-allowed";
    }
    if (selectedSeats.includes(seat.id)) {
      return "text-yellow-600 cursor-pointer";
    }
    return "text-neutral-500 cursor-pointer";
  };
  return (
    <div>
      <div className="w-full grid grid-cols-5 gap-10">
        <div className="col-span-3 w-full flex items-center justify-center shadow-sm rounded-xl p-4 border border-neutral-200">
          <div className="w-full space-y-7">
            <p className="text-base text-neutral-600 font-medium text-center">
              Click on available seats to reserve your seat.
            </p>

            <div className="w-full flex items-stretch gap-x-1.5">
              <div className="w-10 h-fit">
                <GiSteeringWheel className="text-3xl mt-7 text-primary -rotate-90" />
              </div>

              <div className="flex flex-col items-center border-1-2 border-dashed border-neutral-300 pl-7">
                <div className="flex-1 space-y-5">
                  <div className="w-full h-auto grid grid-cols-9 gap-x-5 justify-end">
                    {busSeatData.slice(0, 9).map((seat) => (
                      <div
                        key={seat.id}
                        className="flex items-center gap-x-0"
                        onClick={() => handleSeatClick(seat.id)}
                      >
                        <h6 className="text-base text-neutral-600 font-bold">
                          {seat.id}
                        </h6>
                        <MdOutlineChair
                          className={`text-3xl -rotate-90 ${getSeatName(seat)}`}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="w-full h-auto grid grid-cols-9 gap-x-5 justify-end"></div>
                  <div className="w-full h-auto grid grid-cols-9 gap-x-5 justify-end"></div>
                  <div className="w-full h-auto grid grid-cols-9 gap-x-5 justify-end"></div>
                  <div className="w-full h-auto grid grid-cols-9 gap-x-5 justify-end"></div>
                </div>
              </div>
            </div>

            <div className="w-full flex items-center gap-6 border-t border-neutral-200 pt-5"></div>
          </div>
          <div className="col-span-2 w-full space-y-5 bg-neutral-50 rounded-xl py-4 px-6 border border-neutral-200 shadow-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default BusSeat;
