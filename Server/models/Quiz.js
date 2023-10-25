import mongoose from "mongoose";

const {Schema} = mongoose;

const quizSchema= new Schema(
    {
        title:{
            type:String,
            required:true,
        },
        course:{
            type:String,
            required:true,
        },
        topic:{
            type: String,
             required: true,
        },
        dueTo:{
            type:Date,
            required:true,
        },
        isAssignment:{
            type:Boolean,
            required:true,
        }
        
    },
  

)

export default mongoose.model("Quiz",quizSchema);