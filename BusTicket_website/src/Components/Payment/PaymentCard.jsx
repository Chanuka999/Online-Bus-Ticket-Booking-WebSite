import React from "react";
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";

const PaymentCard = ({
  selectedPayment,
  value,
  onChange,
  cardholderName,
  cardNumber,
  cardImage,
}) => {
  return (
    <label
      className={`w-full flx items-end px-4 py-2 border-2 ${
        selectedPayment === value
          ? "border-indigo-500/80 bg-indigo-500/50"
          : "border-neutral-300 bg-neutral-100/40"
      } rounded-xl relative cursor-pointer `}
    >
      <div className="w-full flex items-center justify-between gap-7">
        <div className="flex items-center gap-x-3">
          <div className="w-fit h-16 rounded-lg">
            <img
              src={cardImage}
              alt="payment img"
              className="w-full h-full object-contain object-center rounded-lg"
            />
          </div>
          <div className="space-y-0 5">
            <h1 className="text-base text-neutral-600 font-medium">
              {cardholderName}
              <p className="text-neutral-500 text-sm font-normal">
                {cardNumber.slice(-4)}
              </p>
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center">
          {selectedPayment === value ? (
            <IoMdRadioButtonOn className="w-7 h-7 text-indigo-500" />
          ) : (
            <IoMdRadioButtonOff className="w-7 h-7 text-neutral-500" />
          )}
        </div>
      </div>

      <input
        type="radio"
        value={value}
        checked={selectedPayment === value}
        onChange={onChange}
        className="hidden"
      />
    </label>
  );
};

export default PaymentCard;
