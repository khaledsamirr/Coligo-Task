import Announcement from "../models/Announcement.js"
import User from "../models/User.js";

export const getAnnouncement=async(req,res,next)=>{

    try{
        const announcement=Announcement.findById(req.params.id);
        res.status(200).json(announcement);
        
    }catch(error){res.status(500).json("Something went wrong!")}

    
}
export const createAnnouncement= async (req,res,next)=>{


    try{

        const user=User.findById();
        if(!user) return res.status(400).json("Can't find the user");
        const newAnnouncement= new Announcement({
            userId:req.userId,
            img:user.img,
            ...req.body,
        })
        const savedAnnouncement=await newAnnouncement.save();
        res.status(201).json(savedAnnouncement);

    }catch(error){res.status(500).json("Something went wrong!")};

}
export const deleteAnnouncement=async(req,res,next)=>{

    try{
        await Announcement.findByIdAndDelete(req.params.id);
        res.status(200).json("Announcement has been deleted!");
    }catch (error){res.status(500).json("Something went wrong!")}
}
export const updateAnnouncement=async (req,res,next)=>{
    
    try{
        const announcement= await Announcement.findById(req.params.id);
        await announcement.updateOne({$set:req.body});
        res.status(200).json("Announcement has been updated!")
    }catch(error){res.status(500).json("Something went wrong!")}
    
    
}

export const getAllAnnouncements=async (req,res,next)=>{
    
    try{
        const announcements=await Announcement.find();
        res.status(200).json(announcements);
        
    }catch(error){res.status(500).json("Something went wrong!")}

    
}