import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const variants = {
    hidden: { opacity: 0, y: -800 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div className='w-full flex-1 h-screen bg-[url("./assests/hero.png")] bg-cover bg-no-repeat bg-top relative'></motion.div>
  );
};

export default Hero;
