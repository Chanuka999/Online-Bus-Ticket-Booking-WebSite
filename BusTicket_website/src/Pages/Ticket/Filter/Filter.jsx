import React from "react";
import PriceRangeSlider from "../../../Components/PriceRange/PriceRange";

const Filter = ({ className }) => {
  const [rangeValues, setRangeValues] = React.useState({
    min: 0,
    max: 100,
  });

  const handleRangeChange = (values) => {
    setRangeValues({ values });
  };
  return (
    <div className={`w-full ${className}`}>
      <h1 className="text-xl text-neutral-700 font-semibold">Apply Filters</h1>

      <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-1">
        <h1 className="text-lg text-neutral-600 font-medium">Apply Filters</h1>

        <PriceRangeSlider min={1000} max={3000} onChange={handleRangeChange} />
      </div>

      <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-1"></div>

      <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-1"></div>
    </div>
  );
};

export default Filter;
