import mongoose, { mongo } from "mongoose";


const MONGODB_URL =  process.env.MONGODB_URI;

let isConnected = false


async function  dbConnect(){
    if(isConnected){
        console.log("Mongodb is already connected");
        return
    }

    try {
        const db = await mongoose.connect(MONGODB_URL);
        isConnected =  db.connections[0].readyState === 1;
        console.log("Database connected successfully",db)
    } catch (error) {
        console.error("database connection error",error);
        throw error
    }
}

export default dbConnect;