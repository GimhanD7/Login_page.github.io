import User from "../models/User.js";

export const getUser =async(req,res)=>{
    try{
        const {id}=req.params;
        const user =await User.findById(id);
        request.status(200).json(user);
    }catch(error){
        res.status(404).json({massage:error.massage});
    }
}