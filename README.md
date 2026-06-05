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

## 🏗️ Architecture
Client (API / Frontend)
↓
Express Routes
↓
Middleware (JWT Auth)
↓
Controllers
↓
Services
├── Resume Parser (pdf-parse)
├── AI Service (Groq API)
└── Job Service (CRUD)
↓
MongoDB (Database)

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

## 🔐 Environment Variables
Create a `.env` file in the root directory:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GROQ_API_KEY=your_groq_api_key
---

## 📦 Installation

```bash
git clone https://github.com/tanushka509/AI-powered-Resume-Analayzer-and-Job-tracking-website.git
cd AI-powered-Resume-Analayzer-and-Job-tracking-website
npm install
npm run dev
---

## 🧠 Key Learnings
- Implemented JWT-based authentication system  
- Built a secure file upload and processing pipeline using Multer  
- Integrated LLM (Groq API) for resume analysis and insights  
- Designed modular backend architecture using REST APIs  
- Built a real-world job tracking CRUD system with user-level data isolation  

---

## 🚀 Future Improvements
- Add resume scoring system (ATS score)  
- Support DOCX and TXT resume formats  
- Add a caching layer for AI responses to reduce API cost and latency  
- Improve prompt engineering for more accurate AI outputs  
- Add Docker support for containerized deployment  
