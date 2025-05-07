import mongoose from 'mongoose'
import {configDotenv} from "dotenv";

configDotenv()

export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
    }
    catch (error) {
        console.error(error);
    }
}