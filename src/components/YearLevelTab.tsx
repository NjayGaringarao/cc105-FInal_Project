"use client";

import { useState } from "react";

// YearLevelTab Component
function YearLevelTab({
  displayingYear,
  setDisplayingYear,
}: {
  displayingYear: number;
  setDisplayingYear: (year: number) => void;
}) {
  const years = ["First", "Second", "Third", "Fourth"];

  return (
    <div className="border-2 rounded-lg overflow-hidden">
      <div className="my-2">
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold px-4">
          Year Level
        </span>
      </div>
      <div className="border-gray-300 border-t-2 border-b-2 flex">
        {years.map((year, index) => {
          const yearNumber = index + 1;
          return (
            <button
              key={yearNumber}
              className={`flex-1 py-0 ${
                displayingYear === yearNumber ? "bg-gray-300" : ""
              }`}
              onClick={() => setDisplayingYear(yearNumber)}
            >
              <span
                className={`${
                  displayingYear === yearNumber ? "text-gray-950" : ""
                } text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold`}
              >
                {year}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default YearLevelTab;
