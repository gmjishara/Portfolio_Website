import "./App.css";
import SideNavbar from "./Components/SideNavbar/SideNavbar";
import Box from "@mui/material/Box";
import Main from "./Components/Main/Main";
import DenseAppBar from "./Components/DenseAppBar/DenseAppBar";

function App() {
  return (
    <div>
      <DenseAppBar />
      <Box sx={{ display: "flex" }}>
        <SideNavbar />
        <Main />
      </Box>
    </div>
  );
}

export default App;
