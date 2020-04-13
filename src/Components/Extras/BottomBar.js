import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import NewsIcon from "@material-ui/icons/AnnouncementOutlined";
import StatusIcon from "@material-ui/icons/Equalizer";
import MediaIcon from "@material-ui/icons/PermMediaOutlined";
import PredictIcon from "@material-ui/icons/ShowChart";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import { useHistory } from "react-router-dom";
import { useViewport } from "./ViewportProvider";

export default function SimpleBottomNavigation() {
  const navigate = useHistory();
  const { width} = useViewport();
  const useStyles = makeStyles({
    root: {
      padding: "4px  6px",
      minWidth: width * 0.168,
      color: "white",
      backgroundColor: "rgb(0, 31, 58)",
      "&$selected": {
        paddingTop: 6,
        color: "rgb(0, 31, 58)",
        backgroundColor: "white",
      },
    },
    selected: {},
  });
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        onClick={() => navigate.push("/")}
        classes={classes}
        label="Home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        onClick={() => navigate.push("/news")}
        classes={classes}
        label="Updates"
        icon={<NewsIcon />}
      />
      <BottomNavigationAction
        onClick={() => navigate.push("/predict")}
        classes={classes}
        label="Projection"
        icon={<PredictIcon />}
      />
      <BottomNavigationAction
        onClick={() => navigate.push("/status")}
        classes={classes}
        label="Status"
        icon={<StatusIcon />}
      />

      <BottomNavigationAction
        onClick={() => navigate.push("/source")}
        classes={classes}
        label="Sources"
        icon={<MediaIcon />}
      />
      <BottomNavigationAction
        onClick={() => navigate.push("/about")}
        classes={classes}
        label="About us"
        icon={<InfoIcon />}
      />
    </BottomNavigation>
  );
}
