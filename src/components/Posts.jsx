import React from "react";
import "./styles.css"
import Search from "./Search"

const Posts = ({ posts, setPosts }) => {

  return (  
    <>
      <h2> All Posts</h2>
      <Search posts={posts} setPosts={setPosts} />
      {posts ? (
        <>
          {posts.map((post) => {
            return (
              <article key={post._id}>
                <h4>{post.title}</h4>
                <p>{post.description}</p>
                <p className="price">{post.price}</p>
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
