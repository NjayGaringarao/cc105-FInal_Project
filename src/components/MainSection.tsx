"use client";

import { useEffect, useState } from "react";
import YearLevelTab from "@/components/YearLevelTab";
import StudentTable from "@/components/StudentTable";
import { StudentData } from "@/constant/types";
import AddStudentModal from "@/components/StudentModifyerModal";

export default function MainSection() {
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

  const deleteStudentDataHandle = async () => {
    if (
      !confirm(
        `${selectedStudentData.length} record/s will be deleted. This cannot be undone. Would you like to continue?`
      )
    )
      return;

    setIsLoading(true);

    selectedStudentData.forEach(async (studentData) => {
      try {
        const response = await fetch(
          `/api/students?student_no=${studentData.student_no}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            `Failed to delete student: ${response.status} ${
              errorData.error || response.statusText
            }`
          );
        }

        const result = await response.json();
        setSelectedStudentData([]);
        console.log("Student deleted successfully:", result);
      } catch (error) {
        console.error("Error deleting student:", error);
      }
    });

    setIsLoading(false);
    reloadStudentData();
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
    <div className="h-auto w-screen items-center justify-items-center py-12 px-4 overflow-x-hidden">
      {/* <h1 className="pb-8 text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold">
        BSCS Student Database
      </h1> */}

      <div className="w-full max-w-[80rem]">
        <YearLevelTab
          displayingYear={displayingYear}
          setDisplayingYear={setDisplayingYear}
        />
        <div className="border-2 border-panel rounded-t-lg overflow-x-auto mt-2 h-[35rem] relative">
          <StudentTable
            data={studentData}
            selectedStudentData={selectedStudentData}
            setSelectedStudentData={setSelectedStudentData}
            yearLevel={numberToOrdinal(displayingYear)}
          />
        </div>
        <div className="w-full border-2 border-panel rounded-b-lg flex flex-row px-2 bg-lightPanel">
          {!selectedStudentData.length && (
            <button
              onClick={openModal}
              className="px-4 py-2 my-1 bg-panel text-white rounded-md"
            >
              <span className=" font-semibold text-white text-base sm:text-base md:text-lg lg:text-xl">
                Add Student{" "}
              </span>
            </button>
          )}

          <div className="ml-auto">
            {onEditData && (
              <button
                onClick={openModal}
                className="px-4 py-2 my-1 mr-2 bg-panel text-white rounded-md"
              >
                <span className="font-semibold  text-md sm:text-md md:text-lg lg:text-xl">
                  Edit
                </span>
              </button>
            )}

            {!!selectedStudentData.length && (
              <button
                onClick={deleteStudentDataHandle}
                className="px-4 py-2 my-1 bg-red-500 text-white rounded-md"
              >
                <span className="font-semibold text-white text-md sm:text-md md:text-lg lg:text-xl">
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
            reloadData={reloadStudentData}
            setSelectedData={setSelectedStudentData}
          />
        )}
      </div>
    </div>
  );
}
