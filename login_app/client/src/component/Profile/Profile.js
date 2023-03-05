import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../../src/assets/avatar.png'
import styles from '../Username/Username.css'
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';

import { passwordsValidate } from '../../Helper/validate';
import { useState } from 'react';
import convertToBase64 from '../../Helper/convert';
import { registerValidation } from '../../Helper/validate';
import { profileValidation } from '../../Helper/validate';
import extend from './profilestyle.css';

export default function Register() {
  const[file,setFile]=useState()
  

  

    const formik=useFormik({
      initialValues:{
        firstName: '',
        lastName: '',
        email:'',
        mobile:'',
        address:''
      },
      validate : profileValidation,
     
      validateOnBlur:false,
      validateOnChange:false,
        onSubmit: async (values)=>{
          values = await Object.assign(values,{ profile:file || ''})
          console.log(values)
        }
    })

// formik not support file uplode
const onUplode=async e=>{
  const base64 = await convertToBase64(e.target.files[0]);
  setFile(base64);

}



  return (

    <div className="container mx-auto">

        <Toaster position='top-center' reverseOrder='false'/>

    <div className='flex justify-center items-center allthebox'>
      <div className='glass' style={ {  width:"45%" , paddingTop:"3em"}}>

        <div className="title flex flex-col items-center">
          <h4 className='text-5xl font-bold'>Profile</h4>
          <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
            You can update details.
          </span>
        </div>

          <form className='py-1' onSubmit={formik.handleSubmit} >
            <div className='profile flex justify-center py-4'>
              <label htmlFor='profile' className='nostyle' styles='none'>
              <img src={file || avatar} alt='avatar' className='border-4 boder-gray-50 shink-0 h-4/4 w-[135px] rounded-full shadow-sm ' style={{width: '10rem', cursor:"pointer"}}></img>
              </label>
              
              <input onChange={onUplode} type={"file"} id='profile'  name='profile'/>

            </div>
            <center>
            <div className='textbox flex flex-col items-center gap-6 '>
              <div className='name flex w-3/4 gap-10'>
              <input {...formik.getFieldProps('firstName')}  type={'text'} placeholder='FirstName' className='textbox01' ></input>
              <input {...formik.getFieldProps('lastName')}  type={'text'} placeholder='LastName' className='textbox01' ></input>
              </div>

              <div className='name flex w-3/4 gap-10'>
              <input {...formik.getFieldProps('mobile')}  type={'text'} placeholder='Mobile Number' className='textbox01' ></input>
              <input {...formik.getFieldProps('email')}  type={'text'} placeholder='Email' className='textbox01' ></input>
              </div>

              
              <input {...formik.getFieldProps('address')}  type={'text'} placeholder='Address' className='textbox01' ></input>
              <button type='submit' className='btn'>Register</button>
              

              
              
            </div></center>
            
            <div className='text-center py-4'>
              <span className='text-gray-500'> Come back later ? <Link className='text-red-500' to={'/'}> Logout</Link></span>
            </div>
          </form>

         
        </div>
      </div>

    </div>


  )
}

