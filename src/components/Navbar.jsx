import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { IconButton, Menu, MenuItem } from "@mui/material";
import "./Navbar.css";
import logo from "../assets/logoIjo.svg";
import { useAuth } from "./providers/AuthProvider";

function ResponsiveAppBar() {
  const { logout } = useAuth();
  const [anchor, setAnchor] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleOpen = (e) => {
    setAnchor(e.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchor(null);
    setOpen(false);
  };

  return (
    <AppBar className="navbar">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }} className="logo">
          <Button color="inherit" href="/">
            <img src={logo} />
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
          <Button color="inherit" href="/setting" disabled>
            Setting
          </Button>
          <IconButton
            id="account-menu"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleOpen}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="account-menu"
            anchorEl={anchor}
            open={open}
            onClose={handleClose}
          >
            <MenuItem>Profile</MenuItem>
            <a onClick={logout}>
              <MenuItem>Logout</MenuItem>
            </a>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
