"use client";

import { useEffect, useState } from "react";
import YearLevelTab from "@/components/YearLevelTab";
import StudentDisplay from "@/components/StudentDisplay";
import AddStudentForm from "@/components/AddStudentForm";
import StudentTable from "@/components/StudentTable";
import { StudentData } from "@/constant/types";

export default function Home() {
  const [displayingYear, setDisplayingYear] = useState(1);
  const [studentData, setStudentData] = useState<StudentData[]>([]);
  const [selectedStudentNo, setSelectedStudentNo] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
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

  useEffect(() => {
    reloadStudentData();
    setSelectedStudentNo([]);
  }, [displayingYear]);

  return (
    <div className="h-screen w-screen items-center justify-items-center px-12 overflow-x-hidden">
      <h1 className="pt-16 pb-8 text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold">
        BSCS Student Database
      </h1>

      <div className="w-full max-w-[80rem]">
        <YearLevelTab
          displayingYear={displayingYear}
          setDisplayingYear={setDisplayingYear}
        />
        <div className="border-2 rounded-lg overflow-x-auto mt-2 h-[35rem] relative">
          <StudentTable
            data={studentData}
            selectedStudentNo={selectedStudentNo}
            setSelectedStudentNo={setSelectedStudentNo}
          />
          {!!!studentData.length && (
            <div className="h-40 rounded-lg flex items-center justify-center">
              <span className="text-base sm:text-base md:text-xl lg:text-xl font-semibold">{`No data for ${numberToOrdinal(
                displayingYear
              )} Year`}</span>
            </div>
          )}
          {!!selectedStudentNo.length && (
            <div className="absolute bottom-4 right-4 flex flex-row gap-2">
              {selectedStudentNo.length == 1 && (
                <button className="px-2 text-gray-900 bg-gray-300 rounded-md">
                  <span className="text-md sm:text-md md:text-lg lg:text-xl">
                    Edit
                  </span>
                </button>
              )}

              <button className="px-2 text-gray-900 bg-gray-300 rounded-md">
                <span className="text-md sm:text-md md:text-lg lg:text-xl">
                  Delete
                </span>
              </button>
            </div>
          )}
        </div>

        <AddStudentForm />
      </div>
    </div>
  );
}
