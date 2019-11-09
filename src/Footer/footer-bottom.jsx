import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import indigo from '@material-ui/core/colors/indigo';

const colour = indigo[800];

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  palette: {
      primary: {
      main: '#393855',
    }
  },
  menuButton: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(5),
  },
  title: {
    flexGrow: 1,
  },
  onhover:{
    boxshadow: '0px 0px 2px 1px #000000',
  },

}));

export default function FooterBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{background:'#0D1329'}}>
        <Toolbar>
          <Typography variant="center" className={classes.title}>
          <b style={{padding:20}}>Weaved with &#128376; by Spider</b>
          </Typography>

        </Toolbar>
      </AppBar>
    </div>
  );
}
