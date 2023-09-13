import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import "./style.css";

export default function RecommendationCard({ image, name, post, children }) {
  return (
    <div>
      <Paper elevation={0}>
        <Box className="recommendationLayout">
          <Grid container spacing={3}>
            <Grid item sm={4}>
              <Avatar alt="recommendations" src={image} />
            </Grid>
            <Grid item sm={4}>
              <Typography>{name}</Typography>
              <Typography className="post">{post}</Typography>
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
