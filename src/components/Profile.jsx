import React from "react";
import { useNavigate } from 'react-router-dom';
import { deletePost } from '../api/crud'
const Profile = ({ user, token, userPosts, setUserPosts, userMessages }) => {
   const navigate = useNavigate();
console.log("this is user", user)
   return(
      <>
      <h3>Currently logged in as {user.username}</h3>
      <h2>Your Profile</h2>
      <button onClick={() => { navigate('/newpost')}}>Create New Post</button> 

      {userPosts.length ? (
         <>
         <h4>My Posts</h4>
         {userPosts.map((post) => {
            return (
              <article key={post._id}>
                <h4>{post.title}</h4>
                <p>{post.description}</p>
                <p>Author: {user.username}</p>
                <button onClick={ async () => {
                const deletedPostId = post._id
                await deletePost(post._id, token)
                setUserPosts(userPosts.filter(post => post._id !== deletedPostId))
               console.log(deletedPostId)
               }}>Delete Post</button>
              </article>
            );
          })}
          <h4>My Messages</h4>
         {userMessages.map((message) => {
            return (
              <article key={message._id}>
                <h4>{message.post.title}</h4>
                <p>{message.content}</p>
                <p>Author: {message.fromUser.username}</p>
              </article>
            );
          })}
      </>):(<h2>No Posts Yet...</h2>) }
   </>)
}


export default Profile