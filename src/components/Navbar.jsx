import * as React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import "./Navbar.css";
import logo from "../assets/logoIjo.svg";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "./providers/AuthProvider";
import { Link } from "react-router-dom";

function ResponsiveAppBar() {
  const { logout } = useAuth();
  const [anchor, setAnchor] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [anchorNav, setAnchorNav] = React.useState(null);
  const [openNav, setOpenNav] = React.useState(false);

  const handleOpen = (e) => {
    setAnchor(e.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchor(null);
    setOpen(false);
  };
  const handleOpenNav = (e) => {
    setAnchorNav(e.currentTarget);
    setOpenNav(true);
  };
  const handleCloseNav = () => {
    setAnchor(null);
    setOpenNav(false);
  };

  return (
    <AppBar className="navbar">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* FullWidth Menu */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
          }}
          className="logo"
        >
          <Link to="/">
            <Button color="inherit" href="/">
              <img src={logo} />
              Hybroponic
            </Button>
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
          }}
          className="menu"
        >
          <Link to="/">
            <Button color="inherit">Dashboard</Button>
          </Link>
          <Link to="/history">
            <Button color="inherit">History</Button>
          </Link>
          <Link to="/system">
            <Button color="inherit">Setting</Button>
          </Link>
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
            <Link to="/profile">
              <MenuItem>Profile</MenuItem>
            </Link>
            <span onClick={logout}>
              <MenuItem>Logout</MenuItem>
            </span>
          </Menu>
        </Box>

        {/* Responsive */}
        <IconButton
          sx={{
            display: { xs: "flex", md: "none" },
          }}
          onClick={handleOpenNav}
          id="menu-appbar"
          aria-controls={open ? "basic-menu" : undefined}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorNav}
          open={openNav}
          onClose={handleCloseNav}
        >
          <MenuItem>
            <Button color="inherit" href="/">
              Dashboard
            </Button>
          </MenuItem>
          <MenuItem>
            <Button color="inherit" href="/history">
              History
            </Button>
          </MenuItem>
          <MenuItem>
            <Button color="inherit" href="/system">
              Setting
            </Button>
          </MenuItem>
        </Menu>

        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
          }}
          className="logo"
        >
          <Button color="inherit" href="/">
            <img src={logo} />
            Hybroponic
          </Button>
        </Box>
        <IconButton
          sx={{ display: { xs: "flex", md: "none" } }}
          id="account-menu"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleOpen}
        >
          <AccountCircle />
        </IconButton>
        {/* <Menu
          id="account-menu"
          anchorEl={anchor}
          open={open}
          onClose={handleClose}
        >
          <MenuItem>Profile</MenuItem>
          <a onClick={logout}>
            <MenuItem>Logout</MenuItem>
          </a>
        </Menu> */}
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
