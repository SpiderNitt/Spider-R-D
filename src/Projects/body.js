import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import ProjectItems from './blocks.js'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  encl: {
    padding: 30
  }
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div style={{ background: "#E2E2E2" }}>
      <ProjectItems />
    </div>

  );
}
