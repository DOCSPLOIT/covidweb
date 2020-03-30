import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import NewsIcon from "@material-ui/icons/AnnouncementOutlined";
import StatusIcon from "@material-ui/icons/Equalizer";
import MediaIcon from "@material-ui/icons/PermMediaOutlined";
import PredictIcon from "@material-ui/icons/ShowChart";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: window.innerWidth,
    color: "black",
    backgroundColor: "rgb(0, 31, 58)"
  }
});

export default function SimpleBottomNavigation() {
  const navigate = useHistory();
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        onClick={() => navigate.push("/")}
        style={{ color: "white" }}
        label="Home"
        icon={<HomeIcon style={{ color: "white" }} />}
      />
      <BottomNavigationAction
        onClick={() => navigate.push("/news")}
        style={{ color: "white" }}
        label="Updates"
        icon={<NewsIcon />}
      />
      <BottomNavigationAction 
      onClick={() => navigate.push("/predict")} 
      style={{ color: "white" }} 
      label="Projection" 
      icon={<PredictIcon />}
       />
      <BottomNavigationAction
        onClick={() => navigate.push("/status")}
        style={{ color: "white" }}
        label="Status"
        icon={<StatusIcon />}
      />

      <BottomNavigationAction
        onClick={() => navigate.push("/source")}
        style={{ color: "white" }}
        label="Sources"
        icon={<MediaIcon />}
      />
    </BottomNavigation>
  );
}
