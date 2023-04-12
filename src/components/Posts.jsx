import React from "react";
//import { makePost, deletePost} from '../api/crud'

const Posts = ({ posts, setPosts, isLoggedIn, user }) => {
  return (
    <>
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
