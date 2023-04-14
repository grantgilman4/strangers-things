import React, { useState, useEffect } from "react";
import {
  Navbar,
  Login,
  Posts,
  Profile,
  Welcome,
  Register,
  CreatePost,
} from ".";
import { Routes, Route } from "react-router-dom";
import { fetchPosts } from "../api/crud";


const Main = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [userPosts, setUserPosts] = useState([])
  const [userMessages, setUserMessages] = useState([])
  const [token, setToken] = useState(localStorage.token);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      const posts = await fetchPosts();
      console.log(posts);
      setPosts(posts);
    };
    getPosts();
  }, []);

  return (
    <>
      <Navbar
        setIsLoggedIn={setIsLoggedIn}
        setUser={setUser}
        setToken={setToken}
        isLoggedIn={isLoggedIn}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Welcome
              user={user}
              isLoggedIn={isLoggedIn}
              posts={posts}
              setPosts={setPosts}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              token={token}
              setToken={setToken}
              user={user}
              setUser={setUser}
              setIsLoggedIn={setIsLoggedIn}
              setUserPosts={setUserPosts}
              setUserMessages={setUserMessages}
            />
          }
        />
        <Route
          path="/posts"
          element={
            <Posts posts={posts} setPosts={setPosts} isLoggedIn={isLoggedIn} />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              posts={posts}
              setPosts={setPosts}
              user={user}
              token={token}
              userPosts={userPosts}
              setUserPosts={setUserPosts}
              userMessages={userMessages}
              setUserMessages={setUserMessages}
            />
          }
        />
        <Route
          path="/newpost"
          element={
            <CreatePost token={token} posts={posts} setPosts={setPosts} user={user} setUserPosts={setUserPosts} userPosts={userPosts}/>
          }
        />
        <Route
          path="/register"
          element={
            <Register
              token={token}
              setToken={setToken}
              user={user}
              setUser={setUser}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
      </Routes>
    </>
  );
};

export default Main;
