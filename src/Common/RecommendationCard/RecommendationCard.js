import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
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
          <Grid container spacing={2}>
            <Grid item sm={4}>
              <Avatar alt="recommendations" src={image} />
            </Grid>
            <Grid item sm={8}>
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
            <Grid item sm={12}></Grid>
          </Grid>
        </Box>
      </Paper>
    </div>
  );
}
