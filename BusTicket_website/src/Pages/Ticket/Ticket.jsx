import React from "react";
import TopLayout from "../../Components/Layout/Toppage/TopLayout";
import RootLayout from "../../Components/Layout/RootLayout";
import { motion } from "framer-motion";
import Search from "../Home/Hero/Search/Search";
import Filter from "./Filter/Filter";
import SearchResalt from "./SearchResalt/SearchResalt";

const Ticket = () => {
  return (
    <div className="w-full space-y-12 pb-16">
      <TopLayout
        bgImg={
          "https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jpg"
        }
        title={"Reserve Your ticket"}
      />

      <RootLayout>
        <div className="space-y-5 w-full bg-neutral-50 flex py-4 items-center justify-center flex-col sticky top-0 z-30">
          <motion.h1
            initial={{ opacity: 0, y: -800 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -800 }}
            transition={{ duration: 1.85, ease: "easeOut" }}
            className="text-3xl text-neutral-700 font-semibold"
          >
            want to change the route?
          </motion.h1>

          <Search />
        </div>

        <div className="w-full h-auto grid grid-cols-4 gap-16 relative">
          <div className="col-span-1">
            <Filter className="space-y-4 sticky top-52" />
          </div>
          <SearchResalt />
        </div>
      </RootLayout>
    </div>
  );
};

export default Ticket;
