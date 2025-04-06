import React, { useState } from "react";
import PaymentCard from "../../../../../Components/Payment/PaymentCard";
import { FaPlus } from "react-icons/fa";

import MasterCardImg from "../../../../../assets/MasterCard.png";
import CreditCardImg from "../../../../../assets/creditcard.png";

const PaymentMethod = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const handleChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  return (
    <div className="w-full space-y-3">
      <h6 className="text-sm text-neutral-500 font-mediu">
        Select Payment Method
      </h6>

      <div className="w-full grid grid-cols-2 gap-10">
        <PaymentCard
          selectedPayment={selectedPaymentMethod}
          value={"mastercard"}
          onChange={handleChange}
          cardholderName={"Run Bdr.Ghale"}
          cardNumber={"8888"}
          cardImage={MasterCardImg}
        />
        <PaymentCard
          selectedPayment={selectedPaymentMethod}
          value={"creditcard"}
          onChange={handleChange}
          cardholderName={"Run Bdr.Ghale"}
          cardNumber={"8888"}
          cardImage={CreditCardImg}
        />
      </div>

      <div className="w-full flex justify-end">
        <div className="w-fit flex items-center justify-center gap-x-2 cursor-pointer text-base font-normal text-red-500">
          <FaPlus />
          <p className="capitalize">Add new card</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
