import React from "react";
import RootLayout from "../../../Components/Layout/RootLayout";
import ServiceCard from "../../../Components/Service/ServiceCard";
import { RiRefund2Line, RiSecurePaymentLine } from "react-icons/ri";
import { PiHeadsetFill } from "react-icons/pi";

const Services = () => {
  return (
    <RootLayout className="space-y-12">
      <div className="w-full  items-center justify-center text-center p-12">
        <h1 className="text-3xl text-neutral-800 font-bold ">
          Our <span className="text-red-500">Services</span>
        </h1>
      </div>

      <div className="w-full grid grid-cols-3 gap-10 ">
        <ServiceCard
          icon={RiSecurePaymentLine}
          title={"secure Payment"}
          desc={
            "intergeate secure payment getways for users to pay the tickets"
          }
        />

        <ServiceCard
          icon={RiRefund2Line}
          title={"Refund policy"}
          desc={
            "offer option for the users to purchas refundable tickets with  claer terms"
          }
        />

        <ServiceCard
          icon={PiHeadsetFill}
          title={"24/7 Support"}
          desc={"Get assistance anytime through chat, email or moblie"}
        />
      </div>
    </RootLayout>
  );
};

export default Services;
