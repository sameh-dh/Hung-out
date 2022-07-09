  
  import React, { useState } from 'react';
  
  import Axios from 'axios';

function Register() {
   
   const [names,setName]= useState("");
  
   const [passwords,setPassword]=useState("");
   
 
   //create registration object
   const newUser={
       username:names,
       password:passwords,
    
   }
   const register=()=>{
       Axios.post('http://localhost:1337/user/signup',newUser).then(response=>{
           console.log(response)
       })
       .catch(err=>{ console.log(err)});
   }
   return (
        <div className="register" >
        <h1>Sign Up</h1>
        <input type="text" placeholder='username' name="username"  onChange={
           (e)=>{
             setName(e.target.value);
           }
        } ></input><br/> 
       
        <input type="password" placeholder='password'  onChange={
           (e)=>{
             setPassword(e.target.value);
           }}></input><br/> 
        
        <button className='button' onClick={()=>{return register()}}>Sign Up</button><br/><br/><br/>







      </div>
   )

}

export default Register;


