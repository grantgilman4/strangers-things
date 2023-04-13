import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/crud";

const Register = ({isLoggedIn, setIsLoggedIn, token, setToken, user, setUser}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const userAuth = {user: {username: username, password: password}}
        const { data, userResult } = await registerUser(userAuth)

        if(data.token) {
            setToken(data.token);
            setUser(userResult);
            setIsLoggedIn(true);
        }
        setUsername('');
        setPassword('');
        navigate('/posts')

    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h2>Register as a new user below!</h2>
            <input type='text' placeholder='username' value={username} onChange={(event) => setUsername(event.target.value)}/>
            <input type='text' placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
            <button type='submit'>Register & Login</button>
        </form>
        </>
    )
}

export default Register