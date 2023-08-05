// src/components/ThemeToggle.js
import React, { useContext } from "react";

// pc:begin: context-api
import { ThemeContext } from "../providers/ThemeContext";
// pc:end: context-api

// pc:begin: redux
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../store/store";
// pc:end: redux

// pc:begin: zustand
import useThemeStore from "../store/themeStore";
// pc:end: zustand

// pc:begin: jotai
import { useAtom } from "jotai";
import { darkModeAtom } from "../store/themeAtom";
// pc:end: jotai

// pc:begin: material-ui
import { Button } from "@mui/material";
// pc:end: material-ui

// pc:begin: ant-design
import { BulbOutlined, BulbFilled } from "@ant-design/icons";
import { Button } from "antd";
// pc:end: ant-design

const ThemeToggle = () => {
  // pc:begin: context-api
const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  // pc:end: context-api

  // pc:begin: redux
const dispatch = useDispatch();
const darkMode = useSelector((state) => state.darkMode);
  // pc:end: redux

  // pc:begin: zustand
const { darkMode, toggleDarkMode } = useThemeStore();
  // pc:end: zustand

  // pc:begin: jotai
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  // pc:end: jotai

  // pc:begin: bootstrap
return (
<button
  // pc:begin: redux
onClick={() => dispatch(toggleDarkMode())}
  // pc:end: redux
  // pc:begin: context-api, zustand, jotai
onClick={toggleDarkMode}
  // pc:end: context-api, zustand, jotai
className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}
>
{darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
</button>
);
  // pc:end: bootstrap

  // pc:begin: material-ui
return (
<Button
variant="contained"
color={darkMode ? "default" : "primary"}
  // pc:begin: redux
onClick={() => dispatch(toggleDarkMode())}
  // pc:end: redux
  // pc:begin: context-api, zustand, jotai
onClick={toggleDarkMode}
  // pc:end: context-api, zustand, jotai
>
{darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
</Button>
);
  // pc:end: material-ui

  // pc:begin: ant-design
  return (
    <Button
      shape="circle"
      icon={darkMode ? <BulbOutlined /> : <BulbFilled />}
      // pc:begin: redux
onClick={() => dispatch(toggleDarkMode())}
      // pc:end: redux
      // pc:begin: context-api, zustand, jotai
      onClick={toggleDarkMode}
      // pc:end: context-api, zustand, jotai
    />
  );
  // pc:end: ant-design
};

export default ThemeToggle;
