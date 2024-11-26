import { StudentData } from "@/constant/types";
import React, { useState, useEffect } from "react";

interface StudentTableProps {
  data: StudentData[];
  selectedStudentNo: string[];
  setSelectedStudentNo: React.Dispatch<React.SetStateAction<string[]>>;
}

const StudentTable: React.FC<StudentTableProps> = ({
  data,
  selectedStudentNo,
  setSelectedStudentNo,
}) => {
  const allSelected =
    data.length > 0 && selectedStudentNo.length === data.length;

  const handleRowSelection = (studentNo: string) => {
    setSelectedStudentNo(
      (prev) =>
        prev.includes(studentNo)
          ? prev.filter((no) => no !== studentNo) // Unselect
          : [...prev, studentNo] // Select
    );
  };

  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedStudentNo([]); // Unselect all
    } else {
      setSelectedStudentNo(data.map((student) => student.student_no)); // Select all
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
            <th className=" border border-gray-400 px-4 py-2">Student No.</th>
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
                  checked={selectedStudentNo.includes(student.student_no)}
                  onChange={() => handleRowSelection(student.student_no)}
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
    </div>
  );
};

// Utility function to calculate age
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

// Dummy data
const studentData = [
  {
    studentNo: "1234567890",
    lastName: "Doe",
    firstName: "John",
    middleName: "A.",
    birthday: "2005-03-15",
    sex: "Male",
    contactNo: "09123456789",
  },
  {
    studentNo: "9876543210",
    lastName: "Smith",
    firstName: "Jane",
    middleName: "",
    birthday: "2000-10-01",
    sex: "Female",
    contactNo: "09876543210",
  },
];

// // Convert birthday to age before passing data to the table
// const preparedStudentData = studentData.map((student) => ({
//   ...student,
//   age: calculateAge(student.birthday),
// }));

// export default function App() {
//   const [selectedStudentNo, setSelectedStudentNo] = useState<string[]>([]);

//   return (
//     <div>
//       <StudentTable
//         data={preparedStudentData}
//         selectedStudentNo={selectedStudentNo}
//         setSelectedStudentNo={setSelectedStudentNo}
//       />
//       <div className="mt-4">
//         <p className="text-sm">
//           Selected Student Numbers:{" "}
//           {selectedStudentNo.length > 0
//             ? selectedStudentNo.join(", ")
//             : "None selected"}
//         </p>
//       </div>
//     </div>
//   );
// }

export default StudentTable;
