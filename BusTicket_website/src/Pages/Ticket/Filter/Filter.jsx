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

        <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-1">
          <h1 className="text-lg text-neutral-600 font-medium">Bus Types</h1>
          <div className="space-y-2.5">
            <div className="w-full flex items-center gap-2">
              <input
                type="checkbox"
                id=""
                className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
              />
              <label
                htmlFor="ac"
                className="text-sm text-neutral-600 font-normal cursor-pointer"
              >
                AC Deluxe<span className="text-xs text-neutral-600">(10)</span>
              </label>
            </div>

            <div className="w-full flex items-center gap-2">
              <input
                type="checkbox"
                id="tourist"
                className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
              />
              <label
                htmlFor="tourist"
                className="text-sm text-neutral-600 font-normal cursor-pointer"
              >
                Tourist AC Deluxe
                <span className="text-xs text-neutral-600">(10)</span>
              </label>
            </div>

            <div className="w-full flex items-center gap-2">
              <input
                type="checkbox"
                id="airSuspension"
                className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
              />
              <label
                htmlFor="airSuspension"
                className="text-sm text-neutral-600 font-normal cursor-pointer"
              >
                Air suspension
                <span className="text-xs text-neutral-600">(10)</span>
              </label>
            </div>

            <div className="w-full flex items-center gap-2">
              <input
                type="checkbox"
                id="luxuryac"
                className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
              />
              <label
                htmlFor="luxuryac"
                className="text-sm text-neutral-600 font-normal cursor-pointer"
              >
                luxury AC Deluxe
                <span className="text-xs text-neutral-600">(10)</span>
              </label>
            </div>
          </div>
        </div>
        <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-1">
          <h1 className="text-lg text-neutral-600 font-medium">
            Bus Companies
          </h1>
          <div className="space-y-2.5">
            <div className="w-full flex items-center gap-2">
              <input
                type="checkbox"
                id=""
                className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
              />
              <label
                htmlFor="sworgadwarideluxe"
                className="text-sm text-neutral-600 font-normal cursor-pointer"
              >
                sworgadwari deluxe
                <span className="text-xs text-neutral-600">(10)</span>
              </label>
            </div>

            <div className="w-full flex items-center gap-2">
              <input
                type="checkbox"
                id="tourist"
                className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
              />
              <label
                htmlFor="pokkharadeluxe"
                className="text-sm text-neutral-600 font-normal cursor-pointer"
              >
                pokhara delux
                <span className="text-xs text-neutral-600">(10)</span>
              </label>
            </div>

            <div className="w-full flex items-center gap-2">
              <input
                type="checkbox"
                id="airSuspension"
                className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
              />
              <label
                htmlFor="mustangdelux"
                className="text-sm text-neutral-600 font-normal cursor-pointer"
              >
                Mustang Delux
                <span className="text-xs text-neutral-600">(10)</span>
              </label>
            </div>

            <div className="w-full flex items-center gap-2">
              <input
                type="checkbox"
                id="luxuryac"
                className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
              />
              <label
                htmlFor="lumbinidelux"
                className="text-sm text-neutral-600 font-normal cursor-pointer"
              >
                lumbini Delux
                <span className="text-xs text-neutral-600">(10)</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-1">
        <h1 className="text-lg text-neutral-600 font-medium">Amenities</h1>
        <div className="space-y-2.5">
          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="internet"
              className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
            />
            <label
              htmlFor="internet"
              className="text-sm text-neutral-600 font-normal cursor-pointer"
            >
              Internet/wifi
              <span className="text-xs text-neutral-600">(10)</span>
            </label>
          </div>

          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="acairsusp"
              className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
            />
            <label
              htmlFor="acairsusp"
              className="text-sm text-neutral-600 font-normal cursor-pointer"
            >
              AC and Air suspention
              <span className="text-xs text-neutral-600">(10)</span>
            </label>
          </div>

          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="tvmusic"
              className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
            />
            <label
              htmlFor="tvmusic"
              className="text-sm text-neutral-600 font-normal cursor-pointer"
            >
              LED TV & Music
              <span className="text-xs text-neutral-600">(10)</span>
            </label>
          </div>

          <div className="w-full flex items-center gap-2">
            <input
              type="chargingport"
              id="luxuryac"
              className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
            />
            <label
              htmlFor="chargingport"
              className="text-sm text-neutral-600 font-normal cursor-pointer"
            >
              Charging Port
              <span className="text-xs text-neutral-600">(10)</span>
            </label>
          </div>

          <div className="w-full flex items-center gap-2">
            <input
              type="fan"
              id="luxuryac"
              className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
            />
            <label
              htmlFor="fan"
              className="text-sm text-neutral-600 font-normal cursor-pointer"
            >
              Fan
              <span className="text-xs text-neutral-600">(10)</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
