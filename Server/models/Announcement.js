import mongoose from "mongoose";



const {Schema} = mongoose;

const announcementSchema= new Schema({
        
    userId:{
        type: String,
        required:true,
    },
    announcement:{
        type: String,
        required:true,
    },
    title:{
        type: String,
        required:true
    },
    img:{
        type:String
    }
        
},


)

export default mongoose.model("Announcement",announcementSchema);