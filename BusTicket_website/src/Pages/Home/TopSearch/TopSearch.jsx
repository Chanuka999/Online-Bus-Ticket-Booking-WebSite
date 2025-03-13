import React from "react";
import RootLayout from "../../../Components/Layout/RootLayout";
import TopSearchCard from "../../../Components/TopSearch/TopSearchCard";

const TopSearch = () => {
  return (
    <RootLayout className="space-y-12">
      <div className="w-full items-center justify-center text-center">
        <h1 className="text-3xl text-neutral-800 font-bold">
          Top shearch <span className="text-red-500">Routes</span>
        </h1>
      </div>

      <div className="w-full grid grid-cols-3 gap-5">
        <TopSearchCard
          routeFrom={"laxapana"}
          routeTo={"hatton"}
          timeDuration={"2 hours"}
          price={"180.00"}
        />

        <TopSearchCard
          routeFrom={"laxapana"}
          routeTo={"ginigathhena"}
          timeDuration={"1.5 hours"}
          price={"140.00"}
        />

        <TopSearchCard
          routeFrom={"hatton"}
          routeTo={"ginigathhena"}
          timeDuration={"1 hours"}
          price={"100.00"}
        />

        <TopSearchCard
          routeFrom={"hatton"}
          routeTo={"kandy"}
          timeDuration={"3 hours"}
          price={"300.00"}
        />

        <TopSearchCard
          routeFrom={"laxapana"}
          routeTo={"kandy"}
          timeDuration={"3 hours"}
          price={"300.00"}
        />

        <TopSearchCard
          routeFrom={"laxapana"}
          routeTo={"GINIGATHHEN"}
          timeDuration={"1.5 hours"}
          price={"140.00"}
        />
      </div>
    </RootLayout>
  );
};

export default TopSearch;
