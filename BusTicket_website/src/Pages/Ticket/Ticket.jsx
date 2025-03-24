import React from "react";
import TopLayout from "../../Components/Layout/Toppage/TopLayout";

const Ticket = () => {
  return (
    <div className="w-full space-y-12 pb-16">
      <TopLayout
        bgImg={
          "https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jpg"
        }
        title={"Reserve Your ticket"}
      />
    </div>
  );
};

export default Ticket;
