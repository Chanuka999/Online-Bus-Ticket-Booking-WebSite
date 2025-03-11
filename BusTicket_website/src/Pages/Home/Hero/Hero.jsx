import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const variants = {
    hidden: { opacity: 0, y: -800 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      className='w-full flex-1 h-screen bg-[url("../../assets/herobg.png")] bg-cover bg-no-repeat bg-top relative'
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.85, ease: "easeInOut" }}
    >
      <div className="absolute top-0 left-0 w-full h-full py-[9ch] bg-gradient-to-b from-neutral-50/70 via-neutral-50/15 to-neutral-50/5 flex items-center justify-start text-center flex-col gap-9">
        <div className="space-y-2">
          <motion.div
            initial={{ opacity: 0, y: -800 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -800 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="text-lg text-neutral-500 font-medium"
          >
            Get Your bus tickets
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
