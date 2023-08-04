// src/components/NewPost.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../services/api";
// pc:begin: material-ui
import { Typography, TextField, Button } from "@mui/material";
// pc:end: material-ui

// pc:begin: ant-design
import { Typography, Form, Input, Button } from "antd";
// pc:end: ant-design

const NewPost = () => {
  const navigate = useNavigate();

  // pc:begin: ant-design
const [form] = Form.useForm();
const [loading, setLoading] = useState(false);

const handleSubmit = async () => {
try {
const values = await form.validateFields();
setLoading(true);

await createPost({
title: values.title,
body: values.content,
});
setLoading(false);

navigate("/");
} catch (error) {
console.error("Error creating blog post:", error);
}
};
  // pc:end: ant-design

  // pc:begin: bootstrap
const [title, setTitle] = useState("");
const [content, setContent] = useState("");

const handleSubmit = async (e) => {
e.preventDefault();
if (!title || !content) return;

try {
await createPost({
title,
body: content,
});
navigate("/");
} catch (error) {
console.error("Error creating blog post:", error);
}
};
  // pc:end: bootstrap

  // pc:begin: material-ui
const [title, setTitle] = useState("");
const [content, setContent] = useState("");

const handleSubmit = async (e) => {
e.preventDefault();
if (!title || !content) return;

try {
await createPost({
title,
body: content,
});
navigate("/");
} catch (error) {
console.error("Error creating blog post:", error);
}
};
  // pc:end: material-ui

  // pc:begin: bootstrap
return (
<div>
<h2>Create New Post</h2>
<form onSubmit={handleSubmit}>
<div className="mb-3">
<label htmlFor="title" className="form-label">
Title
</label>
<input
type="text"
className="form-control"
id="title"
value={title}
onChange={(e) => setTitle(e.target.value)}
required
/>
</div>
<div className="mb-3">
<label htmlFor="content" className="form-label">
Content
</label>
<textarea
className="form-control"
id="content"
value={content}
onChange={(e) => setContent(e.target.value)}
required
></textarea>
</div>
<button type="submit" className="btn btn-primary">
Create Post
</button>
</form>
</div>
);
  // pc:end: bootstrap

  // pc:begin: material-ui
return (
<div>
<Typography variant="h2">Create New Post</Typography>
<form onSubmit={handleSubmit}>
<TextField
label="Title"
variant="outlined"
value={title}
onChange={(e) => setTitle(e.target.value)}
required
fullWidth
margin="normal"
/>
<TextField
label="Content"
variant="outlined"
value={content}
onChange={(e) => setContent(e.target.value)}
required
multiline
rows={4}
fullWidth
margin="normal"
/>
<Button type="submit" variant="contained" color="primary">
Create Post
</Button>
</form>
</div>
);
  // pc:end: material-ui

  // pc:begin: ant-design
return (
<div>
<Typography.Title level={2}>Create New Post</Typography.Title>
<Form form={form} layout="vertical">
<Form.Item
label="Title"
name="title"
rules={[{ required: true, message: "Please enter a title" }]}
>
<Input />
</Form.Item>
<Form.Item
label="Content"
name="content"
rules={[{ required: true, message: "Please enter content" }]}
>
<Input.TextArea rows={4} />
</Form.Item>
<Form.Item>
<Button type="primary" loading={loading} onClick={handleSubmit}>
Create Post
</Button>
</Form.Item>
</Form>
</div>
);
  // pc:end: ant-design
};

export default NewPost;
