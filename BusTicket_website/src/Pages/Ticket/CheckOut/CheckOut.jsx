import React from "react";
import PassengerData from "./PassengerData/PassengerData";
import TopLayout from "../../../Components/Layout/Toppage/TopLayout";
import RootLayout from "../../../Components/Layout/RootLayout";
import BookingStatus from "./BookingStatus/BookingStatus";

const CheckOut = () => {
  return (
    <div className="w-full space-y-12 pb-16">
      <TopLayout
        bgImg={
          "https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jpg"
        }
        title={"checkout"}
      />

      <RootLayout className="space y-12 w-full pb-16">
        <div className="w-full grid grid-cols-7 items-start gap-44 relative">
          <PassengerData />

          <BookingStatus />
        </div>
      </RootLayout>
    </div>
  );
};

export default CheckOut;
