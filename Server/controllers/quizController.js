import Quiz from "../models/Quiz.js"

export const getQuiz=async(req,res,next)=>{

    try{
        const quiz=Quiz.findById(req.params.id);
        res.status(200).json(quiz);
        
    }catch(error){res.status(500).json("Something went wrong!")}

    
}
export const createQuiz= async (req,res,next)=>{
    const newQuiz= new Quiz(req.body);
    try{
        const savedQuiz=await newQuiz.save();
        res.status(200).json(savedQuiz);

    }catch(error){res.status(500).json("Something went wrong!")};

}
export const deleteQuiz=async(req,res,next)=>{

    try{
        await Quiz.findByIdAndDelete(req.params.id);
        res.status(200).json("Quiz has been deleted!");
    }catch (error){res.status(500).json("Something went wrong!")}
}
export const updateQuiz=async (req,res,next)=>{
    
    try{
        const quiz= await Quiz.findById(req.params.id);
        await quiz.updateOne({$set:req.body});
        res.status(200).json("Quiz has been updated!")
    }catch(error){res.status(500).json("Something went wrong!")}
    
    
}

export const getAllQuizzes=async(req,res,next)=>{
    
    try{
        const Quizzes=await Quiz.find();
        res.status(200).json(Quizzes);
        
    }catch(error){res.status(500).json("Something went wrong!")}

    
}