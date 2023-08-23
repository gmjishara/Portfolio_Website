import React from "react";
import SectionLayout from "../../Common/SectionLayout/SectionLayout";
import { Grid, Typography } from "@mui/material";
import CertificateCard from "../../Common/CertificateCard/CertificateCard";
import css from "../../images/css.png"
import react from "../../images/react.jpg"
import javascript from "../../images/javascript.jpg"
import java from "../../images/java.png"
import python from "../../images/python.jpg"
import mysql from "../../images/mysql.jpg"

export default function Certifications() {
  return (
    <div>
      <SectionLayout
        heading="CERTIFICATIONS"
        topic="My Certificates"
        bgColor="#F8F9FA"
      >
        <Grid container spacing={3}>
          <Grid item sm={4}>
            <CertificateCard imgUrl={css} >
                <Typography>CSS Certificate</Typography>
                <Typography>HackerRank</Typography>
            </CertificateCard>
          </Grid>
          <Grid item sm={4}>
            <CertificateCard imgUrl={react} >
            <Typography>React JS - Basic to Advanced</Typography>
                <Typography>Udemy</Typography>
            </CertificateCard>
          </Grid>
          <Grid item sm={4}>
            <CertificateCard imgUrl={javascript} >
            <Typography>JavaScript for Beginners</Typography>
                <Typography>Udemy</Typography>
            </CertificateCard>
          </Grid>
          <Grid item sm={4}>
            <CertificateCard imgUrl={java}>
            <Typography>Java Programming (Basics)</Typography>
                <Typography>HackerRank</Typography>
            </CertificateCard>
          </Grid>
          <Grid item sm={4}>
            <CertificateCard imgUrl={python}>
            <Typography>Python for Beginners</Typography>
                <Typography>University of Moratuwa</Typography>
            </CertificateCard>
          </Grid>
          <Grid item sm={4}>
            <CertificateCard imgUrl={mysql}>
            <Typography>MySQL Database Development Mastery</Typography>
                <Typography>Udemy</Typography>
            </CertificateCard>
          </Grid>
        </Grid>
      </SectionLayout>
    </div>
  );
}
