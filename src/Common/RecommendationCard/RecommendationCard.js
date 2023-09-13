import {Rating, Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import "./style.css";

export default function RecommendationCard({ image, name, post, children }) {
    const textStyle={
        fontFamily: "'Poppins',sans-serif",
        fontWeight: 500
    }
  return (
    <div>
      <Paper elevation={0}>
        <Box className="recommendationLayout">
          <Grid container spacing={2.5}>
            <Grid item sm={2.5}>
              <Avatar alt="recommendations" src={image} sx={{width:70,height:70}}/>
            </Grid>
            <Grid item sm={9.5}>
              <Typography style={textStyle}>
                {name}
              </Typography>
              <Typography
                className="post"
                style={textStyle}
              >
                {post}
              </Typography>
            </Grid>
            <Grid item sm={12}>
              {children}
            </Grid>
            <Grid item sm={12}>
                <Rating value={5} readOnly/>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </div>
  );
}
