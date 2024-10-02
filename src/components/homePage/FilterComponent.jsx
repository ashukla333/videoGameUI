import React, { useState, useEffect } from "react";
import { IoArrowUpOutline } from "react-icons/io5";

const FilterComponent = ({ setFilters, handleClearFilters }) => {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    setFilters({
      name,
      score,
      sort
    });
  }, [name, score, sort, setFilters]);

  return (
    <div className="w-full bg-card-background p-5 shadow-lg">
      <h2 className="text-xl font-semibold text-white mb-4">Filters</h2>
      <div className="mb-4">
        <label className="block text-sm text-white font-montserrat mb-2">
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 text-white bg-input-bg focus:outline-none border border-gray-700"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm text-white font-montserrat mb-2">
       Minimum   Score
        </label>
        <input
          type="text"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          className="w-full p-2 text-white bg-input-bg focus:outline-none border border-gray-700"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm text-white font-montserrat mb-2">
          Order By
        </label>
        <div className="flex items-center space-x-3">
          <button className="p-2 bg-button-accent text-white hover:bg-gray-600">
            <IoArrowUpOutline className="h-6 w-6" />
          </button>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full p-2 text-white bg-input-bg focus:outline-none border border-gray-700"
          >
            <option value="releaseDate">Release Date</option>
            <option value="score">Score</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleClearFilters}
          className="py-2 px-4 bg-button-accent hover:bg-blue-700 text-white font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
