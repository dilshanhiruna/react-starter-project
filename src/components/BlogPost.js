// src/components/BlogPost.js
import React from "react";
import { Link } from "react-router-dom";

// pc:begin: material-ui
import { Card, CardContent, Typography, Button } from "@mui/material";
// pc:end: material-ui

// pc:begin: ant-design
import { Card, Typography, Button, Meta } from "antd";
const { Text, Paragraph } = Typography;
// pc:end: ant-design

const BlogPost = ({ title, summary, postId }) => {
  // pc:begin: bootstrap
return (
<div className="blog-post card">
<div className="card-body">
<h2 className="card-title">{title}</h2>
<p className="card-text">{summary}</p>
<Link to={`/post/${postId}`} className="btn btn-primary">
Read More
</Link>
</div>
</div>
);
  // pc:end: bootstrap

  // pc:begin: material-ui
return (
<Card variant="outlined" className="blog-post">
<CardContent>
<Typography variant="h5" component="h2">
{title}
</Typography>
<Typography variant="body2" component="p">
{summary}
</Typography>
<Button
component={Link}
to={`/post/${postId}`}
variant="contained"
color="primary"
>
Read More
</Button>
</CardContent>
</Card>
);
  // pc:end: material-ui

  // pc:begin: ant-design
return (
<Card
hoverable
style={{ width: 300, marginBottom: 16 }}
actions={[
<Button type="primary" key="read-more">
<Link to={`/post/${postId}`} style={{ color: "white" }}>
Read More
</Link>
</Button>,
]}
>
<Text strong>{title}</Text>
<Paragraph>{summary}</Paragraph>
</Card>
);
  // pc:end: ant-design
};

export default BlogPost;
