import React,{useContext} from 'react';
import { LoginContext } from '../Context/Logincontext';

function Profile() {
    const {username}= useContext(LoginContext);
    const {password}= useContext(LoginContext);
    return (
        <div>
            <h1>Profile</h1>
            <h2>UserName: {username} </h2>
            <h2>Password: {password}</h2>
        </div>
    );
}

export default Profile;