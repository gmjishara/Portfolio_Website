import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function DenseAppBar({ visible, setVisible }) {
  const visibiltiyChange = () => {
    if (visible === "none") {
      setVisible("block");
    } else {
      setVisible("none");
    }
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        
        display: {
          xl: "none",
          lg: "none",
          md: "block",
          sm: "block",
          xs: "block",
        },
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#111418",
          height: "70px",
          width:"100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={visibiltiyChange}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Janith Ishara
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
