import { Box, Card } from "@mui/material";
import React from "react";
import "./style.css";

export default function CardComponent({ year, children }) {
  return (
    <div>
      <Card
        className="cardComponent"
        variant="outlined"
        style={{ padding: "25px", backgroundColor: "transparent" }}
      >
        <Box className="yearBox">
          <p>{year}</p>
        </Box>
        {children}
      </Card>
    </div>
  );
}
