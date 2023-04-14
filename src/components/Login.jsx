import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, myData } from "../api/crud";

const Login = ({ setIsLoggedIn, token, setToken, user, setUser}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const userObj = {user: {username: username, password: password}}
        const { data } = await loginUser(userObj)
        const currentUser = await myData(data.token);
        
        if(data.token) {
            setToken(data.token);
            setUser(currentUser);
            setIsLoggedIn(true);
            localStorage.setItem("token", data.token);
            
        }
        setUsername('');
        setPassword('');
        navigate('/profile')

    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='username' value={username} onChange={(event) => setUsername(event.target.value)}/>
            <input type='text' placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
            <button type='submit'>Login</button>
        </form>
        </>
    )
}

export default Login