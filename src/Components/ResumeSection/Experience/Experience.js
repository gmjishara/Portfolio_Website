import React from "react";
import CardComponent from "../../../Common/CardComponent/CardComponent";
import { Grid } from "@mui/material";

export default function Experience() {
  return (
    <div>
      <h2 className="educationHeading">My Experience</h2>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <CardComponent year="2018 January-2018 November">
            <h3>Temporary Teller</h3>
            <h4>Peoples Bank , Walasmulla, Sri Lanka</h4>
            <p className="intro">
              I worked in the Peoples bank of Walasmulla branch as an Assistant
              Sales Manager and I familiarized with banking management system.
            </p>
          </CardComponent>
        </Grid>
        <Grid item sm={12}>
          <CardComponent year="2023 April-Present">
            <h3>Trainee Software Engineer</h3>
            <h4>Hotcat Technologies , Panadura, Sri Lanka</h4>
            <p className="intro">
              I am working in Hotcat Technologies as a trainee software
              engineer. I am working with frontend technologies such as HTML,
              CSS, JavaScript, React js, Material UI, Redux, and REST API for
              facing to real life projects.
            </p>
          </CardComponent>
        </Grid>
      </Grid>
    </div>
  );
}
