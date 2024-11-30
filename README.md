# BSCS Database

## Overview

This project is an Information Management System (IMS) developed with a focus on handling student data efficiently. The system allows for CRUD operations (Create, Read, Update, Delete) on student records and provides functionalities such as:

- Viewing student information based on year levels.
- Real-time updates to student data.
- Integration with backend services (XAMPP)
- Integration with modern Web Frameworks (NextJS)

### Technologies Used:

- **Operating System**: Ubuntu
- **Frontend**: React (Next.js), Tailwind CSS
- **Backend**: XAMPP
- **Database**: MariaDB for storing student data
- **Styling**: Tailwind CSS for responsive and clean UI design

---

## Features

### Student Management:

- **Add Students**: Register students with basic details such as Student Number, Name, Year Level, Contact Info, etc.
- **Edit Students**: Modify student details, including name, year level, and contact info.
- **View Students**: Filter and view students based on year level.
- **Delete Students**: Remove student records from the system.

### Responsive Design:

- The project is designed to be fully responsive, ensuring that it works seamlessly across mobile, tablet, and desktop devices.

---

## Setup

### Prerequisites

Before you begin, make sure you have the following installed:

- [XAMPP](https://www.apachefriends.org/) or a compatible database
- [Node.js](https://nodejs.org/) (v14 or later)
- [Git] (https://git-scm.com/) required in cloning this repository
- [Visual Studio Code](https://code.visualstudio.com/) or other source code editor

### Backend Installation (XAMPP)

To set up the backend using XAMPP, follow these steps:

---

1. **Install and Configure XAMPP**
   - Download and install XAMPP from the [official website](https://www.apachefriends.org/) if not installed.
   - Launch XAMPP and start the **Apache** and **MySQL** services.

---

2. **Create the Database**
   1. Open [phpMyAdmin](http://localhost/phpmyadmin) in your browser.
   2. Click on **"New"** in the left-hand sidebar to create a new database.
   3. Name the database `BSCS_Student` (or the name you specified in the `.env` file).
   4. Click **Create**.

---

3. **Import the Database Schema**
   1. Download [BSCS_Student.zip](https://raw.githubusercontent.com/NjayGaringarao/cc105-FInal_Project/main/github/BSCS_Student.zip) and extract the BSCS_Student.sql file.
   2. Navigate to the `database/` folder in the project directory where the SQL schema file (e.g., `bscs_student.sql`) is located.
   3. In phpMyAdmin, select the `BSCS_Student` database.
   4. Click **Import** in the top menu.
   5. Choose the `BSCS_Student.sql` file from download directory and click **Go** to import the schema and initial data.

---

### Frontend Installation (NextJS)

1. Clone this repository:

   ```bash
   git clone https://github.com/NjayGaringarao/cc105-FInal_Project
   cd information-management
   ```

   Alternatively, if you are using VSCode, you can clone this repository using its clone repository functions.

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables by creating a `.env` file. Ensure you configure the database connection. Below are the examples:

   ```bash
   DATABASE_HOST="localhost"
   DATABASE_USER="root"
   DATABASE_PASSWORD=""
   DATABASE_NAME="BSCS_Student"
   DATABASE_PORT=3306
   DATABASE_SOCKET="/opt/lampp/var/mysql/mysql.sock" #Adjust as per OS. Example is for Ubuntu.
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Visit the application in your browser at `http://localhost:3000`.

---

## API Endpoints

The following API endpoints are available in the project:

### GET `/api/students`

Fetch all students by year level.

- Query Parameter: `yearLevel` (integer)

### POST `/api/students`

Add a new student.

- Request Body: JSON object with student data (e.g., student_no, last_name, first_name, etc.)

### PUT `/api/students`

Update an existing student's details.

- Request Body: JSON object with student data (e.g., student_no, last_name, first_name, etc.)

### DELETE `/api/students`

Delete a student by student number.

- Request Body: JSON object with the student number to delete.

---

## Folder Structure

- `pages/`: Contains the main pages of the app (Next.js pages).
- `components/`: Contains reusable React components.
- `lib/`: Contains database-related functions and Appwrite interactions.
- `public/`: Static files like images and icons.
- `styles/`: Tailwind CSS configurations.

---

## License

This project is licensed under the MIT License.

---
