import React, { useState, useEffect } from "react";
import { Navbar, Login, Posts, Messages, Welcome, Register } from ".";
import { Routes, Route } from "react-router-dom";
import { fetchPosts, myData } from "../api/crud";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [token, setToken] = useState(localStorage.token);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const { posts } = await fetchPosts();
      console.log(posts);
      setPosts(posts);
    };
    getPosts();
  }, []);

  // useEffect(() => {
  //     const fetchUser = async () => {
  //         const fetchedUser = myData(token);
  //         setUser(fetchedUser.user);
  //         if(token){
  //             myData(token)
  //         }
  //     }
  //     fetchUser();
  // }, [token])
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
            />
          }
        />
        <Route
          path="/posts"
          element={<Posts posts={posts} setPosts={setPosts} isLoggedIn={isLoggedIn}/>}
        />
        <Route path="/messages" element={<Messages />} />
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
