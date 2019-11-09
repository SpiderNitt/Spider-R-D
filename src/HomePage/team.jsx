import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import '../App.css';


function Team() {
  return (
    <div>
    <img src={require('./team.jpg')} style={{borderRadius:20}} width="75% " />
    <br/><br/>
    <Button variant="contained" color="primary">
      View all Members
    </Button>
    </div>
  );
}

export default Team;


// <Typography align="center" variant="h5" gutterBottom><br/>
// Check out our team members right here!<br/>
// </Typography>
