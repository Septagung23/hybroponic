import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import "./Navbar.css";

function ResponsiveAppBar() {
  return (
    <AppBar className="navbar">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <AdbIcon />
          <Button>
            <h3>Hybroponic</h3>
          </Button>
        </div>
        <div>
          <Button color="inherit">Dashboard</Button>
          <Button color="inherit">History</Button>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
