// src/components/SignIn.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// pc:begin: material-ui
// import { TextField, Button, Typography, Container } from "@mui/material";
// pc:end: material-ui

// pc:begin: ant-design
import { Form, Input, Button, Typography, Row, Col } from "antd";
// pc:end: ant-design

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      navigate("/");
    } catch (error) {
      setError("Invalid email or password");
      console.error("Error signing in:", error);
    }
  };

  // pc:begin: bootstrap
// return (
// <div>
// <h2>Sign In</h2>
// <form onSubmit={handleSignIn}>
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
// Sign In
// </button>
// <Link to="/signup" className="btn btn-link">
// Don't have an account? Sign Up
// </Link>
// </form>
// </div>
// );
  // pc:end: bootstrap

  // pc:begin: material-ui
// return (
// <Container maxWidth="sm">
// <Typography variant="h4" gutterBottom>
// Sign In
// </Typography>
// <form onSubmit={handleSignIn}>
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
// Sign In
// </Button>
// <Typography variant="body2" gutterBottom>
// Don't have an account? <Link to="/signup">Sign Up</Link>
// </Typography>
// </form>
// </Container>
// );
  // pc:end: material-ui

  // pc:begin: ant-design
return (
<div>
<Typography.Title level={2}>Sign In</Typography.Title>
<Row justify="center">
<Col span={8}>
<Form onFinish={handleSignIn}>
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
Sign In
</Button>
</Form.Item>
<Form.Item>
<Typography.Text>
Don't have an account? <Link to="/signup">Sign Up</Link>
</Typography.Text>
</Form.Item>
</Form>
</Col>
</Row>
</div>
);
  // pc:end: ant-design
};

export default SignIn;
