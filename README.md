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

## Features

### Student Management:

- **View Students**: Filter and view students based on year level.
  ![Screenshot](https://raw.githubusercontent.com/NjayGaringarao/cc105-FInal_Project/main/github/read.png)

- **Add Students**: Register students with basic details such as Student Number, Name, Year Level, Contact Info, etc.
  ![Screenshot](https://raw.githubusercontent.com/NjayGaringarao/cc105-FInal_Project/main/github/add.png)

- **Edit Students**: Modify student details, including name, year level, and contact info.
  ![Screenshot](https://raw.githubusercontent.com/NjayGaringarao/cc105-FInal_Project/main/github/edit.png)

- **Delete Students**: Remove student records from the system.
  ![Screenshot](https://raw.githubusercontent.com/NjayGaringarao/cc105-FInal_Project/main/github/delete.png)

---

### Responsive Design:

- The project is designed to be fully responsive, ensuring that it works seamlessly across mobile, tablet, and desktop devices.

**Mobile**

<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
  <img src="https://raw.githubusercontent.com/NjayGaringarao/cc105-FInal_Project/main/github/mread.jpg" width="48%" />
  <img src="https://raw.githubusercontent.com/NjayGaringarao/cc105-FInal_Project/main/github/madd.jpg" width="48%" />
  <img src="https://raw.githubusercontent.com/NjayGaringarao/cc105-FInal_Project/main/github/medit.jpg" width="48%" />
  <img src="https://raw.githubusercontent.com/NjayGaringarao/cc105-FInal_Project/main/github/mdelete.jpg" width="48%" />
</div>

## Setup

### Prerequisites

Before you begin, make sure you have the following installed:

- [XAMPP](https://www.apachefriends.org/) or a compatible database
- [Node.js](https://nodejs.org/) (v14 or later)
- [Git](https://git-scm.com/) required in cloning this repository
- [Visual Studio Code](https://code.visualstudio.com/) or other source code editor

---

### Backend Installation (XAMPP)

To set up the backend using XAMPP, follow these steps:

1. **Install and Configure XAMPP**

   - Download and install XAMPP from the [official website](https://www.apachefriends.org/) if not installed.
   - Launch XAMPP and start the **Apache** and **MySQL** services.

2. **Create the Database**

   - Open [phpMyAdmin](http://localhost/phpmyadmin) in your browser.
   - Click on **"New"** in the left-hand sidebar to create a new database.
   - Name the database `BSCS_Student` (or the name you specified in the `.env` file).
   - Click **Create**.

3. **Import the Database Schema**
   - Download [BSCS_Student.zip](https://raw.githubusercontent.com/NjayGaringarao/cc105-FInal_Project/main/github/BSCS_Student.zip) and extract the BSCS_Student.sql file.
   - In phpMyAdmin, select the `BSCS_Student` database.
   - Click **Import** in the top menu.
   - Choose the `BSCS_Student.sql` file from download directory and click **Go** to import the schema and initial data.

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

## API Endpoints

The following API endpoints are available in the project:

### GET `/api/students`

Fetch all students by year level.

- Query Parameter: `yearLevel` (integer)

---

### POST `/api/students`

Add a new student.

- Request Body: JSON object with student data (e.g., student_no, last_name, first_name, etc.)

---

### PUT `/api/students`

Update an existing student's details.

- Request Body: JSON object with student data (e.g., student_no, last_name, first_name, etc.)

---

### DELETE `/api/students`

Delete a student by student number.

- Request Body: JSON object with the student number to delete.

## Folder Structure

- `.next/`: Contains NextJS Frameworks Essentials.
- `.github/`: Contains essential files for README.md.
- `lib/`: Contains database-related functions.
- `public/`: Static files like images and icons.
- `src/`: Contains the Source Code.

## License

This project is licensed under the [Creative Commons Attribution-NonCommercial-NoDerivatives (CC BY-NC-ND) 4.0 International License](https://raw.githubusercontent.com/NjayGaringarao/cc105-FInal_Project/main/LICENSE).
