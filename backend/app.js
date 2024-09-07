import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);

mongoose.connect('mongodb+srv://sharmagauravxo:1UJgSEBGyRT9WcLo@cluster0.66dx9.mongodb.net/')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

const PORT =  5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;