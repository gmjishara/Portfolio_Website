import React from "react";
import SectionLayout from "../../Common/SectionLayout/SectionLayout";
import { Grid, Typography } from "@mui/material";
import CertificateCard from "../../Common/CertificateCard/CertificateCard";
import css from "../../images/css.png";
import react from "../../images/react.jpg";
import javascript from "../../images/javascript.jpg";
import java from "../../images/java.png";
import python from "../../images/python.jpg";
import mysql from "../../images/mysql.jpg";

export default function Certifications() {
  return (
    <section>
      <SectionLayout
        heading="CERTIFICATIONS"
        topic="My Certificates"
        bgColor="#F8F9FA"
        id="certifications"
      >
        <Grid container spacing={3}>
          <Grid item sm={4}>
            <CertificateCard imgUrl={css}>
              <Typography style={{ fontSize: "20px" }}>
                CSS Certificate
              </Typography>
              <Typography>HackerRank</Typography>
            </CertificateCard>
          </Grid>
          <Grid item sm={4}>
            <CertificateCard imgUrl={react}>
              <Typography style={{ fontSize: "20px" }}>
                React JS - Basic to Advanced
              </Typography>
              <Typography>Udemy</Typography>
            </CertificateCard>
          </Grid>
          <Grid item sm={4}>
            <CertificateCard imgUrl={javascript}>
              <Typography style={{ fontSize: "20px" }}>
                JavaScript for Beginners
              </Typography>
              <Typography>Udemy</Typography>
            </CertificateCard>
          </Grid>
          <Grid item sm={4}>
            <CertificateCard imgUrl={java}>
              <Typography style={{ fontSize: "20px" }}>
                Java Programming (Basics)
              </Typography>
              <Typography>HackerRank</Typography>
            </CertificateCard>
          </Grid>
          <Grid item sm={4}>
            <CertificateCard imgUrl={python}>
              <Typography style={{ fontSize: "20px" }}>
                Python for Beginners
              </Typography>
              <Typography>University of Moratuwa</Typography>
            </CertificateCard>
          </Grid>
          <Grid item sm={4}>
            <CertificateCard imgUrl={mysql}>
              <Typography style={{ fontSize: "18px" }}>
                MySQL Database Development Mastery
              </Typography>
              <Typography>Udemy</Typography>
            </CertificateCard>
          </Grid>
        </Grid>
      </SectionLayout>
    </section>
  );
}
