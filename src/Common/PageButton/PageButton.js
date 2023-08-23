import React from "react";
import "./style.css";
import { makeStyles } from "@mui/material";

export default function PageButton({ text }) {
  // const btnStyle = makeStyles((theme) => ({
  //   button: {
  //     width: "145px",
  //     height: "48px",
  //     marginTop: "10px",
  //     color: `${color}`,
  //     fontSize: "16px",
  //     fontWeight: "500",
  //     borderRadius: "30px",
  //     border: `2px solid ${color}`,
  //     background: "transparent",
  //     cursor: "pointer",
  //     '&hover': {
  //       backgroundColor:`${color}`,
  //     }
  //   },

  // }));
  return <button className="btn">{text}</button>;
}
