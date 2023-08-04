// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogPost from "./components/BlogPost";
import BlogPostDetail from "./components/BlogPostDetail";
import { fetchPosts } from "./services/api";
import NewPost from "./components/NewPost";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

const Home = ({ blogPosts }) => (
  <>
    <h2>Blog Posts</h2>
    {blogPosts.map((post) => (
      <BlogPost
        key={post.id}
        title={post.title}
        summary={post.body}
        postId={post.id}
      />
    ))}
  </>
);

const App = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetchPosts()
      .then((data) => setBlogPosts(data))
      .catch((error) => console.error("Error fetching blog posts:", error));
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home blogPosts={blogPosts} />} />
            <Route path="/post/:postId" element={<BlogPostDetail />} />
            <Route path="/create" element={<NewPost />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
