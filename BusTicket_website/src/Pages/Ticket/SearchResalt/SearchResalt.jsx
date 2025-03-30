import React from "react";
import TicketCard from "../../../Components/Ticket/TicketCard";
import { FaBus } from "react-icons/fa";

const SearchResalt = () => {
  return (
    <div className="w-full col-span-3 space-y-10 pt-11">
      <div className="space-y-6">
        <TicketCard
          icon={FaBus}
          busName={"Sworgadwari Deluxe"}
          routeFrome={"Kathmandu"}
          routeTo={"laxapana"}
          arrivalTime={"6.15 pm"}
          departureTime={"10.00"}
          price={"1000"}
          availableSeats={"5"}
        />
      </div>
    </div>
  );
};

export default SearchResalt;
