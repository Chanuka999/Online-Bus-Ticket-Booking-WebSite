import React, { useState } from "react";

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
    </div>
  );
};

export default PaymentMethod;
