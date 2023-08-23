import React from "react";
import "./style.css";
import ProgressBar from "@ramonak/react-progress-bar";

export default function SkillBar({ language, percentage }) {
  return (
    <div className="skillBar">
      <div className="skillText">
        <h4>{language}</h4>
        <h4>{percentage}%</h4>
      </div>

      <ProgressBar
        completed={percentage}
        maxCompleted={100}
        customLabel=" "
        bgColor="#20C997"
        height="10px"
      />
    </div>
  );
}
