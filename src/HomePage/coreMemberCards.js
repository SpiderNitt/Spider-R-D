import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core'

import LanguageIcon from '@material-ui/icons/Language';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneIcon from '@material-ui/icons/Phone';
import IconButton from '@material-ui/core/IconButton';
import core from './coreMembersData.json'
import './coreStyles.css';

export default function CoreMembers() {

  return (
    <div>
      <Grid container spacing={6} alignItems="center" justify="center" className="coreGrid">
        {core.map(members =>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3} align="center">
            <Card className="coreCard">
              <CardActionArea>
                <img className="coreIma" src={members.Photo} alt={members.Name} height="280x" width="100%" />
                <CardContent>
                  <Typography variant="h5" component="h2" className="coreName">
                    {members.Name}
                  </Typography>
                  <Typography variant="h5" component="h2" className="coreRole">
                    {members.Role}
                  </Typography>
                  <a href={members.LinkedIn}><IconButton className="coreIcon"><LinkedInIcon fontSize="large" style={{ fill: ' #000000' }} /></IconButton></a>
                  <a href={members.Github}><IconButton className="coreIcon"><GitHubIcon fontSize="large" style={{ fill: ' #000000' }} /></IconButton></a>
                  <a href={members.Website}><IconButton className="coreIcon"><LanguageIcon fontSize="large" style={{ fill: ' #000000' }} /></IconButton></a><br />
                  {members.Contact ? <IconButton className="coreIcon"><PhoneIcon fontSize="small" style={{ fill: ' #000000' }} /><Typography style={{ color: '#000000' }}>{members.Contact}</Typography></IconButton> : ""}
                </CardContent>
              </CardActionArea>
            </Card>
            <br />
          </Grid>
        )}
      </Grid>
    </div>
  );
}
