import UserModel from "../model/User.model.js";
import bcrypt from 'bcrypt';

//POST:http://localhost:8080/api/register
/**
 {"username":"example123",
 "password":"admin123",
 "email":"example123@example.com",
 "firstName":"Gimhana",
 "lastName":"Deshapriya",
 "mobile":0768582057,
 "address":"257,dompe",
 "profile":""}
 */
export async function register(req,res){
//    res.json('register routes');
    try {
        const {username,password,profile,email}=req.body;

        //check ifexistinguser is already
        const existUsername =new Promise((resolve,reject)=>{
            UserModel.findOne({username},function(err,user){
                if(err)reject(new Error(err))
                if(user) reject({error :"Please enter unique username"});

                resolve();
            })
        });

        //check if existing email is already
        const existEmail = new Promise((resolve,reject)=>{
            UserModel.findOne({email},function(err,email){
                if(err)reject(new Error(err))
                if(email) reject({error :"Please enter unique email"});
            
                resolve();
            })
        });

        Promise.all([existUsername, existEmail])
                .then(()=>{
                        if(password){
                            bcrypt.hash(password,10)
                            .then(hashedPassword=>{

                                const user =new UserModel({
                                    username ,
                                    password :hashedPassword,
                                    profile :profile || "",
                                    email 
                                });
                                //return save result as a response
                                user.save()
                                    .then(result=> res.status(201).send({msg:"User Register Successfully"}))
                                     .catch(error=> res.status(500).send({error}))
                            }).catch(error=>{
                                return res.status(500).send({
                                    error:"Enable to hashed password"
                                })
                            })

                        }
                }).catch(error=>{
                    return res.status(500).send({error })
                })



    } catch (error) {
        return res.status(500).send(error);
    }

}




//POST:http://localhost:8080/api/login
export async function login(req,res){
    res.json('login routes');
 }


 //GET:http://localhost:8080/api/users/example123
 export async function getUser(req,res){
    res.json('getUser routes');
 }


 //PUT:http://localhost:8080/api/updateUser
 export async function updateUser(req,res){
    res.json('updateUser routes');
 }


 //GET:http://localhost:8080/api/generateOTP
 export async function generateOTP(req,res){
    res.json('generateOTP routes');
 }


 //GET:http://localhost:8080/api/verifyOTP
 export async function verifyOTP(req,res){
    res.json('verifyOTP routes');
 }

//successfully redirect user when OTP is valid
 //GET:http://localhost:8080/api/cerateResetSession
 export async function cerateResetSession(req,res){
    res.json('verifyOTP routes');
 }

 //update the password when we have valid session
 //PUT:http://localhost:8080/api/resetPassword
 export async function resetPassword(req,res){
    res.json('resetPassword routes');
 }


 
