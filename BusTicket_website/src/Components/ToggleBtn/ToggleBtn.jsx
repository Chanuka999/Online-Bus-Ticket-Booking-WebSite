import React, { useRef, useState, useEffect } from "react";

const ToggleBtn = ({ buttonText, buttonTextHidden, children }) => {
  const [isVisible, setIsVisible] = useState(true);
  const ToggleRef = useRef(null);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleOutsies = (e) => {
    if (ToggleRef.current && !ToggleRef.current.contains(e.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsies);
    return () => {
      document.addEventListener("mousedown", handleOutsies);
    };
  }, []);
  return (
    <div className="w-full h-auto ref={toggleRef}">
      <button
        onClick={toggleVisibility}
        className={`w-fit px-4 py-2 border-2 border-red ${
          !isVisible
            ? "bg-red-500 text-neutral-50"
            : "border-primary bg-transparent text-primary"
        } rounded-lg transmition`}
      >
        {isVisible ? buttonTextHidden : buttonText}
      </button>
      {isVisible && (
        <div className="mt-10 p-4 bg-neutral-50 border border-neutral-300 rounded-xl shadow-sm">
          {children}
        </div>
      )}
    </div>
  );
};

export default ToggleBtn;
