// src/components/SignUp.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// pc:begin: material-ui
// import { TextField, Button, Typography, Container } from "@mui/material";
// pc:end: material-ui

// pc:begin: ant-design
import { Form, Input, Button, Typography, Row, Col } from "antd";
// pc:end: ant-design

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      navigate.push("/");
    } catch (error) {
      setError("Failed to create an account");
      console.error("Error signing up:", error);
    }
  };

  // pc:begin: bootstrap
// return (
// <div>
// <h2>Sign Up</h2>
// <form onSubmit={handleSignUp}>
// <div className="mb-3">
// <label htmlFor="email" className="form-label">
// Email
// </label>
// <input
// type="email"
// className="form-control"
// id="email"
// value={email}
// onChange={(e) => setEmail(e.target.value)}
// required
// />
// </div>
// <div className="mb-3">
// <label htmlFor="password" className="form-label">
// Password
// </label>
// <input
// type="password"
// className="form-control"
// id="password"
// value={password}
// onChange={(e) => setPassword(e.target.value)}
// required
// />
// </div>
// {error && <div className="alert alert-danger">{error}</div>}
// <button type="submit" className="btn btn-primary">
// Sign Up
// </button>
// <Link to="/signin" className="btn btn-link">
// Already have an account? Sign In
// </Link>
// </form>
// </div>
// );
  // pc:end: bootstrap

  // pc:begin: material-ui
// return (
// <Container maxWidth="sm">
// <Typography variant="h4" gutterBottom>
// Sign Up
// </Typography>
// <form onSubmit={handleSignUp}>
// <TextField
// label="Email"
// type="email"
// fullWidth
// value={email}
// onChange={(e) => setEmail(e.target.value)}
// required
// margin="normal"
// variant="outlined"
// />
// <TextField
// label="Password"
// type="password"
// fullWidth
// value={password}
// onChange={(e) => setPassword(e.target.value)}
// required
// margin="normal"
// variant="outlined"
// />
// {error && <Typography color="error">{error}</Typography>}
// <Button type="submit" variant="contained" color="primary" fullWidth>
// Sign Up
// </Button>
// <Typography variant="body2" gutterBottom>
// Already have an account? <Link to="/signin">Sign In</Link>
// </Typography>
// </form>
// </Container>
// );
  // pc:end: material-ui

  // pc:begin: ant-design
return (
<div>
<Typography.Title level={2}>Sign Up</Typography.Title>
<Row justify="center">
<Col span={8}>
<Form onFinish={handleSignUp}>
<Form.Item
name="email"
label="Email"
rules={[
{
required: true,
message: "Please enter your email",
},
]}
>
<Input value={email} onChange={(e) => setEmail(e.target.value)} />
</Form.Item>
<Form.Item
name="password"
label="Password"
rules={[
{
required: true,
message: "Please enter your password",
},
]}
>
<Input.Password
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
</Form.Item>
{error && <Typography.Text type="danger">{error}</Typography.Text>}
<Form.Item>
<Button type="primary" htmlType="submit">
Sign Up
</Button>
</Form.Item>
<Form.Item>
<Typography.Text>
Already have an account? <Link to="/signin">Sign In</Link>
</Typography.Text>
</Form.Item>
</Form>
</Col>
</Row>
</div>
);
  // pc:end: ant-design
};

export default SignUp;
