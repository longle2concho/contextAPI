import React from 'react';
import { useState,useContext } from 'react';
import { LoginContext } from '../Context/Logincontext';

function Login() {
    const {SetUsername,SetShowprofile,setPassword}= useContext(LoginContext);
    //deliver to Context
    function HandleClick() {
        return SetShowprofile(true);
    }
    return(
        <dev>
            <input type="text" 
            placeholder="UserName..."
            onChange={(event)=>{
                SetUsername(event.target.value)
            }}
            />
            <input type="text" placeholder = "PassWord..."
            onChange={(event)=>{setPassword(event.target.value)}
            }/>
            <button onClick={HandleClick}>
                LOGIN
            </button>
        </dev>
         
    );
}

export default Login;