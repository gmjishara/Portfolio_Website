import { Box, Button } from "@mui/material";
import React from "react";
import "./style.css";
import { TypeAnimation } from "react-type-animation";


export default function HomeImage() {
  return (
    <Box className="homeImage">
      <h3>Welcome</h3>
      <TypeAnimation
        sequence={[
          "I'm Janith Ishara.",
          1000,
          "I'm a React Developer.",
          1000,
          "I'm a Frontend Developer.",
          1000,
          "I'm a Backend Developer.",
          1000,
          "I'm a Fullstack Devaloper.",
          1000,
        ]}
        wrapper="span"
        speed={10}
        repeat={Infinity}
        className="animateText"
      />
      <p className="homeText">based in Colombo, Sri Lanka.</p>
      <button className="btn-outlined">Hire Me</button>
    </Box>
  );
}
