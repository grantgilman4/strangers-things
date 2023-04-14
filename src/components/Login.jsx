import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, myData } from "../api/crud";

const Login = ({ setIsLoggedIn, token, setToken, user, setUser, setUserPosts}) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const userObj = {user: {username: userName, password: password}}
        const { data } = await loginUser(userObj)
        const result = await myData(data.token);
        const {_id, username, posts, messages} = result.data
        if(data.token) {
            setToken(data.token);
                setUser({_id, username});
                setUserPosts(posts)
            setIsLoggedIn(true);
            localStorage.setItem("token", data.token);
            
        }
        setUserName('');
        setPassword('');
        navigate('/profile')

    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='username' value={userName} onChange={(event) => setUserName(event.target.value)}/>
            <input type='text' placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
            <button type='submit'>Login</button>
        </form>
        </>
    )
}

export default Login