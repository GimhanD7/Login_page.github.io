import  Router  from "express";
const router=Router();


//input all controllers
import * as controller from '../controllers/appController.js'
//post Methods
router.route('/register').post(controller.register);//register user
router.route('/registerMail').post();//send the email
router.route('/authenticate').post((req,res)=>res.end());//authenticatio user
router.route('/login').post(controller.login);//login in app



//get Method
router.route('/user/:username').get(controller.getUser);//user with username
router.route('/generateOTP').get(controller.generateOTP);//genatate random OTP//verify generated OTP
router.route('/verifyOTP').get(controller.verifyOTP);//verify generated OTP
router.route('/cerateResetSession').get(controller.cerateResetSession);//reset session veriable

//put method
router.route('/updateUser').put(controller.updateUser);// is use to update user profile
router.route('/resetPassword').post(controller.resetPassword);//reset password reset


export default router; 
