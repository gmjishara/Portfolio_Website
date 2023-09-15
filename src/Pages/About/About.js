import React from "react";
import SectionLayout from "../../Common/SectionLayout/SectionLayout";
import { Box, Divider, Grid } from "@mui/material";
import "./style.css";

export default function About() {
  return (
    <section >
      <Box className="aboutContainer">
        <SectionLayout heading="ABOUT ME" topic="Know Me More" bgColor="white" id="about">
          <Grid container spacing={5}>
            <Grid item sm={8} className="esseyTxt">
              <h2>
                I'm <span>janith Ishara</span>, a Web Developer
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
            <Grid item sm={4} className="contactTxt">
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
              <button className="btn-contained">Download CV</button>
            </Grid>
          </Grid>
        </SectionLayout>
      </Box>
    </section>
  );
}
