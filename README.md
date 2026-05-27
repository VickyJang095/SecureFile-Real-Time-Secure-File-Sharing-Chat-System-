# SecureFile – Real-Time Secure File Sharing & Chat System

SecureFile is a full-stack web application designed for secure file sharing and real-time communication.  
The system allows users to upload, store, and download encrypted files while also supporting live messaging between users.

## Key Features

- Secure file upload and download
- AES-256-CBC file encryption and decryption
- Real-time chat using Socket.IO
- User authentication and authorization
- Cloud file storage with MongoDB Atlas GridFS
- Responsive and modern user interface

## Demo image
<img width="1415" height="691" alt="image" src="https://github.com/user-attachments/assets/b4df09bc-797d-4df9-805a-013a03dfeb26" />

<img width="2203" height="1079" alt="image" src="https://github.com/user-attachments/assets/c2e5ae52-6cfc-49b4-bccd-a21b9ddf5c0c" />

<img width="2204" height="1082" alt="image" src="https://github.com/user-attachments/assets/5d84b495-7b29-4e20-95b5-f02931516597" />

## Live demo: *temporary blocked

## Technologies Used

### Frontend
- React.js
- Tailwind CSS

### Backend
- Node.js
- Express.js

### Database & Storage
- MongoDB Atlas
- GridFS

### Other Technologies
- Socket.IO
- RESTful API
- AES-256-CBC Encryption
- Git & GitHub

---

# System Architecture

```text
Client (React.js)
        ↓
REST API / Socket.IO
        ↓
Server (Node.js + Express.js)
        ↓
MongoDB Atlas + GridFS
```
The frontend communicates with the backend through REST APIs and Socket.IO for real-time messaging.
Files are encrypted before being stored in MongoDB Atlas using GridFS.

Security Mechanism

SecureFile uses AES-256-CBC encryption to protect uploaded files.

- Encryption Flow
- User uploads a file
- Server encrypts the file using AES-256-CBC
- Encrypted file is stored in MongoDB GridFS
- When downloading, the server decrypts the file before sending it back
- Security Goals
- Data Confidentiality
- Secure File Storage
- User Authentication
- Basic Access Control
- Main Features
- File Management
- Upload files securely
- Download encrypted files
Manage personal files
Real-Time Chat
Instant messaging between users
Real-time communication with Socket.IO
Authentication
User registration and login
Protected API routes

# Project Structure
```
SecureFile/
│
├── client/        # React frontend
├── server/        # Node.js backend
├── test-api.js    # API testing
└── README.md
```
# Installation & Setup
Clone Repository
```
git clone https://github.com/VickyJang095/SecureFile-Real-Time-Secure-File-Sharing-Chat-System-.git
```
Install Dependencies
```
npm install
cd server && npm install
cd ../client && npm install
Configure Environment Variables

Create .env file inside server/

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
PORT=5000
```
Run Backend
```
cd server
npm start
```
Run Frontend
```
cd client
npm start
```
# Learning Outcomes

Through this project, we gained practical experience in:

Full-stack web development
RESTful API development
Real-time communication systems
File encryption and secure storage
MongoDB Atlas & GridFS
Team collaboration using GitHub
Future Improvements
End-to-end encrypted chat
File sharing permissions
Cloud deployment
Better access control system
Group chat support
Authors
VickyJang095 : hoangminhngoc.tnhp@gmail.com
longlonhh
