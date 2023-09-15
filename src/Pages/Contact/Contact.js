import React from "react";
import SectionLayout from "../../Common/SectionLayout/SectionLayout";
import { Grid, TextField, Typography } from "@mui/material";
import TextArea from "../../Common/TextArea/TextArea";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import linkedin from "../../images/linkedin.svg";
import github from "../../images/github.svg";
import "./style.css";

export default function Contact() {
  const placeholderStyles = {
    fontWeight: "500",
    fontFamily: "'Poppins',sans-serif",
  };

  const typoStyles = {
    fontFamily: "'Poppins',sans-serif",
    opacity: 0.7,
    marginBottom: "7px",
  };

  const flexStyles = {
    display: "flex",
    alignItems: "center",
    gap: 1,
  };

  return (
    <SectionLayout
      heading="CONTACT"
      topic="Get in Touch"
      bgColor="#F8F9FA"
      id="contact"
    >
      <Grid container spacing={15}>
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
              <Typography style={typoStyles}>Nethmi, Giragahahena,</Typography>
              <Typography style={typoStyles}>South Kanumuldeniya,</Typography>
              <Typography style={typoStyles}>Walasmulla,</Typography>
              <Typography style={typoStyles}>Sri Lanka</Typography>
            </Grid>
            <Grid item sm={12}>
              <Typography style={typoStyles} sx={flexStyles}>
                <PhoneIcon sx={{ color: "#20C997" }} />
                +94 703 446 593,
              </Typography>
              <Typography style={typoStyles} sx={flexStyles}>
                <EmailIcon sx={{ color: "#20C997" }} />
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
              <div className="icons">
                <img src={facebook} alt="fb" width={25} height={25} />
                <img src={twitter} alt="tw" width={25} height={25} />
                <img src={linkedin} alt="fb" width={25} height={25} />
                <img src={github} alt="fb" width={30} height={30} />
              </div>
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
              <TextArea placeholder="Tell us more about your needs........" />
            </Grid>
            <Grid
              item
              sm={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button className="btn-contained">Send Message</button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </SectionLayout>
  );
}
