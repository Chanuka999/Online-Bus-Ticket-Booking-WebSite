import React from "react";
import { Link } from "react-router-dom";

const Detail = () => {
  <>
    One individual only can book 10 sears.If you want to book for than Please
    <Link>Contact our support</Link>
  </>;
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
          .w-full.flex.items-center{" "}
          <justify-center className="flex-col hap-8 text-center"></justify-center>
        </div>
      </RootLayout>
    </div>
  );
};

export default Detail;
