import React, { useState } from "react";

const PriceFilter = ({ onFilterChange }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleFilter = () => {
    if (onFilterChange) {
      onFilterChange({ minPrice, maxPrice });
    }
  };

  return (
    <div className="p-4  bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Filter by Price</h2>
      <div className="flex flex-col space-y-3">
        {/* Minimum Price Input */}
        <div>
          <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700">
            Minimum Price
          </label>
          <input
            type="number"
            id="minPrice"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="e.g., 100"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Maximum Price Input */}
        <div>
          <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700">
            Maximum Price
          </label>
          <input
            type="number"
            id="maxPrice"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="e.g., 500"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Apply Filter Button */}
        <button
          onClick={handleFilter}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default PriceFilter;
