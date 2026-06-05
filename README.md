📄 AI-Powered Resume Analyzer & Job Tracking System (Backend)
🚀 Overview

This project is a backend system designed for an AI-powered Resume Analyzer and Job Tracking application. It provides secure authentication, resume parsing, AI-based resume evaluation using Groq LLM API, and a structured job application tracking system.

The system is built with a modular backend architecture and can be integrated with any frontend or client application.

⚙️ System Features
🔐 Authentication & Security
User registration and login system
Password hashing using bcrypt
JWT-based authentication
Protected routes using middleware
Token verification for secure API access
📄 Resume Processing Pipeline
Upload resume files (PDF format)
File handling using Multer
Extract text content using pdf-parse
Preprocessing of extracted resume data before AI inference
🧠 AI-Powered Resume Analysis (Groq API)
Integration with Groq LLM API for resume evaluation
AI processes extracted resume text and returns:
Skill extraction
Resume quality analysis
Job readiness assessment
Improvement suggestions
Structured response parsing for frontend consumption
📊 Job Tracking System
Create job applications
Update job status (Applied → Interview → Offer → Rejected)
Delete job applications
Retrieve all jobs per authenticated user
User-specific job isolation using JWT authentication
🛠️ Tech Stack
Backend Framework: Node.js, Express.js
Database: MongoDB (Mongoose ODM)
Authentication: JWT, bcrypt
File Upload Handling: Multer
PDF Parsing: pdf-parse
AI Integration: Groq API (LLM inference)
Architecture Style: RESTful API, Modular MVC structure
🏗️ Architecture Design
Client Request
     ↓
Express Router Layer
     ↓
Controller Layer
     ↓
Middleware Layer (JWT Auth Validation)
     ↓
Service Layer
   ├── Resume Parser (pdf-parse)
   ├── AI Service (Groq API Integration)
   └── Job Service (CRUD logic)
     ↓
MongoDB (User + Jobs Collections)
🔁 Core Workflows
1. Authentication Flow
User registers → password hashed → stored in MongoDB
User logs in → JWT token generated
Token attached to protected API requests
Middleware validates token before route execution
2. Resume Analysis Flow
User uploads PDF resume
Server extracts raw text using pdf-parse
Extracted text is sent to Groq LLM API
AI returns structured evaluation:
Skills
Feedback
Resume strengths & weaknesses
Response is returned to client
3. Job Tracking Flow
User creates job entry → stored in MongoDB
User updates job status via job ID
User deletes job entries
Jobs are always scoped to authenticated user
📌 API Endpoints
🔐 Auth Routes
POST /api/auth/register → Register user
POST /api/auth/login → Login user
📄 Resume Routes
POST /api/resume/upload → Upload and analyze resume (Protected)
📊 Job Routes (Protected)
POST /api/jobs → Create job application
GET /api/jobs → Fetch all jobs for user
PUT /api/jobs/:id → Update job status/details
DELETE /api/jobs/:id → Delete job
🧠 Key Engineering Highlights
Designed modular REST API architecture
Implemented stateless authentication using JWT
Built secure file upload + parsing pipeline
Integrated LLM-based AI processing (Groq API)
Designed multi-entity system (Users + Jobs + Resume analysis)
Ensured user-level data isolation in MongoDB
🗄️ Database Design (MongoDB)
Users Collection
name
email
password (hashed)
Jobs Collection
userId (reference)
companyName
role
status
appliedDate
🔐 Environment Variables
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
GROQ_API_KEY=your_groq_api_key
📦 Installation & Setup
# Clone repository
git clone https://github.com/tanushka509/AI-powered-Resume-Analayzer-and-Job-tracking-website.git

# Move into directory
cd AI-powered-Resume-Analayzer-and-Job-tracking-website

# Install dependencies
npm install

# Start development server
npm run dev
🚀 Future Improvements
Add caching layer for AI responses
Implement rate limiting & API throttling
Add resume versioning system
Improve AI prompt engineering for better scoring accuracy
Add WebSocket-based real-time job updates
Dockerize backend for deployment
👨‍💻 Author

Tanushka Das
GitHub: https://github.com/tanushka509

⭐ Project Status

✔ Backend Completed
✔ Production-ready architecture design
⏳ Frontend integration (optional)
