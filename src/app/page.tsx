"use client";

import { useEffect, useState } from "react";
import YearLevelTab from "@/components/YearLevelTab";
import StudentDisplay from "@/components/StudentDisplay";
import AddStudentForm from "@/components/AddStudentForm";
import StudentTable from "@/components/StudentTable";
import { StudentData } from "@/constant/types";
import AddStudentModal from "@/components/StudentModifyerModal";

export default function Home() {
  const [displayingYear, setDisplayingYear] = useState(1);
  const [studentData, setStudentData] = useState<StudentData[]>([]);
  const [selectedStudentData, setSelectedStudentData] = useState<StudentData[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [onEditData, setOnEditData] = useState<StudentData | undefined>();

  const numberToOrdinal = (num: number) => {
    const ordinals = ["First", "Second", "Third", "Fourth", "Fifth"];
    return ordinals[num - 1];
  };

  const reloadStudentData = async () => {
    try {
      setIsLoading(true);
      setStudentData([]);
      const response = await fetch(`/api/students?yearLevel=${displayingYear}`);
      if (!response.ok) {
        throw Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setStudentData(data);
    } catch (error) {
      console.error("Failed to fetch students:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    reloadStudentData();
    setSelectedStudentData([]);
    setOnEditData(undefined);
  }, [displayingYear]);

  useEffect(() => {
    if (selectedStudentData.length === 1) {
      setOnEditData(selectedStudentData[0]);
    } else {
      setOnEditData(undefined);
    }
  }, [selectedStudentData]);

  return (
    <div className="h-screen w-screen items-center justify-items-center py-12 px-8 overflow-x-hidden">
      <h1 className="pb-8 text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold">
        BSCS Student Database
      </h1>

      <div className="w-full max-w-[80rem]">
        <YearLevelTab
          displayingYear={displayingYear}
          setDisplayingYear={setDisplayingYear}
        />
        <div className="border-2 rounded-t-lg overflow-x-auto mt-2 h-[35rem] relative">
          <StudentTable
            data={studentData}
            selectedStudentData={selectedStudentData}
            setSelectedStudentData={setSelectedStudentData}
            yearLevel={numberToOrdinal(displayingYear)}
          />
        </div>
        <div className="w-full border-2 rounded-b-lg flex flex-row px-2">
          {!selectedStudentData.length && (
            <button
              onClick={openModal}
              className="px-4 py-1 my-1 bg-gray-300 text-white rounded-md"
            >
              <span className=" font-semibold text-gray-700 text-md sm:text-md md:text-lg lg:text-xl">
                Add Student{" "}
              </span>
            </button>
          )}

          <div className="ml-auto">
            {onEditData && (
              <button
                onClick={openModal}
                className="px-4 py-1 my-1 mr-2 bg-gray-300 text-white rounded-md"
              >
                <span className="font-semibold text-gray-700 text-md sm:text-md md:text-lg lg:text-xl">
                  Edit
                </span>
              </button>
            )}

            {!!selectedStudentData.length && (
              <button
                onClick={() => {}}
                className="px-4 py-1 my-1 bg-red-500 text-white rounded-md"
              >
                <span className="font-semibold text-gray-300 text-md sm:text-md md:text-lg lg:text-xl">
                  Delete
                </span>
              </button>
            )}
          </div>
        </div>

        {isModalOpen && (
          <AddStudentModal
            isModalOpen={isModalOpen}
            onClose={closeModal}
            studentData={onEditData}
          />
        )}
      </div>
    </div>
  );
}
