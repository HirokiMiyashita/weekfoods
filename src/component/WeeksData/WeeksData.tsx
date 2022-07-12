import React from "react";
import { MenuType } from "../../data/TypeData";
import Image from "next/image";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { MorningName, LunchName, DinnerName } from "../Food/FoodName";
import { MorningMake, LunchMake, DinnerMake } from "../Food/FoodMake";
import {
  MorningMaterial,
  LunchMaterial,
  DinnerMaterial,
} from "../Food/FoodMaterial";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps, i: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <p>{children}</p>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "#D8B484",
    width: "100%",
  },
}));

export const WeeksData = (props: any) => {
  const LunchMenu = props.name.Lunch.menu;
  const DinnerMenu = props.name.Dinner.menu;
  const MoningMenu = props.name.Morning.menu;
  const LMake = props.make.Lunch;
  const DMake = props.make.Dinner;
  const MMake = props.make.Morning;
  const MMaterial = props.material.Morning;
  const LMaterial = props.material.Lunch;
  const DMaterial = props.material.Dinner;
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const Hour = 11;

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const Foodname = () => {
    switch (true) {
      case 6 <= props.hour && 9 >= props.hour:
        return <MorningName name={MoningMenu} />;
      case 10 <= props.hour && 14 >= props.hour:
        return <LunchName name={LunchMenu} />;
      case 15 <= props.hour && 20 >= props.hour:
        return <DinnerName name={DinnerMenu} />;
      default:
        return <p>食べるな殺すぞ</p>;
    }
  };
  const Foodmake = () => {
    switch (true) {
      case 6 <= props.hour && 9 >= props.hour:
        return <MorningMake make={MMake} />;
      case 10 <= props.hour && 14 >= props.hour:
        return <LunchMake make={LMake} />;
      case 15 <= props.hour && 20 >= props.hour:
        return <DinnerMake make={DMake} />;
      default:
        return <p>食べるな殺すぞ</p>;
    }
  };
  const Foodmaterial = () => {
    switch (true) {
      case 6 <= props.hour && 9 >= props.hour:
        return <MorningMaterial material={MMaterial} />;
      case 10 <= props.hour && 14 >= props.hour:
        return <LunchMaterial material={LMaterial} />;
      case 15 <= props.hour && 20 >= props.hour:
        return <DinnerMaterial material={DMaterial} />;
      default:
        return <p>食べるな殺すぞ</p>;
    }
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="料理説明" {...a11yProps(0)} />
          <Tab label="作り方" {...a11yProps(1)} />
          <Tab label="材料" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div style={{ height: "100vh" }}>{Foodname()}</div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div>{Foodmake()}</div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <div style={{ height: "100vh" }}>{Foodmaterial()}</div>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};
