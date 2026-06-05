# 📄 AI-Powered Resume Analyzer & Job Tracking System (Backend)

## 🚀 Overview
This is a backend system for an AI-powered Resume Analyzer and Job Tracking application. It provides secure authentication, resume upload and parsing, AI-based resume analysis using Groq API, and a structured job application tracking system.

The system is designed using a modular REST API architecture and can be integrated with any frontend or client application.

---

## ⚙️ Features

### 🔐 Authentication System
- User registration and login
- Password hashing using bcrypt
- JWT-based authentication
- Protected routes using middleware

---

### 📄 Resume Processing
- Upload resume in PDF format
- File handling using Multer
- Extract text using pdf-parse
- Preprocess extracted resume content

---

### 🧠 AI Resume Analysis (Groq API)
- Resume text is analyzed using Groq LLM API
- Extracts key skills from resume
- Provides resume quality feedback
- Suggests improvements for better job matching

---

### 📊 Job Tracking System
- Add new job applications
- Update job status (Applied, Interview, Offer, Rejected)
- Delete job applications
- Fetch all jobs for authenticated user
- User-specific job isolation

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt
- Multer
- pdf-parse
- Groq API (LLM integration)

---


---

## 🔁 API Endpoints

### Auth Routes
- POST `/api/auth/register` → Register user
- POST `/api/auth/login` → Login user

### Resume Routes (Protected)
- POST `/api/resume/upload` → Upload and analyze resume

### Job Routes (Protected)
- POST `/api/jobs` → Create job
- GET `/api/jobs` → Get all jobs
- PUT `/api/jobs/:id` → Update job
- DELETE `/api/jobs/:id` → Delete job

---
```md
ARCHITECTURE


Client / API Request
↓
Express Server
↓
JWT Authentication Middleware
↓
Controllers Layer
├── Auth Controller
├── Resume Controller
└── Job Controller
↓
Service Layer
├── Auth Service (JWT + bcrypt)
├── Resume Service
│ ├── pdf-parse (extract text)
│ └── Groq AI API (analysis)
└── Job Service (CRUD operations)
↓
MongoDB Database
├── Users Collection
└── Jobs Collection

## 🔁 System Workflow

### 1. Authentication Flow
- User registers or logs in
- Server validates credentials
- JWT token is generated and returned
- Token is used for accessing protected routes

---

### 2. Resume Analysis Flow
- User uploads PDF resume
- Server extracts text using pdf-parse
- Extracted text is sent to Groq AI API
- AI returns:
  - Skills
  - Resume feedback
  - Improvement suggestions
- Structured response is sent to client

---

### 3. Job Tracking Flow
- User creates job entry
- Job is stored in MongoDB with userId
- User can update job status
- User can delete or fetch jobs
- Each operation is authenticated via JWT
