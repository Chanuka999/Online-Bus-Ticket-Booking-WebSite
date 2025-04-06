import React from "react";
import { FaPhone } from "react-icons/fa";

const CompanyInvoice = () => {
  return (
    <div className="w-full col-span-1 border-dashed border-1-5 border-neutral-400 relative">
      <div className="w-full bg-red-600 px-4 py-5 tounded-tr-3xl">
        <h1 className="text-2xl text-neutral-50 font-bold text-center">
          Bus ticket
        </h1>
      </div>

      <div className="w-full px-4 py-7 space-y-2">
        <p className="text-sm text-neutral-600 font-normal">Bill No : 465</p>

        <p className="text-sm text-neutral-600 font-normal">
          Date : 2024-10-31
        </p>

        <p className="text-sm text-neutral-600 font-normal">
          Name:Ram Bdr.Ghale
        </p>

        <p className="text-sm text-neutral-600 font-normal">
          {/* From Ginigathhena <span className="text-xs">{buspark}</span> */}
        </p>
        <p className="text-sm text-neutral-600 font-normal">
          {/* From Laxapana <span className="text-xs">{Chakchake}</span> */}
        </p>
        <p className="text-sm text-neutral-600 font-normal">
          Dept. Time: 6.20 AM
        </p>
        <p className="text-sm text-neutral-600 font-normal">
          Seat No: A2,A3,A4,B6;
        </p>
        <p className="text-sm text-neutral-600 font-normal">
          Total Pasenger:04 Only
        </p>

        <p className="text-sm text-neutral-600 font-normal">
          Total Price:LKR 6400
        </p>
      </div>

      <div className="w-full bg-red-600"></div>
      <div className="w-full bg-red-600 absolute bottom-0 left-0 rounded-br-3xl flex items-center justify-center px-5 py-1.5">
        <div className="flex items-center gap-x-2">
          <FaPhone className="w-3 h-3 text-neutral-100" />
          <p className="text-xs text-neutral-100 font-light">+977-9876543210</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyInvoice;
