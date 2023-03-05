import mongoose from "mongoose";
export const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please enter a unique Username"],
        unique:[true,"Username Exist"]
    },
    password:{
        type:String,
        required:[true,"Please enter a password"],
        unique:false
    },
    email:{
        type:String,
        required:[true,"Please enter unique email address"],
        unique:[true,"Email Exist"]
    },
    firstName:{type:String},
    lastName:{type:String},
    mobileNumber:{type:String},
    address:{type:String},
    profile:{type:String},
});

export default mongoose.model.Users || mongoose.model("User",UserSchema);