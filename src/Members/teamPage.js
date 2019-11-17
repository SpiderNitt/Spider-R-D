import React, { Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import Avatar from '@material-ui/core/Avatar';

import LanguageIcon from '@material-ui/icons/Language';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';


const styles = {
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200,
  },
}

export default ({ members, profileName, yearName }) =>
  <Fragment>
    <Grid container spacing={6} alignItems="center" justify="center" className="grid">
      {members.filter(member => member.Profile === profileName).filter(member => member.Year === yearName)
        .map(member =>
          <Grid item xl={3} key={member.id} align="center" data-aos="flip-left">
            <Card className="card">
              <br />
              <div className="image">
                <Avatar alt={member.Name} src={member.Photo} style={styles.bigAvatar} />
              </div>
              <Grid item xs={12} align="center" >
                <Typography variant="h5" className='memberName'>{member.Name}</Typography>
              </Grid>
              <br />
              <div className="details">
                <div className="links">
                  {member.LinkedIn ? <a href={member.LinkedIn}><IconButton className="button linkedInIcon"><LinkedInIcon fontSize="large" style={{ fill: '#000000' }} /></IconButton></a> : <IconButton className="button linkedInIcon"><LinkedInIcon fontSize="large" style={{ fill: '#000000' }} /></IconButton>} <br />
                  {member.Github ? <a href={member.Github}><IconButton className="button githubIcon"><GitHubIcon fontSize="large" style={{ fill: '#000000 ' }} /></IconButton></a> : <IconButton className="button githubIcon"><GitHubIcon fontSize="large" style={{ fill: '#000000' }} /></IconButton>} <br />
                  {member.Website ? <a href={member.Website}><IconButton className="button webIcon" ><LanguageIcon fontSize="large" style={{ fill: '#000000' }} /></IconButton></a> : <IconButton className="button webIcon" ><LanguageIcon fontSize="large" style={{ fill: '#000000' }} /></IconButton>}
                </div>
              </div>
            </Card>
          </Grid>)}

    </Grid>
  </Fragment>



