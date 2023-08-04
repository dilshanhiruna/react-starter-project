// src/services/api.js

// pc:begin: axios
import axios from "axios";
// pc:end: axios

const BASE_URL = "https://jsonplaceholder.typicode.com";

// pc:begin: fetch
// const fetchPosts = async () => {
// try {
// const response = await fetch(`${BASE_URL}/posts`);
// if (!response.ok) {
// throw new Error("Network response was not ok");
// }
// const data = await response.json();
// return data;
// } catch (error) {
// throw new Error("Failed to fetch blog posts");
// }
// };
// 
// const fetchPost = async (postId) => {
// try {
// const response = await fetch(`${BASE_URL}/posts/${postId}`);
// if (!response.ok) {
// throw new Error("Network response was not ok");
// }
// const data = await response.json();
// return data;
// } catch (error) {
// throw new Error("Failed to fetch blog post");
// }
// };
// 
// const createPost = async (postData) => {
// try {
// const response = await fetch(`${BASE_URL}/posts`, {
// method: "POST",
// headers: {
// "Content-Type": "application/json",
// },
// body: JSON.stringify(postData),
// });
// 
// if (!response.ok) {
// throw new Error("Network response was not ok");
// }
// 
// const data = await response.json();
// return data;
// } catch (error) {
// throw new Error("Failed to create blog post");
// }
// };
// 
// const deletePost = async (postId) => {
// try {
// const response = await fetch(`${BASE_URL}/posts/${postId}`, {
// method: "DELETE",
// });
// 
// if (!response.ok) {
// throw new Error("Network response was not ok");
// }
// 
// const data = await response.json();
// return data;
// } catch (error) {
// throw new Error("Failed to delete blog post");
// }
// };
// 
// pc:end: fetch

// pc:begin: axios
const fetchPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch blog posts");
  }
};

const fetchPost = async (postId) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts/${postId}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch blog post");
  }
};

const createPost = async (postData) => {
  try {
    const response = await axios.post(`${BASE_URL}/posts`, postData);
    return response.data;
  } catch (error) {
    throw new Error("Failed to create blog post");
  }
};

const deletePost = async (postId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/posts/${postId}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete blog post");
  }
};

// pc:end: axios

export { fetchPosts, fetchPost, createPost, deletePost };
