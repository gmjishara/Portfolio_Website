import { Box, Button } from '@mui/material'
import React from 'react';
import "./style.css";
import zIndex from '@mui/material/styles/zIndex';

export default function HomeImage() {
   
  return (
    <Box className="homeImage">
        <h3>Welcome</h3>
        <h1>I'm a Fullstack Devaloper</h1>
        <p className='homeText'>based in Colombo, Sri Lanka.</p>
        <button className='btn'>Hire Me</button>
    </Box>
  )
}
