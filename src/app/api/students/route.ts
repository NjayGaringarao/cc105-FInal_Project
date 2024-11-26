import { StudentData } from "@/constant/types";
import { createConnection } from "../../../../lib/mariaDB";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const yearLevel = parseInt(url.searchParams.get("yearLevel") || "0", 10);

    if (isNaN(yearLevel) || yearLevel < 1) {
      return NextResponse.json(
        { error: "Invalid yearLevel parameter" },
        { status: 400 }
      );
    }

    const db = await createConnection();
    const sql = `SELECT * FROM Student WHERE year_level = ?`;
    const [students] = await db.query(sql, [yearLevel]);

    return NextResponse.json(students);
  } catch (error) {
    console.log(`Error in api/route/GET ${error}`);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const studentData: StudentData = await request.json();

    if (
      !studentData.student_no ||
      !studentData.last_name ||
      !studentData.first_name ||
      !studentData.year_level ||
      !studentData.birthday ||
      !studentData.sex
    ) {
      return NextResponse.json(
        { error: "Missing required fields in student data" },
        { status: 400 }
      );
    }

    const db = await createConnection();

    const sql = `
      INSERT INTO Student 
      (student_no, last_name, first_name, middle_name, year_level, birthday, sex, contact_no) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      studentData.student_no,
      studentData.last_name,
      studentData.first_name,
      studentData.middle_name,
      studentData.year_level,
      studentData.birthday,
      studentData.sex,
      studentData.contact_no,
    ];

    const [result] = await db.query(sql, values);

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error(`Error in api/route/POST: ${error}`);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const studentData: StudentData = await request.json();

    if (
      !studentData.student_no ||
      !studentData.last_name ||
      !studentData.first_name ||
      !studentData.year_level ||
      !studentData.birthday ||
      !studentData.sex
    ) {
      return NextResponse.json(
        { error: "Missing required fields in student data" },
        { status: 400 }
      );
    }

    const db = await createConnection();

    const sql = `
      UPDATE Student
      SET last_name = ?, first_name = ?, middle_name = ?, year_level = ?, birthday = ?, sex = ?, contact_no = ?
      WHERE student_no = ?
    `;
    const values = [
      studentData.last_name,
      studentData.first_name,
      studentData.middle_name,
      studentData.year_level,
      studentData.birthday.split("Z")[0],
      studentData.sex,
      studentData.contact_no,
      studentData.student_no,
    ];

    const [result] = await db.query(sql, values);

    const affectedRows = (result as any).affectedRows;

    if (affectedRows === 0) {
      return NextResponse.json(
        { error: "Student not found or no changes made" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error(`Error in api/route/PUT: ${error}`);
    return NextResponse.json(
      { error: error || "Internal Server Error" },
      { status: 500 }
    );
  }
}
