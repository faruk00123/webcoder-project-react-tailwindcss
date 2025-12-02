import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import Swal from 'sweetalert2';


const Login = () => {
    const {register,handleSubmit,formState: { errors },} = useForm()
      const newPage = useNavigate()
      const {loginwithemail, handelGoogleLogin, handleFacebookLogin, handleGithubLogin} = useAuth()
      const [error, setError] = useState("");
      const onSubmit = async (data) => {
        try {
            await loginwithemail(data.email, data.password);
            Swal.fire({
              title: "Login successful!",
              icon: "success",
              draggable: true
            });
            newPage("/")
            
        } catch (error) {
            console.log(error.message);
            setError("your email or password not match! try agin.")
        }
      }


      // google login
      const GoogleLogin = async () => {
         try {
          await handelGoogleLogin();
          newPage("/")
         } catch (error) {
           console.log(error.message);
         }
      }


      // facebook login 
      const facebookLogin = async ()=> {
        try {
          await handleFacebookLogin();
          newPage("/")
        } catch (error) {
          console.log(error.message);
        }
      }


      // github login
      const githubLogin = async ()=> {
        try {
          await handleGithubLogin();
          newPage("/")
        } catch (error) {
          console.log(error.message);
        }
      }
  return (
    <div className='bg-blue-100 flex justify-center items-center min-h-screen'>
        <div className='bg-white mx-4 space-y-6 max-w-md w-full p-8 rounded shadow hover:shadow-md duration-300'>
            <h1 className='text-2xl font-bold text-center'>Please Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
                <label className='mb-1'>Email:</label>
                <input 
                {...register("email", { required: "Email is required", pattern: {value: /^\S+@\S+\.\S+$/, message: "Invalid email address"} })}
                className='mb-3 p-2 border border-gray-400 rounded focus:outline-none transition-all duration-200 focus:ring-1 focus:ring-pink-500' type="email" name="email" id="email" placeholder='Enter your email'/>
                {errors.email && <p className='text-sm italic -mt-2 mb-2 ml-1 text-red-500'>{errors.email.message}</p>}


                <label className='mb-1'>Password:</label>
                <input
                {...register("password", { required: "Password is required", minLength: {value: 6, message: "Password must be at least 6 characters"} })}
                 className=' p-2 border border-gray-400 rounded focus:outline-none transition-all duration-200 focus:ring-1 focus:ring-pink-500' type="password" name="password" id="password" placeholder='Enter your password'/>
                {errors.password && <p className='text-sm italic ml-1 text-red-500'>{errors.password.message}</p>}
                
                <p className='text-gray-500 -mb-2 text-sm mt-1 ml-0.5'>{error}</p>
                <button className='mt-6 bg-blue-500 py-2.5 rounded cursor-pointer text-white transition-all duration-200 text-xl hover:bg-blue-600' type='submit'>Login</button>
            </form>
            <h4 className='text-center text-gray-500 mt-8'>Or login with</h4>
            <div className='flex flex-col sm:flex-row justify-center gap-4'>
                <button onClick={GoogleLogin} className='flex text-center items-center justify-center space-x-2 cursor-pointer transition-all duration-200 text-white bg-pink-500 hover:bg-pink-700 py-2 px-4 rounded'><FaGoogle /> <span>Google</span></button>
                <button onClick={githubLogin} className='flex text-center items-center justify-center space-x-2 cursor-pointer transition-all duration-200 text-white bg-green-500 hover:bg-green-600 py-2 px-4 rounded'><FaGithub /> <span>Github</span></button>
                <button onClick={facebookLogin} className='flex text-center items-center justify-center space-x-2 cursor-pointer transition-all duration-200 text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded'><FaFacebook /> <span>Facebook</span></button>
            </div>
            <p className='text-center text-gray-500 -mb-3'>Do not have an account? please <Link to="/register" className='text-blue-600 cursor-pointer hover:underline'>Sign up</Link></p>
        </div>
    </div>
  )
}

export default Login