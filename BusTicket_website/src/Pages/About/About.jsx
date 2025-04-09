import React from "react";

const About = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-[url('assets/bus2.webp')] bg-cover bg-center bg-no-repeat px-10">
      <div className="flex flex-row gap-10 max-w-6xl text-5xl text-neutral-950 font-bold bg-white/30 backdrop-blur p-4 rounded-xl shadow">
        {/* Column 1 - Title */}
        <div className="w-1/2 flex items-start ">
          <h1 className="text-5xl text-black-550 font-bold  ">🚌 Who We Are</h1>
        </div>
        {/* Column 2 - Paragraph */}
        <div className="w-1/2">
          <p className="text-lg text-black-700 leading-relaxed">
            We are a passionate team dedicated to making bus travel easier,
            faster, and more convenient for everyone. Our online platform allows
            passengers to search, compare, and book bus tickets across various
            destinations—all from the comfort of their home or mobile device.
            With a user-first design and seamless booking experience, we aim to
            bridge the gap between travelers and bus service providers through
            modern technology.
          </p>
          <br />

          <p className="text-lg text-black-700 leading-relaxed">
            🎯 Our Mission To simplify travel planning by providing a fast,
            secure, and reliable online bus ticket booking experience. We strive
            to connect people and places by offering a wide network of routes
            and operators at your fingertips.
          </p>
          <br />

          <p className="text-lg text-black-700 leading-relaxed">
            <ul>
              <li>24/7 customer support Transparent pricing,</li>
              <li> no hidden charges Trusted</li>
              <li>by thousands of users Continuous updates and improvements</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
