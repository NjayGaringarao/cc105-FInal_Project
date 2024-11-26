import { StudentData } from "@/constant/types";
import React, { useState, useEffect } from "react";

interface StudentTableProps {
  data: StudentData[];
  selectedStudentData: StudentData[];
  setSelectedStudentData: React.Dispatch<React.SetStateAction<StudentData[]>>;
  yearLevel: string;
}

const StudentTable: React.FC<StudentTableProps> = ({
  data,
  selectedStudentData,
  setSelectedStudentData,
  yearLevel,
}) => {
  const allSelected =
    data.length > 0 && selectedStudentData.length === data.length;

  const handleRowSelection = (student: StudentData) => {
    setSelectedStudentData(
      (prev) =>
        prev.some((s) => s.student_no === student.student_no)
          ? prev.filter((s) => s.student_no !== student.student_no) // Unselect
          : [...prev, student] // Select
    );
  };

  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedStudentData([]); // Unselect all
    } else {
      setSelectedStudentData(data); // Select all
    }
  };

  const calculateAge = (birthday: string): number => {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  return (
    <div className="overflow-auto h-full">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead className="bg-gray-300 text-gray-800">
          <tr>
            <th className="border border-gray-400 px-4 py-2">
              <input
                type="checkbox"
                checked={allSelected}
                onChange={handleSelectAll}
                className="cursor-pointer"
              />
            </th>
            <th className="border border-gray-400 px-4 py-2">Student No.</th>
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Age</th>
            <th className="border border-gray-400 px-4 py-2">Sex</th>
            <th className="border border-gray-400 px-4 py-2">Contact No.</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, index) => (
            <tr key={index}>
              <td className="border border-gray-400 px-4 py-4 text-center">
                <input
                  type="checkbox"
                  checked={selectedStudentData.some(
                    (s) => s.student_no === student.student_no
                  )}
                  onChange={() => handleRowSelection(student)}
                  className="cursor-pointer"
                />
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center">
                {student.student_no}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {student.last_name
                  .concat(", ")
                  .concat(student.first_name)
                  .concat(` ${student.middle_name && student.middle_name}`)}
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center">
                {calculateAge(student.birthday)}
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center">
                {student.sex}
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center">
                {student.contact_no}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {!data.length && (
        <div className="h-40 rounded-lg flex items-center justify-center">
          <span className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold">{`No data for ${yearLevel} Year`}</span>
        </div>
      )}
    </div>
  );
};

export default StudentTable;
