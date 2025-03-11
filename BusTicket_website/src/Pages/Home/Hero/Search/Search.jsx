import React from "react";
import { motion } from "framer-motion";
import { TbArrowExchange } from "react-icons/tb";

const Search = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -800 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -800 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="w-full bg-neutral-50/20 border-2 border-neutral-300 shadow-lg rounded-xl p-5"
    >
      <div className="w-full flex items-center gap-5 justify-between">
        <div className="w-[60%] flex items-center gap-5 relative">
          <div className="w-1/2 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-5 flex items-center gap-x1 rounded-lg"></div>

          <div className="w-1/2 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-5 flex items-center gap-x1 rounded-lg"></div>

          <button className="absolute w-11 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center bg-primary">
            <TbArrowExchange className="w-6 h-6 " />
          </button>
        </div>

        <div className="flex-1 h-14 flex items-center gap-5"></div>
      </div>
    </motion.div>
  );
};

export default Search;
