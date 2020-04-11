import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
    height: "64px"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <NavLink
          exact
          style={{ textDecoration: "none", color: "#0E122B", width: "100%" }}
          to="/projects"
        >
          Projects
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink
          style={{ textDecoration: "none", color: "#0E122B" }}
          to="/blogs"
        >
          Blogs
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink
          style={{ textDecoration: "none", color: "#0E122B" }}
          to="/members"
        >
          Members
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink
          style={{ textDecoration: "none", color: "#0E122B" }}
          to="/inductions"
        >
          Inductions
        </NavLink>
      </MenuItem>
      {/* <MenuItem>
        <NavLink
          style={{ textDecoration: "none", color: "#0E122B" }}
          to="/contactus"
        >
          Contact us
        </NavLink>
      </MenuItem> */}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="fixed"
        elevation={1}
        style={{ background: "#0E122B", color: "#ffffff" }}
      >
        <Toolbar>
          <NavLink exact to="/">
            <img
              src="images/logo-alt.webp"
              width="45"
              height="45"
              alt="logo"
              className={classes.logo}
            />
          </NavLink>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <NavLink
              exact
              to="/projects"
              style={{ color: "#DADADE", textDecoration: "none" }}
            >
              <Button
                key="projects"
                color="inherit"
                className={classes.menuButton}
              >
                Projects
              </Button>
            </NavLink>
            <NavLink
              exact
              to="/blogs"
              style={{ color: "#DADADE", textDecoration: "none" }}
            >
              <Button
                key="blogs"
                color="inherit"
                className={classes.menuButton}
              >
                Blogs
              </Button>
            </NavLink>
            <NavLink
              exact
              to="/members"
              style={{ color: "#DADADE", textDecoration: "none" }}
            >
              <Button
                key="members"
                color="inherit"
                className={classes.menuButton}
              >
                Members
              </Button>
            </NavLink>
            <NavLink
              exact
              to="/inductions"
              style={{ color: "#DADADE", textDecoration: "none" }}
            >
              <Button
                key="inductions"
                color="inherit"
                className={classes.menuButton}
              >
                Inductions
              </Button>
            </NavLink>
            {/* <Button
              key="contactUs"
              color="inherit"
              className={classes.menuButton}
              onClick={() => {
                if (document.getElementById("Footer-Contacts")) {
                  document
                    .getElementById("Footer-Contacts")
                    .scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/";
                  document
                    .getElementById("Footer-Contacts")
                    .scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact Us
            </Button> */}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
