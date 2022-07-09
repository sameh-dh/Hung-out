
import React, { useState } from 'react';

import Axios from 'axios';
import Login from './login'
function Register() {

    const [names, setName] = useState("");

    const [passwords, setPassword] = useState("");
    //login page
    const [log, setLogin] = useState(false);

    //create registration object
    const newUser = {
        username: names,
        password: passwords,

    }

    const register = () => {
        Axios.post('http://localhost:1337/user/signup', newUser).then(response => {
            console.log(response)
        })
            .catch(err => { console.log(err) });
    }
    //accesss to log in page
    const login = () => {
        if (log === false) {
            return (
                <div className="register" >
                    <h1>Sign Up</h1>
                    <input type="text" placeholder='username' name="username" onChange={
                        (e) => {
                            setName(e.target.value);
                        }
                    } ></input><br />

                    <input type="password" placeholder='password' onChange={
                        (e) => {
                            setPassword(e.target.value);
                        }}></input><br />

                    <button className='button' onClick={() => { return register() }}>Sign Up</button><br /><br /><br />
                    <h3> if you already have an account you can log in</h3>
                    <button className='button' onClick={() => { setLogin(true) }}>Log in</button><br /><br /><br />

                </div>
            )
        } else {
            return <Login />
        }
    }
    return (
        <div>
            {login()}
        </div>
    )

}

export default Register;


