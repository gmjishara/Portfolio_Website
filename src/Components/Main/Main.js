import { Box } from "@mui/material";
import React from "react";
import HomeImage from "../../Pages/HomeImageSection/HomeImage";
import About from "../../Pages/About/About";

export default function Main() {
  return (
    <Box sx={{ position: "relative", paddingLeft: "260px", width: "100%" }}>
      <HomeImage />
      <About/>
    </Box>
  );
}
