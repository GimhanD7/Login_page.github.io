import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../../src/assets/avatar.png'
import styles from '../Username/Username.css'
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';

import { passwordsValidate } from '../../Helper/validate';


export default function Recovery() {

    const formik=useFormik({
      initialValues:{
        password:''
      },
      validate : passwordsValidate,
      validateOnBlur:false,
      validateOnChange:false,
        onSubmit: async (values)=>{
          console.log(values)
        }
    })

  return (

    <div className="container mx-auto">

        <Toaster position='top-center' reverseOrder='false'/>

    <div className='flex justify-center items-center allthebox'>
      <div className='glass' style={{width:"40%"}} >

        <div className="title flex flex-col items-center">
          <h4 className='text-5xl font-bold'>Recovery</h4>
          <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
            Enter OTP to recover password
          </span>
        </div>

          <form className='py-20'  >
            <div className='profile flex justify-center py-4'>
              
            </div>
            <center>
            <div className='textbox flex flex-col items-center gap-6 '>
              <div className='input text-center'>
                <span className='py-4 text-sm text-left text-gray-500 '>
                Enter 6 digit OTP sent to your email address
              </span>
              <br />
              <input  type={'text'} placeholder='OTP' className='textbox01' ></input>
              </div>
              
              <button type='submit' className='btn'>Sign In</button>
            </div></center>
            
            <div className='text-center py-4'>
              <span className='text-gray-500'> Can't get OTP <button className='text-red-500' to={'/recovery'}> Resend</button></span>
            </div>
          </form>
        
        </div>
      </div>

    </div>


  )
}
