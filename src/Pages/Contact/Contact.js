import React from "react";
import SectionLayout from "../../Common/SectionLayout/SectionLayout";
import { Grid, TextField, Typography } from "@mui/material";
import TextArea from "../../Common/TextArea/TextArea";

export default function Contact() {
  const placeholderStyles = {
    fontWeight: "500",
    fontFamily: "'Poppins',sans-serif",
  };
  return (
    <div>
      <SectionLayout heading="CONTACT" topic="Get in Touch" bgColor="#F8F9FA">
        <Grid container spacing={8}>
          <Grid item sm={3}>
            <Grid container spacing={2}>
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
                <Typography style={{ fontFamily: "'Poppins',sans-serif" }}>
                  Nethmi, Giragahahena,
                </Typography>
                <Typography style={{ fontFamily: "'Poppins',sans-serif" }}>
                  South Kanumuldeniya,
                </Typography>
                <Typography style={{ fontFamily: "'Poppins',sans-serif" }}>
                  Walasmulla,
                </Typography>
                <Typography style={{ fontFamily: "'Poppins',sans-serif" }}>
                  Sri Lanka
                </Typography>
              </Grid>
              <Grid item sm={12}>
                <Typography style={{ fontFamily: "'Poppins',sans-serif" }}>
                  +94 703 446 593,
                </Typography>
                <Typography style={{ fontFamily: "'Poppins',sans-serif" }}>
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
