"use client";

function YearLevelTab({
  displayingYear,
  setDisplayingYear,
}: {
  displayingYear: number;
  setDisplayingYear: (year: number) => void;
}) {
  const years = ["First", "Second", "Third", "Fourth"];

  return (
    <div className="border-2 border-primary rounded-lg overflow-hidden">
      <div className="my-2">
        <span className="text-primary font-extrabold text-2xl sm:text-2xl md:text-3xl lg:text-3xl px-4">
          Year Level
        </span>
      </div>
      <div className="border-primary border-t-2 flex">
        {years.map((year, index) => {
          const yearNumber = index + 1;
          return (
            <button
              key={yearNumber}
              className={`flex-1 py-2 ${
                displayingYear === yearNumber ? "bg-lightPrimary" : ""
              }`}
              onClick={() => setDisplayingYear(yearNumber)}
            >
              <span
                className={` font-mono ${
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
