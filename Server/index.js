import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from"./routes/userRoute.js"
import announcementRoute from "./routes/announcementRoute.js";
import quizRoute from "./routes/quizRoute.js";
import bodyParser from 'body-parser';
import cors from "cors";

const app=express();
dotenv.config();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

const connect= async ()=>{
    
try{
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Database is connected")

}catch(error){
    console.log(error)
}
}

app.use("/api/user",userRoute);
app.use("/api/announcement",announcementRoute);
app.use("/api/quiz",quizRoute);



app.listen(8800,()=>{
    connect();
    console.log("Backend server is running!")

})