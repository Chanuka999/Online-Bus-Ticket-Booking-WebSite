import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center flex-col">
      <div className="w-full h-screen flex items-center justify-center">
        <h1 className="text-5xl text-neutral-950 font-bold">
          This is home page
        </h1>
      </div>

      <div className="w-full h-screen flex items-center justify-center bg-neutral-950">
        <h1 className="text-5xl text-neutral-50 font-bold">
          This is about page
        </h1>
      </div>
    </div>
  );
};

export default Home;
