import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
    height: "64px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleProfileMenuOpen = event => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
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
        <a
          style={{ textDecoration: "none", color: "#0E122B" }}href="/projects">
          Projects
        </a>
      </MenuItem>
      <MenuItem>
        <a style={{ textDecoration: "none", color: "#0E122B" }} href="/blogs">
          Blogs
        </a>
      </MenuItem>
      <MenuItem>
        <a style={{ textDecoration: "none", color: "#0E122B" }} href="/members">
          Members
        </a>
      </MenuItem>
      <MenuItem>
        <a
          style={{ textDecoration: "none", color: "#0E122B" }}
          href="/contactus"
        >
          Contact us
        </a>
      </MenuItem>
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
          <a href="/">
            <img
              src="logo-alt.png"
              width="45"
              height="45"
              alt="logo"
              className={classes.logo}
            />
          </a>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button
              key="projects"
              color="inherit"
              href="/projects"
              className={classes.menuButton}
            >
              Projects
            </Button>
            <Button
              key="blogs"
              color="inherit"
              href="/blogs"
              className={classes.menuButton}
            >
              Blogs
            </Button>
            <Button
              key="members"
              color="inherit"
              href="/members"
              className={classes.menuButton}
            >
              Members
            </Button>
            <Button
              key="contactUs"
              color="inherit"
              // href="/contacts"
              className={classes.menuButton}
              onClick={() => {
                document
                  .getElementById("Footer-Contacts")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Us
            </Button>
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
