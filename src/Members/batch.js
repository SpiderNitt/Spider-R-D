import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


export default ({ yearName, Year, onSelect }) => {

  const index = yearName ? Year.findIndex(group => group === yearName) : 0

  const onIndexSelect = (e, index) =>
    onSelect(Year[index])

  return (
    <Paper className='tabs' style={{ backgroundColor: "#E2E2E2" }}>
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        <Tab label="2019-20" />
        <Tab label="2020-21" />
        <Tab label="2021-22" />
      </Tabs>
    </Paper>
  );
}