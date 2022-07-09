
import React, { useState } from 'react';
import Axios from 'axios'
import App from './App';
import Register from './signUp';
function Login(props) {

    const [usernames, setUsername] = useState("");
    const [passwords, setPassword] = useState("");
    const [errors, setError] = useState(false);
    //   sign up page
    const [sign, setSing] = useState(false)
    //create registration object
    const newUser = {
        username: usernames,
        password: passwords,

    }
    const login = () => {
        Axios.post('http://localhost:1337/user/login', newUser).then(response => {
            setError(response.data.success)
            console.log(response.data.success)
        })
            .catch(err => { console.log(err) });
    }
    // user can access  to home page if he is logged in
    const gohome = () => {
        if (errors === true) {
            return <div><App data={props.data} /></div>
        } else {
            return (<div>
                <div className="register" >
                    <h1>Log in</h1>
                    <input type="text" placeholder='username' onChange={
                        (e) => {
                            setUsername(e.target.value);
                        }} ></input><br />
                    <input type="password" placeholder='password' onChange={
                        (e) => {
                            setPassword(e.target.value);
                        }}></input><br />

                    <button className='button' onClick={() => { return login() }}>Log in</button><br /><br /><br />
                    <h3>if you don't have account you can signup first</h3>
                    <button className='button' onClick={() => { setSing(true) }}>signUp</button><br /><br /><br />
                </div>
            </div>)
        }
    }

    // user can sign up  if he don't have account 
    const signup = () => {
        if (sign === true) {
            return <Register />
        }
        else {
            return gohome()
        }
    }
    return (
        <div>


            {signup()}




        </div>
    )

}

export default Login;


