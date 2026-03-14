import dotenv from 'dotenv'
import mongoose from 'mongoose';
dotenv.config();

export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected");
        
    } catch (error) {
        console.log("Error on Database connection",error);
    }
}