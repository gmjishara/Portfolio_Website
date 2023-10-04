import React from "react";
import SectionLayout from "../../Common/SectionLayout/SectionLayout";
import ProjectsCard from "../../Common/ProjectsCard/ProjectsCard";
import { Grid, Typography } from "@mui/material";
import travel from "../../images/travel_site.png";
import portfolio from "../../images/portfolio_site.png";
import business from "../../images/business_site.png";

export default function Portfolio() {
  return (
    <SectionLayout
      heading="PORTFOLIO"
      topic="My Projects"
      bgColor="#ffffff"
      id="portfolio"
    >
      <Grid container spacing={3}>
        <Grid item sm={4}>
          <ProjectsCard imgUrl={travel}>
            <Typography style={{ color: "white", fontSize: "18px" }}>
              Travel website using HTML, CSS and JavaScript
            </Typography>
          </ProjectsCard>
        </Grid>
        <Grid item sm={4}>
          <ProjectsCard imgUrl={portfolio}>
            <Typography style={{ color: "white", fontSize: "18px" }}>
              Real estate website using React js and Material UI
            </Typography>
          </ProjectsCard>
        </Grid>
        <Grid item sm={4}>
          <ProjectsCard imgUrl={business}>
            <Typography style={{ color: "white", fontSize: "18px" }}>
              Social media dashboard using React js, Material UI and Laravel
            </Typography>
          </ProjectsCard>
        </Grid>
      </Grid>
    </SectionLayout>
  );
}
