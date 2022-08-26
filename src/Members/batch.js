import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default ({ yearName, Year, onSelect }) => {
  const index = yearName ? Year.findIndex((group) => group === yearName) : 0;

  const onIndexSelect = (e, index) => onSelect(Year[index]);

  return (
    <Paper className="tabs" style={{ backgroundColor: "white" }}>
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        <Tab label="2022-23" />
        <Tab label="2023-24" />
        <Tab label="MCA 2021-22" />
      </Tabs>
    </Paper>
  );
};
