const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('../backend/routes/auth.routes')
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/chatapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

app.use(cors());
app.use("/api/auth" , authRoutes);
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
