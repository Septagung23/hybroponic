import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import "./Navbar.css";

function ResponsiveAppBar() {
  return (
    <AppBar className="navbar">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }} className="logo">
          <AdbIcon />
          <Button color="inherit" href="/">
            Hybroponic
          </Button>
        </div>
        <div className="menu">
          <Button color="inherit" href="/">
            Dashboard
          </Button>
          <Button color="inherit" href="/history">
            History
          </Button>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
