import React from "react";
import BusImg from "../../../../assets/bus.png";
import { FaCircleCheck } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";
import QrImg from "../../../../assets/qrcode.jpg";
import { FaPhone } from "react-icons/fa";

const PassengerInvoice = () => {
  return (
    <div className="w-full col-span-4 rounded-3xl relative">
      <div className="w-full flex items-center justify-between bg-red-600 px-6 py-3 rounded-t1-3xl">
        <div className="flex items-center gap-x-3">
          <img
            src={BusImg}
            alt="bus img"
            className="w-auto h-12 object-cover object-center"
          />
          <h1 className="text-xl text-neutral-50 font-bold uppercase tracking-wider pt-1">
            Laxapana Express
          </h1>
        </div>

        <div className="flex items-center gap-x-2">
          <p className="text-xl text-neutral-50 font-bold">
            <span className="text-lg">(Bus No.)</span>Ea.2
          </p>
        </div>
      </div>

      <div className="w-full grid grid-cols-5 gap-8 items-center px-6 py-7 mb-1">
        <div className="col-span-4 space-y-3.5">
          <div className="w-full flex items-center justify-between border-dashed border-b-2 border-neutral-200 pb-3">
            <p className="text-base text-neutral-500 font-normal">
              Bill No:465
            </p>

            <p className="text-base text-neutral-500 font-normal">
              LKR 1600 <span className="text-x5">/seat</span>
            </p>
            <p className="text-base text-neutral-500 font-normal">
              Date:2024-10-31
            </p>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="space-y-1.5">
              <p className="text-base text-neutral-600 font-normal">
                Name of Passenger:
                <span className="font-medium">Ran Bahadur Ghale</span>
              </p>

              <p className="text-base text-neutral-600 font-normal">
                Total Seat No:<span className="font-medium">A2,A3,A4,B6</span>
              </p>

              <p className="text-base text-neutral-600 font-normal">
                Total No. of Passengers:
                <span className="font-medium">A4 Only</span>
              </p>

              <p className="text-base text-neutral-600 font-normal">
                Pickup Station:
                <span className="font-medium">Laxapana,Ginigaththena</span>
              </p>
            </div>

            <div className="space-y-4 flex items-center justify-center flex-col">
              <div className="space-y-1 text-center">
                <p className="text-base text-neutral-600 font-normal">
                  Total Price
                </p>
                <h1 className="text-xl text-neutral-600 font-bold">LKR 6400</h1>
              </div>
              <div className="w-fit px-3 py-1 rounded-full bg-green-500/5 border border-green-600 text-green-60 text-sm font-medium flex items-center justify-center gap-2">
                <FaCircleCheck />
                <span>Bill Paid</span>
              </div>

              {/* <div className="w-fit px-3 py-1 rounded-full bg-red-500 border border-green-600 text-green-60 text-sm font-medium flex items-center justify-center gap-2">
                <IoCloseCircle />
                <span>Pending</span>
              </div> */}
            </div>
          </div>

          <div className="w-full flex items-center justify-between border-dashed border-t-2 border-neutral-200 pt-3">
            <p className="text-base text-neutral-600 font-normal">
              Laxapana
              <span className="font-neutral-400 px-2">------</span>
              Ginigathhena
            </p>
            <p className="text-base text-neutral-600 font-normal">
              Arrive at 6.20AM
            </p>
            <p className="text-base text-neutral-600 font-normal">
              Departure at 9.00AM
            </p>
          </div>
        </div>

        <div className="col-span-1 border border-neutral-200 rounded-xl shadow-sm p-1">
          <img
            src={QrImg}
            alt="qr img"
            className="w-full aspect-square object-cover object-content rounded"
          />
        </div>
      </div>

      <div className="w-full bg-red-600 absolute bottom-0 left-0 rounded-bl-3xl flex items-center justify-between px-5 py-1.5">
        <p className="text-xs text-neutral-100 font-light">
          Note: 40% charge for canellation price 24 hours of program.
        </p>
        <div className="flex items-center gap-x-2">
          <FaPhone className="w-3 h-3 text-neutral-100" />
          <p className="text-xs text-neutral-100 font-light">
            +977-9876543210,+977-0123456789
          </p>
        </div>
      </div>
    </div>
  );
};

export default PassengerInvoice;
