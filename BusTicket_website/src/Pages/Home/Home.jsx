import React from "react";
import Hero from "./Hero/Hero";
import { AnimatePresence } from "framer-motion";

const Home = () => {
  return (
    <div className="space-y-16 w-full min-h-screen pb-16">
      <AnimatePresence>
        <Hero />
      </AnimatePresence>
    </div>
  );
};

export default Home;
