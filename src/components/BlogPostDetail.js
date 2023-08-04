// src/components/BlogPostDetail.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deletePost, fetchPost } from "../services/api";
// pc:begin: material-ui
import { Typography, Button } from "@mui/material";
// pc:end: material-ui

// pc:begin: ant-design
import { Typography, Button, Spin } from "antd";
// pc:end: ant-design

const BlogPostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPost(postId)
      .then((data) => setPost(data))
      .catch((error) => console.error("Error fetching blog post:", error));
  }, [postId]);

  const handleDelete = async () => {
    try {
      await deletePost(postId);
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Error deleting blog post:", error);
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  // pc:begin: bootstrap
return (
<div>
<h2>{post.title}</h2>
<p>{post.body}</p>
<button className="btn btn-danger" onClick={handleDelete}>
Delete
</button>
</div>
);
  // pc:end: bootstrap

  // pc:begin: material-ui
return (
<div>
<Typography variant="h2">{post.title}</Typography>
<Typography variant="body1">{post.body}</Typography>
<Button variant="contained" color="error" onClick={handleDelete}>
Delete
</Button>
</div>
);
  // pc:end: material-ui

  // pc:begin: ant-design
return (
<div>
<Typography.Title level={2}>{post.title}</Typography.Title>
<Typography.Paragraph>{post.body}</Typography.Paragraph>
<Button type="primary" danger onClick={handleDelete}>
Delete
</Button>
</div>
);
  // pc:end: ant-design
};

export default BlogPostDetail;
