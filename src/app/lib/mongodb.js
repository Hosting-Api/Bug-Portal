//  src/app/lib/mongodb.js
import mongoose from "mongoose";

const uri = process.env.MONGODB_URI

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB !");
    } catch (error) {
        console.log("Error connecting MongoDB :",error);
    }
};
