import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ToolbarMenu from "./ToolbarMenu";
import { Button, MenuItem } from "@material-ui/core";


const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  function onAboutUs() {
    alert("About Us Clicked");
  }

  function onProjects() {
    alert("Projects Clicked");
  }

  function onBlogs() {
    alert("Blogs Clicked");
  }

  function onMembers() {
    alert("Members Clicked");
  }

  function onContactUs() {
    alert("Contact Us Clicked");
  }

  return (
    <AppBar
      position="fixed"
      className="appbar"
      style={{ background: "#0E122B", color: "#ffffff" }}
    >
      <Toolbar>
        <img src="navlogo.png" width="85" alt="logo" className={classes.logo} />
        <ToolbarMenu
          render={collapsed => {
            return collapsed
              ? [
                  <MenuItem key="login" autoclose={true}>
                    About Us
                  </MenuItem>,
                  <MenuItem key="signup" autoclose={true}>
                    Projects
                  </MenuItem>,
                  <MenuItem key="signup" autoclose={true}>
                    Blogs
                  </MenuItem>,
                  <MenuItem key="signup" autoclose={true}>
                    Members
                  </MenuItem>,
                  <MenuItem key="signup" autoclose={true}>
                    Contact Us
                  </MenuItem>
                ]
              : [
                  <Button
                    key="aboutUs"
                    color="inherit"
                    onClick={onAboutUs}
                    className={classes.menuButton}
                  >
                    About Us
                  </Button>,
                  <Button
                    key="projects"
                    color="inherit"
                    onClick={onProjects}
                    className={classes.menuButton}
                  >
                    Projects
                  </Button>,
                  <Button
                    key="blogs"
                    color="inherit"
                    onClick={onBlogs}
                    className={classes.menuButton}
                  >
                    Blogs
                  </Button>,
                  <Button
                    key="members"
                    color="inherit"
                    onClick={onMembers}
                    className={classes.menuButton}
                  >
                    Members
                  </Button>,
                  <Button
                    key="contacttUs"
                    color="inherit"
                    onClick={onContactUs}
                    className={classes.menuButton}
                  >
                    Contact Us
                  </Button>
                ];
          }}
        />
      </Toolbar>
    </AppBar>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
