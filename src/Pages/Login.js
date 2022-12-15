import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../Shared/AuthContext/AuthContext';

const Login = () => {
const[eror,setErro]= useState()
const  navigate=useNavigate()
const location=useLocation()
let from = location.state?.from?.pathname || "/";

const {login}=useContext(UserContext)
const handleLogin=(event)=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email, password)
  
    login(email, password)
    .then((result)=>{
        const user=result.user
        console.log(user)
        navigate(from, { replace: true });
        setErro("")
        
    }).catch(err=>{
        console.log(err)
        setErro(err.message)
    })


}

    return (
        <form onSubmit={handleLogin} className='w-100 my-5 py-5 shadow-lg'> 
                  <h4>Login</h4>
                  <p className='text-danger'>{eror}</p>
          <input className='d-block w-75 m-auto border p-2' type="text" placeholder='email' required name='email'/>
          <input className='d-block w-75 m-auto border p-2 my-4'  type="password" placeholder='password' required name='password'/>
          <input className='d-block bg-primary  rounded-2 w-25 m-auto border p-2 my-4' type="submit" value='Login' />
          

        </form>
    );
};

export default Login;