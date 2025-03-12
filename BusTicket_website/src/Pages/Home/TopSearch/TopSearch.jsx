import React from "react";
import RootLayout from "../../../Components/Layout/RootLayout";

const TopSearch = () => {
  return (
    <RootLayout className="space-y-12">
      <div className="w-full items-center justify-center text-center">
        <h1 className="text-3xl text-neutral-800 font-bold">
          Top shearch <span className="text-red-500">Routes</span>
        </h1>
      </div>

      <div className="w-full grid-cols-3 gap-5"></div>
    </RootLayout>
  );
};

export default TopSearch;
