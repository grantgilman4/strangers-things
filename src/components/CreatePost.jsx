import React, { useState } from "react";
import {makePost} from '../api/crud';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({token, posts, setPosts}) => {
const [title, setTitle] = useState('')
const [description, setDesc] = useState('')
const [price, setPrice] = useState('')
const [deliver, setDeliver] = useState (false)
const [location, setLocation] = useState ('Location On request')
const navigate = useNavigate();
const handleSubmit= async (event) => {
    event.preventDefault();

    const newPost= {post:{title: title, description: description, price: price, deliver: deliver, location: location}}
    const result = await makePost(newPost, token)
    if (result.data.post){
       setPosts([result.data.post, ...posts])
       navigate('/posts')
}}
    return ( 
        <form onSubmit= {handleSubmit}>
            <input placeholder='Title' type='text' value={title} required onChange={(event) => setTitle(event.target.value)}></input>
            <input placeholder='Description' type='text' value={description} required onChange={(event) => setDesc(event.target.value)}></input>
            <input placeholder='Price' type='text' value={price} required onChange={(event) => setPrice(event.target.value)}></input>
            <input type='text' value={location} onChange={(event) => 
            setLocation(event.target.value)}></input>
            <label>Will Deliver</label>   
            <input type='checkbox' value={deliver} onChange={(event) => 
            setDeliver(event.target.value)}></input>
            <button type='submit'>Create Post</button>
        </form>

    )
}



export default CreatePost
