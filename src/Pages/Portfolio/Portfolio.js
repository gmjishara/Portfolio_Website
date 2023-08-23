import React from "react";
import SectionLayout from "../../Common/SectionLayout/SectionLayout";
import ProjectsCard from "../../Common/ProjectsCard/ProjectsCard";
import { Grid, Typography } from "@mui/material";
import travel from "../../images/travel.jpg";
import realEstate from "../../images/real_estate.jpg"
import dashboard from "../../images/dashboard.jpg"

export default function Portfolio() {
  return (
    <div>
      <SectionLayout heading="PORTFOLIO" topic="My Projects" bgColor="#ffffff">
        <Grid container spacing={3}>
          <Grid item sm={4}>
            <ProjectsCard imgUrl={travel} >
                <Typography style={{color:"white", fontSize:"18px"}}>Travel website using HTML, CSS and JavaScript</Typography>
            </ProjectsCard>
          </Grid>
          <Grid item sm={4}>
            <ProjectsCard imgUrl={realEstate} >
            <Typography style={{color:"white",fontSize:"18px"}}>Real estate website using React js and Material UI</Typography>
            </ProjectsCard>
          </Grid>
          <Grid item sm={4}>
            <ProjectsCard imgUrl={dashboard} >
            <Typography style={{color:"white",fontSize:"18px"}}>Social media dashboard using React js, Material UI and Laravel</Typography>
            </ProjectsCard>
          </Grid>
        </Grid>
      </SectionLayout>
    </div>
  );
}
