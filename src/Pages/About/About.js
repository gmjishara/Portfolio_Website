import React from "react";
import SectionLayout from "../../Common/SectionLayout/SectionLayout";
import { Box, Divider, Grid } from "@mui/material";
import "./style.css";
import Link from "@mui/material/Link";

export default function About() {
  return (
    <section>
      <Box className="aboutContainer">
        <SectionLayout
          heading="ABOUT ME"
          topic="Know Me More"
          bgColor="white"
          id="about"
        >
          <Grid container spacing={5}>
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              lg={8}
              xl={8}
              className="esseyTxt"
            >
              <h2>
                I'm <span>Janith Ishara</span>, a Web Developer
              </h2>
              <p className="centerTxt">
                I help you build brand for your business at an affordable price.
                Thousands of clients have procured exceptional results while
                working with our dedicated team. when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>
              <p>
                Delivering work within time and budget which meets client’s
                requirements is our moto. Lorem Ipsum has been the industry's
                standard dummy text ever when an unknown printer took a galley.
              </p>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
              className="contactTxt"
            >
              <p>
                <span>Name: </span>Janith Ishara
              </p>
              <Divider />
              <p>
                <span>Email: </span>janithishara971231@gmail.com
              </p>
              <Divider />
              <p>
                <span>Age: </span>26
              </p>
              <Divider />
              <p>
                <span>From: </span>Colombo, Sri Lanka
              </p>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}></Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className="btnContainer">
              <Link href="http://localhost:3000/Resume.pdf" underline="none">
                <button className="btn-contained aboutBtn">Download CV</button>
              </Link>
            </Grid>
          </Grid>
        </SectionLayout>
      </Box>
    </section>
  );
}
