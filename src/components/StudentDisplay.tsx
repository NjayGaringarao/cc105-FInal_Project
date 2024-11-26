// StudentDisplay.tsx
import React from "react";

type StudentDisplayProps = {
  studentNo: string;
  name: string;
  age: number;
  sex: string;
  contactNo: string;
  isSelected: boolean;
  onSelect: (selected: boolean) => void;
};

const StudentDisplay: React.FC<StudentDisplayProps> = ({
  studentNo,
  name,
  age,
  sex,
  contactNo,
  isSelected,
  onSelect,
}) => {
  return (
    <div className="flex flex-row items-center py-4">
      <input
        type="checkbox"
        className="mx-2 md:w-5 md:h-5 accent-gray-800"
        aria-label="Select student"
        checked={isSelected}
        onChange={(e) => onSelect(e.target.checked)}
      />
      <div className="pl-4 w-40 px-1">
        <span className="text-gray-300 text-base sm:text-base md:text-lg lg:text-lg">
          {studentNo}
        </span>
      </div>
      <div className="flex-1 px-1">
        <span className="text-gray-300 text-base sm:text-base md:text-lg lg:text-lg">
          {name}
        </span>
      </div>
      <div className="w-16 px-1">
        <span className="text-gray-300 text-base sm:text-base md:text-lg lg:text-lg">
          {age}
        </span>
      </div>
      <div className="w-16 px-1">
        <span className="text-gray-300 text-base sm:text-base md:text-lg lg:text-lg">
          {sex}
        </span>
      </div>
      <div className="w-40 px-1">
        <span className="text-gray-300 text-base sm:text-base md:text-lg lg:text-lg">
          {contactNo}
        </span>
      </div>
    </div>
  );
};

export default StudentDisplay;
