import React, { useEffect, useState } from "react";

const ErrorMessage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setIsVisible(false);
    }
  }, [countdown]);

  if (!isVisible) {
    return null;
  }
  return (
    <div className="fixed top-28 p-4 right-4 text-sm text-neutral-50 bg-primary rounded-xl shadow-lg transition-transform transform-gpu animate-slide-in">
      <div className="flex items-center justify-between"></div>
    </div>
  );
};

export default ErrorMessage;
