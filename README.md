# AI Interviewer

An AI-powered technical interviewer application.

## Project Structure

- **Frontend**: React/Vite application for the user interface.
- **Backend**: Node.js/Express server handling authentication and sessions.
- **ai_Service**: Python FastAPI microservice for AI question generation and evaluation.

## Getting Started

### Prerequisites
- Node.js
- Python 3.12+
- MongoDB

### Installation
1. Clone the repository.
2. Set up environment variables in each service (`Frontend/AI INTERVIEW/.env`, `backend/.env`, `ai_Service/.env`).
3. Install dependencies:
   - Frontend: `cd "Frontend/AI INTERVIEW" && npm install`
   - Backend: `cd backend && npm install`
   - AI Service: `cd ai_Service && pip install -r requirements.txt`

### Running the App
- Frontend: `npm run dev` (in Frontend directory)
- Backend: `npm run dev` (in backend directory)
- AI Service: `uvicorn main:app --reload` (in ai_Service directory)
