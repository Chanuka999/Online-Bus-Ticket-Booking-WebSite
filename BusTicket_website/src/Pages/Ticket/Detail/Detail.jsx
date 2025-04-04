import React from "react";
import { Link } from "react-router-dom";
import WarningAlert from "../../../Components/AlertMessage.jsx/WarningAlert";
import TopLayout from "../../../Components/Layout/Toppage/TopLayout";
import RootLayout from "../../../Components/Layout/RootLayout";
import BusSeat from "./Seat/Busseat/BusSeat";
import ToggleBtn from "../../../Components/ToggleBtn/ToggleBtn";
import Amentities from "./Amentities/Amentities";
import ReservationPolicy from "./ReservationPolicy/ReservationPolicy";
import BusImage from "./BusImage/BusImage";

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
        <div className="w-full flex items-center justify-center flex-col gap-8 text-center">
          <p className="text-base text-neutral-500 font-normal text-justify">
            This is a sample text for the demo purpose. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sit eaque facere voluptas ipsum
            beatae id recusandae. Cupiditate, consequuntur ad! Repellendus
            quaerat nam accusamus repellat obcaecati quis quo placeat soluta
            unde.
            <span className="text-lg text-neutral-600 font-medium ml-2">
              want to see more about
            </span>
          </p>

          <div className="w-full flex items-center justify-center gap-6 flex-col">
            <ToggleBtn
              buttonText={"see Bus tickets"}
              buttonTextHidden={"Hide Bus Details"}
            >
              <div className="w-full space-y-10">
                <div className="w-full grid grid-cols-7">
                  <Amentities />

                  <ReservationPolicy />
                </div>
                <BusImage />
              </div>
            </ToggleBtn>
          </div>
        </div>
      </RootLayout>
    </div>
  );
};

export default Detail;
