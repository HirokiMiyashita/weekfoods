import React from "react";
import { MenuType } from "../../data/TypeData";
import Image from "next/image";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps, i: any) {
  const { children, value, index, ...other } = props;
  console.log(i);
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
          <Typography>{children}</Typography>
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
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
}));

export const WeeksData = (props: any) => {
  const LunchMenu = props.day.Lunch.menu;
  const DinnerMenu = props.day.Dinner.menu;
  const MoningMenu = props.day.Morning.menu;

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const Morning = () => {
    return (
      <>
        <p
          key={props.day.Morning.id}
          style={{ textAlign: "center", fontSize: "1.8rem" }}
        >
          {MoningMenu.main}
        </p>
        <div
          style={{
            position: "relative",
            width: "300px",
            height: "300px",
            margin: "0 auto",
          }}
        >
          <Image src={MoningMenu.img} width={100} height={100} layout="fill" />
        </div>
      </>
    );
  };
  const Lunch = () => {
    return (
      <>
        <p key={props.day.Lunch.id}>{LunchMenu.main}</p>
        <div style={{ position: "relative", width: "100px", height: "100px" }}>
          <Image src={LunchMenu.img} width={100} height={100} layout="fill" />
        </div>
      </>
    );
  };
  const Dinner = () => {
    return (
      <>
        <p key={props.day.Dinner.id}>{DinnerMenu.main}</p>
        <div style={{ position: "relative", width: "100px", height: "100px" }}>
          <Image src={DinnerMenu.img} width={100} height={100} layout="fill" />
        </div>
      </>
    );
  };
  // 4 <= hour && hour < 10
  console.log(props.hour);
  const Foodtime = () => {
    switch (true) {
      case 4 <= props.hour || props.hour >= 9:
        return <Morning />;
      case 10 <= props.hour || props.hour >= 14:
        return <Lunch />;
      case 15 <= props.hour || props.hour >= 20:
        return <Dinner />;
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
          {Foodtime()}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};
