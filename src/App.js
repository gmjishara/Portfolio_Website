import logo from "./logo.svg";
import "./App.css";
import SideNavbar from "./Components/SideNavbar/SideNavbar";
import Box from "@mui/material/Box";
import Main from "./Components/Main/Main";

function App() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <SideNavbar />
        <Main />
      </Box>
    </div>
  );
}

export default App;
