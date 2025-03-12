import React from "react";
import RootLayout from "../../../Components/Layout/RootLayout";

const Services = () => {
  return (
    <RootLayout className="space-y-12">
      <div className="w-full items-center justify-center text-center">
        <h1 className="text-3xl text-neutral-800 font-bold">
          Our <span className="text-red-500">Services</span>
        </h1>
      </div>
    </RootLayout>
  );
};

export default Services;
