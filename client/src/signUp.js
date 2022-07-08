import React, { useState } from 'react';
import axios from 'axios';
 
 function Register  (){

    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');
//creating new user with hashed password
    const onUserNameChange = function(event){
        setUserName(event.target.value)
    }
    const onPasswordChange = function(event){
        setPassword(event.target.value)
    }
    const saveUser = function(){
        axios.post('http://localhost:1337/user/signup',{
            username : username,
            password : password,
        })
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
        alert('User added')
    }

    return (
        <div className="register">
         <h1>Sign Up</h1>
         <input type="text" placeholder='username' onChange={onUserNameChange} ></input><br/>
         <input type="password" placeholder='password' onChange={onPasswordChange}></input><br/>
         <button className='button' onClick={saveUser}>Sign Up</button>
         <h1>Sign in</h1>
         <input type="text" placeholder='username'></input><br/>
         <input type="password" placeholder='password'></input><br/>
         <button className='button'>Sign in</button>
                     
        </div>
    )

 }
 export default Register;