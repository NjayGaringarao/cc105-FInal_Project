# BSCS Database

## Overview

This project is an Information Management System (IMS) developed with a focus on handling student data efficiently. The system allows for CRUD operations (Create, Read, Update, Delete) on student records and provides functionalities such as:

- Student registration and profile management.
- Viewing student information based on year levels.
- Real-time updates to student data.
- Integration with backend services (MariaDB, Appwrite, etc.)

### Technologies Used:

- **Frontend**: React (Next.js), Tailwind CSS
- **Backend**: Node.js, MariaDB, Appwrite (for cloud functions)
- **Database**: MariaDB for storing student data
- **Authentication**: Appwrite for managing users and sessions
- **Styling**: Tailwind CSS for responsive and clean UI design

---

## Features

### Student Management:

- **Add Students**: Register students with basic details such as Student Number, Name, Year Level, Contact Info, etc.
- **Edit Students**: Modify student details, including name, year level, and contact info.
- **View Students**: Filter and view students based on year level.
- **Delete Students**: Remove student records from the system.

### Real-Time Data:

- The system utilizes Appwrite to handle user authentication and manage notifications, ensuring that the data is kept in sync across multiple clients.

### Responsive Design:

- The project is designed to be fully responsive, ensuring that it works seamlessly across mobile, tablet, and desktop devices.

---

## Setup

### Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [XAMPP](https://www.apachefriends.org/) or a compatible database

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/NjayGaringarao/cc105-FInal_Project
   cd information-management
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables by creating a `.env` file. Ensure you configure the database connection and Appwrite API keys:

   ```bash
   DB_HOST=<your-database-host>
   DB_USER=<your-database-user>
   DB_PASS=<your-database-password>
   APPWRITE_API_KEY=<your-appwrite-api-key>
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
