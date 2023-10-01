import React from "react";
import SectionLayout from "../../Common/SectionLayout/SectionLayout";
import { Grid } from "@mui/material";
import "./style.css";
import Education from "../../Components/ResumeSection/Education/Education";
import Experience from "../../Components/ResumeSection/Experience/Experience";
import Skills from "../../Components/ResumeSection/Skills/Skills";

export default function Resume() {
  return (
    <SectionLayout
      heading="SUMMARY"
      topic="Resume"
      bgColor="#F8F9FA"
      id="resume"
    >
      <Grid container spacing={6}>
        <Grid item sm={6}>
          <Education />
        </Grid>

        <Grid item sm={6}>
          <Experience />
        </Grid>
      </Grid>

      <Skills />
    </SectionLayout>
  );
}
