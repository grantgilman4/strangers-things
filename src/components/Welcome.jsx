import React from "react";
import { Posts } from "."

const Welcome = ({isLoggedIn, user, posts, setPosts}) => {
 return (
    <>
    { isLoggedIn ? (
      <>
      <h3>Welcome, {user.username}</h3><Posts posts={posts}/></>
    ):(
      <>
         <h3>Hello! Please login or register to make a New Post.</h3>
         <Posts posts={posts} setPosts={setPosts}/>
      </>
      )}
    </>
 )
}

export default Welcome