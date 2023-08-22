import React from "react";
import CardComponent from "../../../Common/CardComponent/CardComponent";
import { Grid } from "@mui/material";
import "./style.css";

export default function Education() {
  return (
    <div>
      <h2 className="educationHeading">My Education</h2>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <CardComponent year="2017 August">
            <h3>Advanced Level - Physical Science Stream</h3>
            <h4>Walasmulla National Collage, Walasmulla, Sri Lanka</h4>
            <p className="intro">
              Com. Maths - A | Chemistry - A | Physics - C
            </p>
          </CardComponent>
        </Grid>
        <Grid item sm={12}>
          <CardComponent year="2018 December - 2023 April">
            <h3>BSc.(Hons) in Quantity Surveying</h3>
            <h4>University of Moratuwa, Sri Lanka</h4>
            <p className="intro">GPA: 3.34</p>
          </CardComponent>
        </Grid>
        <Grid item sm={12}>
          <CardComponent year="2022 September - 2023 April">
            <h3>Comprehensive Master Java Developer</h3>
            <h4>
              Institute of Software Engineering (IJSE), Panadura, Sri Lanka.
            </h4>
          </CardComponent>
        </Grid>
      </Grid>
    </div>
  );
}
