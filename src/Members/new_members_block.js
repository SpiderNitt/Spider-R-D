import React, { Component, Fragment } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import ProfileName from './profiles'
import Batch from './batch'
import { Profile, Year, members } from './spider_members'
import TeamPage from './teamPage'
import './new_members.css'

const styles = theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 6),
    marginBottom:0
  },
  root: {
    fontFamily: "raleway",
    fontWeight: "bold",
    flexGrow: 1
  },
  default: {
    fontFamily: "raleway",
  },
  cardGrid: {
    paddingLeft: '180px',
    paddingRight: '180px',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
});


class MembersBlock extends Component {

    constructor(props) {
    super(props)
    this.state = {
      profileName: 'Tronix',
      yearName: 'All',
      Profile, Year, members
    }
  }

  getData() {
    setTimeout(() => {
      this.setState({
        profileName: 'Web Dev'
      })
    }, 500)
  }

  componentDidMount() {
    this.getData();
  }


  handleProfileSelected = profileName => {
    this.setState({
      profileName
    })
  }


  handleYearSelected = yearName => {
    this.setState({
      yearName
    })
  }

  render()
  {
    const { profileName, yearName } = this.state;
    const {classes} = this.props;

  return (
    <Fragment>
      <CssBaseline />
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" className={classes.root} gutterBottom>
              Members
              </Typography>
            <div className={classes.heroButtons}>
              <ProfileName
            profileName={profileName}
            Profile={Profile}
            onSelect={this.handleProfileSelected} />
          <br/>
          <Batch
            yearName={yearName}
            Year={Year}
            onSelect={this.handleYearSelected} />
          <br/>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='xl'>
        <br/>
          <TeamPage
            members={members}
            profileName={profileName}
            yearName={yearName}
          />
        </Container>
        <br/><br/>
    </Fragment>
  )}
}

export default withStyles(styles, {withTheme: true})(MembersBlock);