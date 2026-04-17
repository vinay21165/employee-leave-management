# 🏢 Employee Leave Management System

A full-stack web application to manage employee leave requests with a modern UI and scalable backend architecture.

---

## 🚀 Project Overview

This project allows employees to:

* 🔐 Login securely
* 📝 Submit leave requests
* ✅ View confirmation of submitted leaves

The application is built using a **React frontend** and a **Spring Boot backend**, following RESTful architecture and industry best practices.

---

## 🛠 Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios

### Backend

* Spring Boot (Java)
* REST API
* Maven

### Database

* MySQL (for storing leave data)

---

## 📂 Project Structure

```
employee-leave-management/
 ├── frontend/   # React Application
 └── backend/    # Spring Boot Application
```

---

## ✨ Features

* Employee Login Authentication
* Leave Application Form
* API Integration (React ↔ Spring Boot)
* Responsive UI (Mobile + Desktop)
* Data stored in MySQL Database

---

## ▶️ How to Run the Project

### 🔹 Frontend Setup

```bash
cd frontend
npm install
npm start
```

Runs on:

```
http://localhost:3000
```

---

### 🔹 Backend Setup

```bash
cd backend
mvn spring-boot:run
```

Runs on:

```
http://localhost:8081
```

---

### 🔹 Database Setup (MySQL)

```sql
CREATE DATABASE leave_db;
```

Update credentials in:

```
backend/src/main/resources/application.properties
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description          |
| ------ | -------- | -------------------- |
| POST   | `/login` | Authenticate user    |
| POST   | `/leave` | Submit leave request |

---

## 📸 Screenshots

### 🔹 Login Page
![Login](frontend/public/screenshots/login.png)

### 🔹 Leave Form
![Leave](frontend/public/screenshots/leave-form-ui.png)

### 🔹 Confirmation Page
![Confirm](frontend/public/screenshots/confirmation.png)
---

## 💼 Key Highlights

* Full-stack development (Frontend + Backend)
* RESTful API design
* Clean code structure (MVC architecture)
* Real-world project suitable for interviews

---

## 👨‍💻 Author

**Vinay Yadav**
GitHub: https://github.com/vinay21165

---

## 🚀 Future Enhancements

* JWT Authentication 🔐
* Admin Dashboard 📊
* Leave History Tracking 📁
* Deployment (Cloud Hosting) 🌐

---

## ⭐ Conclusion

This project demonstrates practical implementation of a full-stack system using modern technologies and is designed to be scalable, maintainable, and production-ready.

---

👉 If you like this project, don’t forget to ⭐ the repository!
