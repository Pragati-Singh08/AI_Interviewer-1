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

### Running with Docker

You can run the entire stack using Docker Compose:

1. Create a root `.env` file with the following variables:
   ```env
   MONGO_DB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   VITE_GOOGLE_CLIENT_ID=your_google_client_id
   ```
2. Build and start the containers:
   ```bash
   docker-compose up --build
   ```
The app will be available at `http://localhost:5173`.

## Deployment

### Railway Deployment
1. Connect your GitHub repository to Railway.
2. Railway will detect the multiple services. You can set up each one by specifying the path to its `Dockerfile`.
3. Ensure you set the environment variables in the Railway dashboard for each service.

### AWS Deployment
You can use **AWS App Runner** or **ECS (Elastic Container Service)**:
1. Push your Docker images to **AWS ECR (Elastic Container Registry)**.
2. Create services in App Runner or ECS pointing to these images.
3. Configure the load balancer and environment variables accordingly.

