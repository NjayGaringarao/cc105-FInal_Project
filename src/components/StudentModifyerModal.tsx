import { StudentData } from "@/constant/types";
import { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

export default function AddStudentModal({
  isModalOpen,
  onClose,
  studentData, // New prop to pass the student data for editing
}: {
  isModalOpen: boolean;
  onClose: () => void;
  studentData?: StudentData; // Optional prop for editing data
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<StudentData>({
    student_no: "",
    last_name: "",
    first_name: "",
    middle_name: "",
    birthday: "",
    sex: "",
    contact_no: "",
    year_level: 1,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const isValidDate = (dateStr: string): boolean => {
    const date = new Date(dateStr);
    const now = new Date();
    const age = now.getFullYear() - date.getFullYear();
    const monthDiff = now.getMonth() - date.getMonth();
    const dayDiff = now.getDate() - date.getDate();
    return (
      age > 16 ||
      (age === 16 && (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)))
    );
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (formData.student_no.length < 10) {
      newErrors.student_no =
        "Student number must be at least 10 characters long.";
    }
    if (!formData.last_name.trim()) {
      newErrors.last_name = "Last name is required.";
    }
    if (!formData.first_name.trim()) {
      newErrors.first_name = "First name is required.";
    }
    if (!formData.birthday || !isValidDate(formData.birthday)) {
      newErrors.birthday = "You must be at least 16 years old.";
    }
    if (formData.sex !== "MALE" && formData.sex !== "FEMALE") {
      newErrors.sex = "Sex must be either Male or Female.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value.toUpperCase() }));
  };

  const addStudentData = async (studentData: StudentData) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Failed to add student: ${response.status} ${
            errorData.error || response.statusText
          }`
        );
      }

      const result = await response.json();
      console.log("Student added successfully:", result);
      setFormData(Object);
      setErrors({});
      onClose();
    } catch (error) {
      console.error("Error adding student:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateStudentData = async (studentData: StudentData) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/students", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Failed to update student: ${response.status} ${
            errorData.error || response.statusText
          }`
        );
      }
      const result = await response.json();
      console.log("Student update successfully:", result);
      setFormData(Object);
      setErrors({});
      onClose();
    } catch (error) {
      console.error("Error adding student:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (studentData) {
      updateStudentData(formData);
    } else {
      addStudentData(formData);
    }
  };

  useEffect(() => {
    if (studentData) {
      setFormData(studentData);
    }
  }, [studentData]);

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50">
          <div className="relative bg-[#202020] rounded-lg shadow-lg w-full max-w-xl mx-12 ">
            {/* Loading Overlay */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 z-10 rounded-lg">
                <LoadingSpinner />
              </div>
            )}

            <div className="border-b px-4 py-3 flex justify-between items-center">
              <h2 className="text-xl font-semibold">
                {studentData ? "Edit Student" : "Add Student"}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-800 transition-colors"
              >
                ✕
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 m-4 max-h-[80vh] overflow-y-auto"
            >
              {/* Row 1 - Student No & Year Level */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="student_no"
                    className="block text-sm font-semibold text-gray-300"
                  >
                    Student No.
                  </label>
                  <input
                    type="text"
                    id="student_no"
                    value={formData.student_no}
                    onChange={handleInputChange}
                    className={`p-2 mt-1 border rounded-md w-full ${
                      errors.student_no ? "border-red-500" : ""
                    } bg-gray-300 text-gray-800 font-mono`}
                    placeholder="Enter student's number"
                    disabled={!!studentData}
                  />
                  {errors.student_no && (
                    <span className="text-red-500 text-sm">
                      {errors.student_no}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="year_level"
                    className="block text-sm font-semibold text-gray-300"
                  >
                    Year Level
                  </label>
                  <select
                    id="year_level"
                    value={formData.year_level}
                    onChange={handleInputChange}
                    className="p-2 mt-1 border rounded-md w-full bg-gray-300 text-gray-800 font-mono"
                  >
                    {[1, 2, 3, 4].map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 2 - Last Name, First Name, Middle Name */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-semibold text-gray-300"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    className={`p-2 mt-1 border rounded-md w-full ${
                      errors.last_name ? "border-red-500" : ""
                    } bg-gray-300 text-gray-800 font-mono`}
                    placeholder="Enter last name"
                  />
                  {errors.last_name && (
                    <span className="text-red-500 text-sm">
                      {errors.last_name}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-semibold text-gray-300"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    className={`p-2 mt-1 border rounded-md w-full ${
                      errors.first_name ? "border-red-500" : ""
                    } bg-gray-300 text-gray-800 font-mono`}
                    placeholder="Enter first name"
                  />
                  {errors.first_name && (
                    <span className="text-red-500 text-sm">
                      {errors.first_name}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="middle_name"
                    className="block text-sm font-semibold text-gray-300"
                  >
                    Middle Name
                  </label>
                  <input
                    type="text"
                    id="middle_name"
                    value={formData.middle_name}
                    onChange={handleInputChange}
                    className="p-2 mt-1 border rounded-md w-full bg-gray-300 text-gray-800 font-mono"
                    placeholder="Enter middle name"
                  />
                </div>
              </div>

              {/* Row 3 - Birthday, Sex, Contact No. */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="birthday"
                    className="block text-sm font-semibold text-gray-300"
                  >
                    Birthday
                  </label>
                  <input
                    type="date"
                    id="birthday"
                    value={formData.birthday.split("T")[0]}
                    onChange={handleInputChange}
                    className={`p-2 mt-1 border rounded-md w-full ${
                      errors.birthday ? "border-red-500" : ""
                    } bg-gray-300 text-gray-800 font-mono`}
                  />
                  {errors.birthday && (
                    <span className="text-red-500 text-sm">
                      {errors.birthday}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="sex"
                    className="block text-sm font-semibold text-gray-300"
                  >
                    Sex
                  </label>
                  <select
                    id="sex"
                    value={formData.sex}
                    onChange={handleInputChange}
                    className={`p-2 mt-1 border rounded-md w-full ${
                      errors.sex ? "border-red-500" : ""
                    } bg-gray-300 text-gray-800 font-mono`}
                  >
                    <option value="">Select</option>
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                  </select>
                  {errors.sex && (
                    <span className="text-red-500 text-sm">{errors.sex}</span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="contact_no"
                    className="block text-sm font-semibold text-gray-300"
                  >
                    Contact No.
                  </label>
                  <input
                    type="text"
                    id="contact_no"
                    value={formData.contact_no}
                    onChange={handleInputChange}
                    className="p-2 mt-1 border rounded-md w-full bg-gray-300 text-gray-800 font-mono"
                    placeholder="Enter contact number"
                  />
                </div>
              </div>

              <div className="mt-4 flex justify-end gap-4">
                <button
                  type="submit"
                  className="py-2 px-4 bg-blue-500 text-white rounded-md"
                >
                  {studentData ? "Save Changes" : "Add Student"}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="py-2 px-4 bg-red-500 text-white rounded-md"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
