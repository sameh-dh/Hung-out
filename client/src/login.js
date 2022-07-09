  
  import React, { useState } from 'react';
  
  import Axios  from 'axios'
  
  import Home from './homePage'
   function Signin (props) {
  
      const [usernames,setUsername]=useState("");
      const [passwords,setPassword]=useState("");
      const [errors, setError]=useState(false);
      //create registration object
      const newUser={
          username:usernames,
          password:passwords,
        
      }
      const login=()=>{
          Axios.post('http://localhost:1337/user/login',newUser).then(response=>{
              setError(response.data.success)
              console.log(response.data.success)
          })
          .catch(err=>{ console.log(err)});
      }
      // user can access  to home page
      const gohome=()=>{
     if (errors===true){
      return <div><Home  data={props.data}/></div>
     }else{
      return (<div>
           <div className="register" >
           <h1>Log in</h1>
           <input type="text" placeholder='username'   onChange={
              (e)=>{
                setUsername(e.target.value);
              }} ></input><br/> 
           <input type="password" placeholder='password'  onChange={
              (e)=>{
                setPassword(e.target.value);
              }}></input><br/> 
           
           <button className='button' onClick={()=>{return login()}}>Log in</button><br/><br/><br/>
  
         </div>
         </div>)
     }
      }
      return (
           <div>
  
  
      {gohome()}
  
  
           
  
         </div>
      )
  
   }
  
   export default Signin;
  
  
  