import User from "../models/User.js";


export const getUser= async (req,res)=>{
    try{
        const user= await User.findById(req.params.id);
        res.status(200).json(user);

    }catch(error){res.status(500).json("Something went wrong!")}
}

export const createUser= async (req,res)=>{
    console.log(req.body)
    const newUser = new User(req.body);
    console.log(newUser)
    try{
        console.log("hi i")
        const savedUser=await newUser.save();
        console.log("hi bye")
        res.status(201).json(savedUser);

    }catch(error){res.status(500).json("Something went wrong!")};

}