import User from "../models/User.js";


export const getUser= async (req,res)=>{
    try{
        const user= await User.findById(req.params.id);
        res.status(200).json(user);

    }catch(error){res.status(500).json("Something went wrong!")}
}

export const createUser= async (req,res)=>{

    const newUser = new User(req.body);

    try{

        const savedUser=await newUser.save();

        res.status(201).json(savedUser);

    }catch(error){res.status(500).json("Something went wrong!")};

}
