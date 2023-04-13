import React from "react";
import { Posts } from "."

const Welcome = ({isLoggedIn, user, posts, setPosts}) => {
 return (
    <>
    { isLoggedIn ? (
      <>
      <h2>Welcome, {user.username}</h2><Posts posts={posts}/></>
    ):(
      <>
         <h2>Hello! Please login or register to do more than view.</h2>
         <Posts posts={posts} setPosts={setPosts}/>
      </>
      )}
    </>
 )
}

export default Welcome