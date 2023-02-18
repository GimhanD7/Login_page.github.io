import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../../src/assets/avatar.png'
import styles from '../Username/Username.css'
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';

import { resetPasswordValidate } from '../../Helper/validate';


export default function Reset() {

    const formik=useFormik({
      initialValues:{
        password:'',
        confirm_password:'',
      },
      validate : resetPasswordValidate,
      validateOnBlur:false,
      validateOnChange:false,
        onSubmit: async (values)=>{
          console.log(values)
        }
    })

  return (

    <div className="container mx-auto">

        <Toaster position='top-center' reverseOrder='false'/>

    <div className='flex justify-center items-center allthebox h-screen'>
      <div className='glass'style={{width:"40%"}} >

        <div className="title flex flex-col items-center">
          <h4 className='text-5xl font-bold'>Reset</h4>
          <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
            Enter new password.
          </span>
        </div>

          <form className='py-20' onSubmit={formik.handleSubmit} >

            <center>
            <div className='textbox flex flex-col items-center gap-6 '>
              <input {...formik.getFieldProps('password')}  type={'password'} placeholder='New Password' className='textbox01' ></input>
              <input {...formik.getFieldProps('confirm_password')}  type={'password'} placeholder='Re-Enter Password' className='textbox01' ></input>

              <button type='submit' className='btn'>Sign In</button>
            </div></center>
            
            
          </form>
        
        </div>
      </div>

    </div>


  )
}
