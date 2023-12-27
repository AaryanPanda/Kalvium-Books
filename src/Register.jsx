import React from 'react'
import { useState } from 'react'
import {useForm} from 'react-hook-form'
import './Register.css'


function Register() {
       const { register, handleSubmit, watch, formState: { errors }} = useForm();
       const [submit, setSubmit] = useState(false)
       const onSubmit =  () => {
           setSubmit(true)
         }


  return (
    <div className='wrpper'>
        

        <p id='intro' style={!submit ? {color: "#f03838"} : {color: "#4caf50"}}>{!submit ? "Register to Enter Kalvium" : "Registration Successful !"}</p>
        <form action="">
          <input placeholder='First Name' className='form-inp'
              type="text"             
              {...register("firstName", {
                  required: "First Name is required!",
                  minLength: {
                      value: 3,
                      message: "Name must have at least 3 characters"
                  },
                  maxLength:{
                      value:20,
                      message: "Name must have at most 20 characters"
                  },
              })}
          />
            {errors.firstName && <p>{errors.firstName.message}</p>}

        


            <input placeholder='Email' className='form-inp'
            {...register("email", {
                required: "Email is required!",
                pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email"
                }  
            })}
            />
            {errors.email && <p>{errors.email.message}</p>}

            <input placeholder='Password' className='form-inp'
            {...register("password", {
                required: "Password is required!",
                minLength: {
                    value: 10,
                    message: "Password must have at least 10 characters"
                },
                maxLength:{
                    value:20,
                    message: "Password must have at most 20 characters"
                },
                pattern: {
                    value: /^(?=.*[!@#$%^&*])/,
                    message: "Password must contain at least one special character"
                }
            })}
            />
            {errors.password && <p>{errors.password.message}</p>}
            <input
          placeholder="Confirm your Password" className='form-inp'
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (val) =>
              val === watch("password") || "Passwords must match",
              
          })}
          type="password"
        />
        {errors['confirmPassword']&& <span>{errors['confirmPassword'].message}</span>}
            <div id='btn-div'><button onClick={handleSubmit(onSubmit)}>Submit</button></div>
        </form>
    </div>
  )
}

export default Register