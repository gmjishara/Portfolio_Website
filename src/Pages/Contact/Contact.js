import React from "react";
import SectionLayout from "../../Common/SectionLayout/SectionLayout";
import { Box, Grid, Typography } from "@mui/material";

export default function Contact() {
  return (
    <div>
      <SectionLayout heading="CONTACT" topic="Get in Touch" bgColor="#F8F9FA">
        <Grid container spacing={3}>
          <Grid container spacing={2} sm={4} >
            <Grid item sm={12}>
              <Typography
                style={{ fontSize: "19px", fontWeight: "600", opacity: "0.8" }}
              >
                ADDRESS
              </Typography>
            </Grid>
            <Grid item sm={12}>
              <Typography>Nethmi, Giragahahena,</Typography>
              <Typography>South Kanumuldeniya,</Typography>
              <Typography>Walasmulla,</Typography>
              <Typography>Sri Lanka</Typography>
            </Grid>
            <Grid item sm={12}>
              <Typography>+94 703 446 593,</Typography>
              <Typography>janithishara971231@gmail.com</Typography>
            </Grid>
            <Grid item sm={12}>
              <Typography
                style={{ fontSize: "19px", fontWeight: "550", opacity: "0.8" }}
              >
                FOLLOW ME
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={3} sm={8}></Grid>
        </Grid>
      </SectionLayout>
    </div>
  );
}
