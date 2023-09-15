import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid, Typography } from "@mui/material";
import MyImage from "../../images/My.jpg";
import { Link, animateScroll as scroll } from "react-scroll";
import "./style.css"

export default function SideNavbar() {
  const paperStyle = {
    backgroundColor: "#111418",
    color: "#FFFFFF",
    fontFamily: "'Poppins', sans-serif",
    height: "100vh",
    width: 260,
    borderRadius: 0,
  };

  const imageStyle = {
    borderRadius: "100%",
    width: "160px",
    height: "160px",
    backgroundColor: "white",
    border: "8px solid #343A40",
    backgroundImage: `url(${MyImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    cursor: "pointer"
  };

  const containertyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 5,
    gap: 10,
  };

  const textStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: 20,
    marginTop: 1,
  };

  const navTextGrid = {
    display: "flex",
    flexDirection: "column",
    gap: 19,
  };

  const middleTextStyle = {
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
    fontSize: 16,
    cursor:"pointer",
  };

  const sidenavArray = [
    {
      name: "Home",
      href: "home",
    },
    {
      name: "About Me",
      href: "about",
    },
    {
      name: "Resume",
      href: "resume",
    },

    {
      name: "Portfolio",
      href: "portfolio",
    },
    {
      name: "Certifications",
      href: "certifications",
    },
    {
      name: "Testimonial",
      href: "testimonial",
    },
    {
      name: "Contact",
      href: "contact",
    },
  ];

  const goTop=()=>{
    scroll.scrollToTop();
  }

  return (
    <Box sx={{ position: "fixed", zIndex: "2" }}>
      <Paper elevation={0} sx={paperStyle}>
        <Grid container sx={containertyle}>
          <Grid item>
            <Box sx={imageStyle} onClick={goTop}></Box>
            <Typography textAlign="center" sx={textStyle}>
              Janith Ishara
            </Typography>
          </Grid>
          <Grid item style={navTextGrid}>
            {sidenavArray.map((item) => (
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                style={middleTextStyle}
              >
                {item.name}
              </Link>
            ))}
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
