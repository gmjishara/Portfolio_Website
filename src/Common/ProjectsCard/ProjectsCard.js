import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import React from "react";

export default function ProjectsCard({ children, imgUrl }) {
  return (
    <div>
      <Card style={{ width: "100%", backgroundColor: "#888a8c",paddingBottom:"5px" }}>
        <CardMedia sx={{ height: 300 }} image={imgUrl} />
        <CardContent>{children}</CardContent>
        <CardActions>
          <Button
            variant="outlined"
            style={{ color: "white", border: "2px solid #20C997" }}
          >
            Github
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "#20C997" }}
          >
            Live Demo
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
