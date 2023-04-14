import React, { useState } from "react";
import {makePost} from '../api/crud';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({token, posts, setPosts, user, setUserPosts, userPosts}) => {
const [title, setTitle] = useState('')
const [description, setDesc] = useState('')
const [price, setPrice] = useState('')
const [deliver, setDeliver] = useState (false)
const [location, setLocation] = useState ('Location (on request)')
const navigate = useNavigate();
const handleSubmit= async (event) => {
    event.preventDefault();

    const newPost= {post:{title: title, description: description, price: price, deliver: deliver, location: location}}
    const result = await makePost(newPost, token);
    const author = result.data.post.author.username
    if (result.data.post){
       setPosts([result.data.post, ...posts]);
       if(author == user) {
        await setUserPosts([result.data.post, ...userPosts])
       }
       navigate('/posts')
}}
    return ( 
        <form onSubmit= {handleSubmit}>
            <h2>New Post</h2>
            <input placeholder='Title' type='text' value={title} required onChange={(event) => setTitle(event.target.value)}></input>
            <input placeholder='Description' type='text' value={description} required onChange={(event) => setDesc(event.target.value)}></input>
            <input placeholder='Price' type='text' value={price} required onChange={(event) => setPrice(event.target.value)}></input>
            <input type='text' value={location} onChange={(event) => 
            setLocation(event.target.value)}></input>
            <span><label>Will Deliver</label>   
            <input type='checkbox' value={deliver} onChange={(event) => 
            setDeliver(event.target.value)}></input></span>
            <button type='submit'>Create Post</button>
        </form>

    )
}



export default CreatePost
