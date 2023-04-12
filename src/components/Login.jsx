import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/crud";

const Login = ({ setIsLoggedIn, token, setToken, user, setUser}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const userAuth = {user: {username: username, password: password}}
        const { data, userResult } = await loginUser(userAuth)

        if(data.token) {
            setToken(data.token);
            setUser({userResult});
            setIsLoggedIn(true);
        }
        setUsername('');
        setPassword('');
        navigate('/posts')

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