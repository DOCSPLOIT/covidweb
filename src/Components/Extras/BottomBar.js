import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import NewsIcon from "@material-ui/icons/AnnouncementOutlined";
import StatusIcon from "@material-ui/icons/Equalizer";
import MediaIcon from "@material-ui/icons/PermMediaOutlined";
// import PredictIcon from "@material-ui/icons/ShowChart";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import { useHistory, useLocation } from "react-router-dom";
import { useViewport } from "./ViewportProvider";

export default function SimpleBottomNavigation() {
  const location = useLocation();
  const history = useHistory();
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

  const [value, setValue] = React.useState(`${location.pathname.replace("/", "")}`);

  useEffect(() => {
    setValue(`${location.pathname.replace("/", "")}`)
    },[location]);

  return (
    <BottomNavigation

      value={value}
      onChange={(event, newValue) => {
        history.push(`/${newValue}`);
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        classes={classes}
        label="Home"
        value=""
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        classes={classes}
        label="Updates"
        value="news"
        icon={<NewsIcon />}
      />
      {/* <BottomNavigationAction
        classes={classes}
        label="Projection"
        value="predict"
        icon={<PredictIcon />}
      /> */}
      <BottomNavigationAction
        classes={classes}
        label="Status"
        value="status"
        icon={<StatusIcon />}
      />

      <BottomNavigationAction
        classes={classes}
        label="Sources"
        value="source"
        icon={<MediaIcon />}
      />
      <BottomNavigationAction
        classes={classes}
        label="About us"
        value="about"
        icon={<InfoIcon />}
      />
    </BottomNavigation>
  );
}
