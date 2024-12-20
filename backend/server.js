import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from '../backend/routes/auth.routes.js'; // Note the '.js' extension
import connectToMongoDB from './db/connectToMongoDB.js';
import messageRoutes from '../backend/routes/message.routes.js'; // Note the '.js' extension
import userRoute from '../backend/routes/user.routes.js'

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;

// Middleware

app.use(cors({
  origin: "http://localhost:3000", // Specify the frontend URL
  credentials: true,               // Enable cookies and credentials
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users" ,userRoute )


// Start the server
app.listen(PORT, () => {
  connectToMongoDB(); 
  console.log(`Server running on port ${PORT}`);
});
