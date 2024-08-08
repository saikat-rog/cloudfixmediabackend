import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connected with the Database");
    } catch (error) {
        console.log(`Could not connect to the database. error:${error}`);
        process.exit(0);
    }
}

export default connectDb;