import { Grid } from "@mui/material";
import React from "react";
import "./style.css";
import SkillBar from "../../../Common/SkillBar/SkillBar";
import DownloadIcon from "@mui/icons-material/Download";
import Link from "@mui/material/Link";

export default function Skills() {
  return (
    <div style={{ marginTop: "40px" }}>
      <h2 className="educationHeading">My Skills</h2>
      <Grid container spacing={6}>
        <Grid item sm={6}>
          <h3 className="techs">Front-end Technologies</h3>
          <SkillBar language="HTML/CSS" percentage="85" />
          <SkillBar language="JavaScript" percentage="70" />
          <SkillBar language="React Js" percentage="75" />
          <SkillBar language="Redux" percentage="65" />
          <SkillBar language="Bootstrap" percentage="65" />
          <SkillBar language="Material UI" percentage="75" />
          <SkillBar language="Next Js" percentage="75" />
        </Grid>

        <Grid item sm={6}>
          <h3 className="techs">Back-end Technologies</h3>
          <SkillBar language="Java" percentage="80" />
          <SkillBar language="Python" percentage="65" />
          <SkillBar language="Laravel" percentage="65" />
          <SkillBar language="Spring boot" percentage="50" />
          <SkillBar language="MySQL" percentage="75" />
          <SkillBar language="Rest API" percentage="70" />
          <SkillBar language="Mongodb" percentage="75" />
        </Grid>

        <Grid
          item
          sm={12}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "-20px",
          }}
        >
          <Link href="http://localhost:3000/Resume.pdf" underline="none">
            <button className="btn-outlined-ash">
              Download CV
              <DownloadIcon />
            </button>
          </Link>
          ;
        </Grid>
      </Grid>
    </div>
  );
}
