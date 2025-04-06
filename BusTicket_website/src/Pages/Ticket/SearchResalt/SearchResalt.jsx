import React from "react";
import TicketCard from "../../../Components/Ticket/TicketCard";
import { FaBus } from "react-icons/fa";
import { GrRefresh } from "react-icons/gr";

const SearchResalt = () => {
  return (
    <div className="w-full col-span-3 space-y-10 pt-11">
      <div className="space-y-6">
        <TicketCard
          icon={FaBus}
          busName={"Laxapana Express"}
          routeFrome={"laxpana"}
          routeTo={"laxapana"}
          arrivalTime={"6.15 pm"}
          departureTime={"10.00"}
          price={"1000"}
          availableSeats={"5"}
        />

        <TicketCard
          icon={FaBus}
          busName={"Laxapana Express"}
          routeFrome={"laxpana"}
          routeTo={"laxapana"}
          arrivalTime={"6.15 pm"}
          departureTime={"10.00"}
          price={"1000"}
          availableSeats={"5"}
        />
        <TicketCard
          icon={FaBus}
          busName={"Laxapana Express"}
          routeFrome={"laxpana"}
          routeTo={"laxapana"}
          arrivalTime={"6.15 pm"}
          departureTime={"10.00"}
          price={"1000"}
          availableSeats={"5"}
        />
        <TicketCard
          icon={FaBus}
          busName={"Laxapana Express"}
          routeFrome={"laxpana"}
          routeTo={"laxapana"}
          arrivalTime={"6.15 pm"}
          departureTime={"10.00"}
          price={"1000"}
          availableSeats={"5"}
        />

        <TicketCard
          icon={FaBus}
          busName={"Laxapana Express"}
          routeFrome={"laxpana"}
          routeTo={"laxapana"}
          arrivalTime={"6.15 pm"}
          departureTime={"10.00"}
          price={"1000"}
          availableSeats={"5"}
        />
        <TicketCard
          icon={FaBus}
          busName={"Laxapana Express"}
          routeFrome={"laxpana"}
          routeTo={"laxapana"}
          arrivalTime={"6.15 pm"}
          departureTime={"10.00"}
          price={"1000"}
          availableSeats={"5"}
        />
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="w-fit px-5 py-2 bg-red-500 hover:bg-transparent border-2 border-red-500 hover:border-red-500 rounded-xl text-base font-normal text-white flex items-center justify-center gap-x-2 hover:text-red-500 ease-in-out duration-300">
          <GrRefresh />
          Load More
        </div>
      </div>
    </div>
  );
};

export default SearchResalt;
