import React from "react";
import {useNavigate} from "react-router-dom";
//import { makePost, deletePost} from '../api/crud'

const Posts = ({ posts, setPosts, isLoggedIn, user }) => {
 const navigate = useNavigate(); 
  return (  
    <>
    <button onClick={() => { 
    navigate('/newpost')
    }}>Create New Post</button> 
      {posts ? (
        <>
          {posts.map((post) => {
            return (
              <article key={post._id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
                <p>Author: {post.author.username}</p>
              </article>
            );
          })}
        </>
      ) : (
        <>
          <h2>loading...</h2>
        </>
      )}
    </>
  );
};
export default Posts;
