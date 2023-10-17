import "./App.css";
import SideNavbar from "./Components/SideNavbar/SideNavbar";
import Box from "@mui/material/Box";
import Main from "./Components/Main/Main";
import DenseAppBar from "./Components/DenseAppBar/DenseAppBar";
import { useState } from "react";
import { Grid } from "@mui/material";

function App() {
  const [visible, setVisible] = useState("none");
  return (
    <div>
      <DenseAppBar visible={visible} setVisible={setVisible} />

      <Grid container >
        <Grid item xl={2.1} lg={2.1} md={0} sm={0} xs={0}>
          <SideNavbar visible={visible} />
        </Grid>
        <Grid item xl={9.9} lg={9.9} md={12} sm={12} xs={12}>
          <Main />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
