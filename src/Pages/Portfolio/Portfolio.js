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
          <ProjectsCard
            imgUrl={travel}
            link="https://gmjishara.github.io/Travel_Website/"
            github="https://github.com/gmjishara/Travel_Website"
          >
            <Typography style={{ color: "white", fontSize: "18px" }}>
              Travel website using HTML, CSS and JavaScript
            </Typography>
          </ProjectsCard>
        </Grid>
        <Grid item sm={4}>
          <ProjectsCard
            imgUrl={portfolio}
            link="https://gmjishara.github.io/Portfolio_Website/"
            github="https://github.com/gmjishara/Portfolio_Website"
          >
            <Typography style={{ color: "white", fontSize: "18px" }}>
              Portfolio website using React JS and Material UI
            </Typography>
          </ProjectsCard>
        </Grid>
        <Grid item sm={4}>
          <ProjectsCard
            imgUrl={business}
            link="https://gmjishara.github.io/Personal_Business_Web_App/"
            github="https://github.com/gmjishara/Personal_Business_Web_App"
          >
            <Typography style={{ color: "white", fontSize: "18px" }}>
              Personal Business Website using Next JS with MongoDB
            </Typography>
          </ProjectsCard>
        </Grid>
      </Grid>
    </SectionLayout>
  );
}
