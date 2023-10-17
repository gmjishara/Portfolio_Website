import { Box } from "@mui/material";
import React from "react";
import HomeImage from "../../Pages/HomeImageSection/HomeImage";
import About from "../../Pages/About/About";
import Resume from "../../Pages/Resume/Resume";
import Portfolio from "../../Pages/Portfolio/Portfolio";
import Certifications from "../../Pages/Certifications/Certifications";
import Testimonial from "../../Pages/Testimonial/Testimonial";
import Contact from "../../Pages/Contact/Contact";
import { Grid } from "@mui/material";
import "./style.css";

export default function Main() {
  return (
    <Grid
      container
      sx={{
        width: "100%",
      }}
    >
      <Grid item sx={{width:"100%"}}>
        <HomeImage />
      </Grid>
      <Grid item xs={12}>
        <About />
      </Grid>
      <Grid item xs={12}>
        <Resume />
      </Grid>
      <Grid item xs={12}>
        <Portfolio />
      </Grid>
      <Grid item xs={12}>
        <Certifications />
      </Grid>
      <Grid item xs={12}>
        <Testimonial />
      </Grid>
      <Grid item xs={12}>
        <Contact />
      </Grid>
    </Grid>
  );
}
