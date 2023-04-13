import React from "react";
import { useNavigate } from 'react-router-dom';
import { deletePost } from '../api/crud'
const Profile = ({ user, token, userPosts, setUserPosts}) => {
   const navigate = useNavigate();
console.log("this is user", user)
   return(
      <>
      <h2>User Profile</h2>
      <button onClick={() => { navigate('/newpost')}}>Create New Post</button> 

      {userPosts.length ? (
         <>
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
               console.log(deletedPost)
               }}>Delete Post</button>
              </article>
            );
          })}
         {/* {user.messages.map((message) => {
            return (
              <article key={message._id}>
                <h4>{message.post.title}</h4>
                <p>{message.content}</p>
                <p>Author: {message.fromUser._id}</p>
              </article>
            );
          })} */}
      </>):(<h2>No Posts Yet...</h2>) }
   </>)
}


export default Profile