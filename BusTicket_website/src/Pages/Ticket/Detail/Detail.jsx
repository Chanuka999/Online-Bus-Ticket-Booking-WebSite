import React from "react";
import { Link } from "react-router-dom";
import WarningAlert from "../../../Components/AlertMessage.jsx/WarningAlert";
import TopLayout from "../../../Components/Layout/Toppage/TopLayout";
import RootLayout from "../../../Components/Layout/RootLayout";
import BusSeat from "./Seat/Busseat/BusSeat";

const Detail = () => {
  const message = (
    <>
      One individual only can book 10 sears.If you want to book for than Please
      <Link to={"/support-team"} className="text-yellow-700 font-medium">
        Contact our support team.
      </Link>
    </>
  );

  return (
    <div className="w-full space-y-12 pb-16">
      <TopLayout
        bgImg={
          "https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jpg"
        }
        title={"Bus datails"}
      />

      <RootLayout className="space y-12 w-full pb-16">
        <div className="w-full space-y-8">
          <WarningAlert message={message} />

          <BusSeat />
        </div>
        <div className="w-full flex items-center justify-center flex-col gap-8 text-center"></div>
      </RootLayout>
    </div>
  );
};

export default Detail;
