# Auth API - Node.js

**Basic authentication API** built while learning backend development.

## Tech Stack
- Node.js
- Express
- bcrypt
- jsonwebtoken

## Project Structure
src/ ├── controllers/ ├── routes/ └── app.js

## Endpoints
Register POST /register Body JSON: { "email": "example@test.com", "password": "123456" } Responses: 200 → { "message": "User registered" } 400 → { "error": "Email and password required" } Login POST /login Body JSON: { "email": "example@test.com", "password": "123456" } Responses: 200 → { "token": "JWT_TOKEN" } 400 → { "error": "User not found" } 400 → { "error": "Invalid credentials" }

How to Run Install dependencies: npm install Start server (dev mode): npm run dev Use a REST client like Thunder Client or Postman to test endpoints.

Purpose This project demonstrates: Basic user authentication Password hashing with bcrypt Token generation with JWT Backend project structure

Author: Luciano Bento
