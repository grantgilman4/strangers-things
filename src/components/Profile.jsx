import React from "react";
import { useNavigate } from 'react-router-dom';
import { deletePost } from '../api/crud'
const Profile = ({ user, posts, setPosts, token, active}) => {
   const navigate = useNavigate();

   return(
      <>
      <h2>User Profile</h2>
      <button onClick={() => { navigate('/newpost')}}>Create New Post</button> 

      {user.data.posts ? (
         <>
         {user.data.posts.map((post) => {
            return (
              <article key={post._id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
                <p>Author: {post.author.username}</p>
                <button onClick={ async () => {
                const deletedPost = await deletePost(post._id, token)
                setPosts([...posts.filter(post => post._id !== deletedPost.id && !active)])
               
               }}>Delete Post</button>
              </article>
            );
          })}
         {user.data.messages.map((message) => {
            return (
              <article key={message._id}>
                <h4>{message.post.title}</h4>
                <p>{message.content}</p>
                <p>Author: {message.fromUser._id}</p>
              </article>
            );
          })}
      </>):(<h2>loading...</h2>) }
   </>)
}


export default Profile