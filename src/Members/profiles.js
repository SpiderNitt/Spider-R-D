import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PublicIcon from '@material-ui/icons/Public';
import AndroidIcon from '@material-ui/icons/Android';
import MemoryIcon from '@material-ui/icons/Memory';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import './members.css'


export default ({ profileName, Profile, onSelect }) => {
  const index = profileName ? Profile.findIndex(group => group === profileName) : 0
  const onIndexSelect = (e, index) =>
    onSelect(Profile[index])

  return (
    <Paper square className='tabs'>
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon tabs example"
        centered
      >
        <Tab icon={<MemoryIcon fontSize="large" />} label="TRONIX" />
        <Tab icon={<PublicIcon fontSize="large" />} label=" WEB DEV" />
        <Tab icon={<AndroidIcon fontSize="large" />} label="APP DEV" />
        <Tab icon={<AccountTreeIcon fontSize="large" />} label="ALGOS" />
      </Tabs>
    </Paper>
  );
}