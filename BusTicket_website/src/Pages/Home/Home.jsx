import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import TopSearch from "./TopSearch/TopSearch";

const Home = () => {
  return (
    <div className="space-y-24 w-full min-h-screen pb-24 px-8 ">
      <Hero />

      <Services />

      <TopSearch />
    </div>
  );
};

export default Home;
