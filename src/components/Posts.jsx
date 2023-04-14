import React from "react";
import {useNavigate} from "react-router-dom";
//import { makePost, deletePost} from '../api/crud'

const Posts = ({ posts }) => {

 const navigate = useNavigate();
  
  return (  
    <>
      <h2>Posts</h2>
      {posts ? (
        <>
          {posts.map((post) => {
            return (
              <article key={post._id}>
                <h4>{post.title}</h4>
                <p>{post.description}</p>
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
