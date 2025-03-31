import React, { useEffect, useState } from "react";
import { GiSteeringWheel } from "react-icons/gi";
import busSeatData from "../../../../../Constants/Busseat/BusSeatData";
import { MdOutlineChair } from "react-icons/md";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

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
                  <div className="w-full h-auto grid grid-cols-9 gap-x-5 justify-end">
                    {busSeatData.slice(9, 18).map((seat) => (
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

                  <div className="w-full h-auto grid grid-cols-10 gap-x-5 justify-end">
                    <div className="col-span-9"></div>
                    {busSeatData.slice(18, 19).map((seat) => (
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
                  <div className="w-full h-auto grid grid-cols-9 gap-x-5 justify-end">
                    {busSeatData.slice(19, 28).map((seat) => (
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
                  <div className="w-full h-auto grid grid-cols-9 gap-x-5 justify-end">
                    {busSeatData.slice(28, 37).map((seat) => (
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
                </div>
              </div>
            </div>

            <div className="w-full flex items-center gap-6 border-t border-neutral-200 pt-5">
              <div className="flex items-center gap-x-2">
                <MdOutlineChair className="text-xl text-primary -rotate-90" />
                <p className="text-sm text-neutral-500 font-medium">
                  Available
                </p>
              </div>

              <div className="flex items-center gap-x-2">
                <MdOutlineChair className="text-xl text-primary -rotate-90" />
                <p className="text-sm text-neutral-500 font-medium">Booked</p>
              </div>

              <div className="flex items-center gap-x-2">
                <RiMoneyRupeeCircleLine className="text-xl text-neutral-500 -rotate-90" />
                <p className="text-sm text-neutral-500 font-medium">
                  NPR. 1600
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 w-full space-y-5 bg-neutral-50 rounded-xl py-4 px-6 border border-neutral-200 shadow-sm">
            <div className="w-full space-y-2">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-lg text-neutral-600 font-medium">
                  Your Destination
                </h1>
                <Link
                  to={"/bus-tickets"}
                  className="text-sm text-primary font-normal"
                >
                  change route
                </Link>
              </div>

              <div className="space-y-0 5 w-full">
                <div className="w-full flex items-center justify-between gap-x-5">
                  <p className="text-sm text-neutral-400 font-normal">
                    From <span className="text-x5">(New Buspark)</span>
                  </p>
                  <p className="text-sm text-neutral-400 font-normal">
                    To <span className="text-x5">(ChakChake)</span>
                  </p>
                </div>

                <div className="w-full flex items-center justify-between gap-x-4">
                  <h1 className="text-sm text-neutral-600 font-normal">
                    Kandy <span className="text-sm font-medium">(6.15 pm)</span>
                    <div className="flex-1 border-dashbord"></div>
                  </h1>
                </div>
              </div>
            </div>

            <div className="w-full space-y-2"></div>

            <div className="w-full space-y-2"></div>

            <div className="w-full flex items-center justify-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusSeat;
