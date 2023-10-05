import "./App.css";
import SideNavbar from "./Components/SideNavbar/SideNavbar";
import Box from "@mui/material/Box";
import Main from "./Components/Main/Main";
import DenseAppBar from "./Components/DenseAppBar/DenseAppBar";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState("none");
  return (
    <div>
      <DenseAppBar visible={visible} setVisible={setVisible} />
      <Box sx={{ display: "flex" }}>
        <SideNavbar visible={visible}/>
        <Main />
      </Box>
    </div>
  );
}

export default App;
