import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../../src/assets/avatar.png'
import styles from './Username.css'
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate } from '../../Helper/validate';
export default function Username() {

    const formik=useFormik({
      initialValues:{
        username:''
      },
      validate : usernameValidate,
      validateOnBlur:false,
      validateOnChange:false,
        onSubmit: async (values)=>{
          console.log(values)
        }
    })

  return (

    <div className="container mx-auto">

        <Toaster position='top-center' reverseOrder='false'/>

          <div className='flex justify-center items-center allthebox '>
            <div className='glass' style={{width:"40%"}} >

              <div className="title flex flex-col items-center">
                <h4 className='text-5xl font-bold'>Hello User!</h4>
                <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                  Explore More by connecting with us.
                </span>
              </div>

                <form className='py-1' onSubmit={formik.handleSubmit} >
                  <div className='profile flex justify-center py-4'>
                    <img src={avatar} alt='avatar' className='border-4 boder-gray-50 shink-0 h-3/4 w-[135px] rounded-full shadow-sm '></img>
                  </div>
                  <center>
                  <div className='textbox flex flex-col items-center gap-6 '>
                    <input {...formik.getFieldProps('username')}  type={'text'} placeholder='UserName' className='textbox01' ></input>
                    <button type='submit' className='btn'>Let's Go</button>
                  </div></center>
                  
                  <div className='text-center py-4'>
                    <span className='text-gray-500'> Not a Member <Link className='text-red-500' to={'/register'}> Register Now</Link></span>
                  </div>
                </form>
               
              </div>
            </div>

    </div>


  )
}
