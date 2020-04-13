import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import GeneralFaq from './QA_General.js'
import WebFaq from './QA_WebDev.js'
import AppFaq from './QA_AppDev.js'
import TronixFaq from './QA_Tronix.js'
import AlgosFaq from './QA_Algos.js'
import "./inductions.css"


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="GENERAL" {...a11yProps(0)} />
          <Tab label="TRONIX" {...a11yProps(1)} />
          <Tab label="WEBDEV" {...a11yProps(2)} />
          <Tab label="APPDEV" {...a11yProps(3)} />
          <Tab label="ALGOS" {...a11yProps(4)} />
         
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} >
      <GeneralFaq/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <TronixFaq/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <WebFaq/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <AppFaq/>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <AlgosFaq/>
      </TabPanel>
    </div>
  );
}
