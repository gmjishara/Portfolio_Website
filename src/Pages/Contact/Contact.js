import React from "react";
import SectionLayout from "../../Common/SectionLayout/SectionLayout";
import { Grid, TextField, Typography } from "@mui/material";
import TextArea from "../../Common/TextArea/TextArea";

export default function Contact() {
  const placeholderStyles = {
    fontWeight: "500",
    fontFamily: "'Poppins',sans-serif",
  };

  const typoStyles = {
    fontFamily: "'Poppins',sans-serif",opacity:0.7,marginBottom:"7px"
  }
  return (
    <div>
      <SectionLayout heading="CONTACT" topic="Get in Touch" bgColor="#F8F9FA">
        <Grid container spacing={8}>
          <Grid item sm={3}>
            <Grid container spacing={3}>
              <Grid item sm={12}>
                <Typography
                  style={{
                    fontSize: "19px",
                    fontWeight: "600",
                    opacity: "0.8",
                    fontFamily: "'Poppins',sans-serif",
                  }}
                >
                  ADDRESS
                </Typography>
              </Grid>
              <Grid item sm={12}>
                <Typography style={typoStyles}>
                  Nethmi, Giragahahena,
                </Typography>
                <Typography style={typoStyles}>
                  South Kanumuldeniya,
                </Typography>
                <Typography style={typoStyles}>
                  Walasmulla,
                </Typography>
                <Typography style={typoStyles}>
                  Sri Lanka
                </Typography>
              </Grid>
              <Grid item sm={12}>
                <Typography style={typoStyles}>
                  +94 703 446 593,
                </Typography>
                <Typography style={typoStyles}>
                  janithishara971231@gmail.com
                </Typography>
              </Grid>
              <Grid item sm={12}>
                <Typography
                  style={{
                    fontSize: "19px",
                    fontWeight: "550",
                    opacity: "0.8",
                    fontFamily: "'Poppins',sans-serif",
                  }}
                >
                  FOLLOW ME
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item sm={9}>
            <Grid container spacing={3}>
              <Grid item sm={12}>
                <Typography
                  style={{
                    fontSize: "19px",
                    fontWeight: "600",
                    opacity: "0.8",
                  }}
                >
                  SEND US A NOTE
                </Typography>
              </Grid>
              <Grid item sm={6}>
                <TextField
                  fullWidth
                  placeholder="Name"
                  style={{ backgroundColor: "#FFFFFF" }}
                  inputProps={{ style: placeholderStyles }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  fullWidth
                  placeholder="Email"
                  style={{ backgroundColor: "#FFFFFF" }}
                  inputProps={{ style: placeholderStyles }}
                />
              </Grid>
              <Grid item sm={12}>
                <TextArea placeholder="Tell us more about your needs........"/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </SectionLayout>
    </div>
  );
}
