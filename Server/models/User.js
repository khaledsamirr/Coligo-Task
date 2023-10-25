import mongoose from "mongoose";


const {Schema} = mongoose;

  // to be completed later (not specified on the task).
const userSchema= new Schema(
    {
        username:{
            type: String,
             required: true,
            unique:true,
        },
        img:{
            type: String,
            required: true,
        },
    },
 

    // to be completed later (not specified on the task).


)

export default mongoose.model("User",userSchema);
