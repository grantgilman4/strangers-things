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
import { fetchPosts, myData } from "../api/crud";


const Main = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [userPosts, setUserPosts] = useState([])
  const [token, setToken] = useState(localStorage.token);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const [messages, setMessages] = useState([]);

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
              setUserPosts= {setUserPosts}
            />
          }
        />
        <Route
          path="/newpost"
          element={
            <CreatePost token={token} posts={posts} setPosts={setPosts} />
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
