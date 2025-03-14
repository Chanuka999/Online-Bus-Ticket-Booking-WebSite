import React, { useEffect } from "react";

const RootLayout = ({ children, className }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className={`w-full lg:px-24 md:px-16 sm:px-6 px-4 ${className}`}>
      {children}
    </div>
  );
};

export default RootLayout;
