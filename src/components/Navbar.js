// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
// pc:begin: material-ui
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
// pc:end: material-ui

// pc:begin: ant-design
import { Layout, Menu, Button } from "antd";
const { Header } = Layout;
// pc:end: ant-design

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleSignOut = async () => {
    try {
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  // pc:begin: bootstrap
return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container">
<Link to="/" className="navbar-brand">
My Blog
</Link>
<button
className="navbar-toggler"
type="button"
data-bs-toggle="collapse"
data-bs-target="#navbarNav"
aria-controls="navbarNav"
aria-expanded="false"
aria-label="Toggle navigation"
>
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav ms-auto">
<li className="nav-item">
<Link to="/create" className="nav-link">
Create Post
</Link>
</li>
{currentUser ? (
<li className="nav-item">
<button
className="btn btn-link nav-link"
onClick={handleSignOut}
>
Sign Out
</button>
</li>
) : (
<li className="nav-item">
<Link to="/signin" className="nav-link">
Sign In
</Link>
</li>
)}
</ul>
</div>
<ThemeToggle />
</div>
</nav>
);
  // pc:end: bootstrap

  // pc:begin: material-ui
return (
<AppBar position="static" color="primary">
<Toolbar>
<Link to="/" style={{ textDecoration: "none", color: "white" }}>
<Typography variant="h6" component="div">
My Blog
</Typography>
</Link>
<div style={{ flexGrow: 1 }}></div>
<Button
color="inherit"
component={Link}
to="/create"
style={{ textDecoration: "none" }}
>
Create Post
</Button>
{currentUser ? (
<Button color="inherit" onClick={handleSignOut}>
Sign Out
</Button>
) : (
<Button
color="inherit"
component={Link}
to="/signin"
style={{ textDecoration: "none" }}
>
Sign In
</Button>
)}
<ThemeToggle />
</Toolbar>
</AppBar>
);
  // pc:end: material-ui

  // pc:begin: ant-design
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/">My Blog</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/create">Create Post</Link>
        </Menu.Item>
        {currentUser ? (
          <Menu.Item key="3">
            <Button type="text" onClick={handleSignOut}>
              Sign Out
            </Button>
          </Menu.Item>
        ) : (
          <Menu.Item key="3">
            <Link to="/signin">Sign In</Link>
          </Menu.Item>
        )}
      </Menu>
      <ThemeToggle />
    </Header>
  );
  // pc:end: ant-design
};

export default Navbar;
