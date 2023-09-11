import { Box } from "@mui/material";
import React from "react";
import HomeImage from "../../Pages/HomeImageSection/HomeImage";
import About from "../../Pages/About/About";
import Resume from "../../Pages/Resume/Resume";
import Portfolio from "../../Pages/Portfolio/Portfolio";
import Certifications from "../../Pages/Certifications/Certifications";
import Testimonial from "../../Pages/Testimonial/Testimonial";
import Contact from "../../Pages/Contact/Contact";
import "./style.css"

export default function Main() {
  return (
    <Box sx={{ position: "relative", paddingLeft: "260px", width: "100%" }}>
      <HomeImage />
      <About/>
      <Resume/>
      <Portfolio/>
      <Certifications/>
      <Testimonial/>
      <Contact/>
    </Box>
  );
}
