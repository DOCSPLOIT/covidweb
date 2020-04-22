import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import NewsIcon from "@material-ui/icons/AnnouncementOutlined";
import StatusIcon from "@material-ui/icons/Equalizer";
import SourceIcon from "@material-ui/icons/PermMediaOutlined";
import PredictIcon from "@material-ui/icons/ShowChart";
import DrawerIcon from "@material-ui/icons/Menu";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import {useViewport} from "./ViewportProvider";


export default function TemporaryDrawer() {

  const { width, height } = useViewport();

  const useStyles = makeStyles({
    list: {
      width: 250,
      height: height
    },
    fullList: {
      width: "auto"
    }
  });

  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {" "}
      <footer>
        <div
          style={{
            position: "absolute",
            backgroundColor: "#001F3A",
            bottom: 0,
            left: 0
          }}
        >
          <center>
            <a href="http://sscollege.ac.in" style={{ textDecoration: "none" }}>
              <p style={{ color: "white" }}>
                <b style={{ fontSize: 15 }}>Sullamussalam Science College </b>
                <i style={{ fontSize: 14 }}>Powered By IEDC </i>
              </p>
            </a>
          </center>
        </div>
      </footer>
      <h3
        style={{
          textAlign: "center",
          fontSize: "1.2rem"
        }}
      >
        Covid-19 Updates
      </h3>
      <Divider />
      <List>
        {["Home", "Updates", "Status", "Sources", "About"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {
                  index===0?
                  <HomeIcon/>:
                  index===1?
                  <NewsIcon/>:
                  index===2?
                  <PredictIcon/>:
                  index===3?
                  <StatusIcon/>:
                  index===4?
                  <SourceIcon/>:
                  <InfoIcon/>
                }
              </ListItemIcon>
              <Link
                style={{ textDecoration: "none" }}
                to={
                  index===0?
                  '/':
                  index===1?
                  '/news':
                  index===2?
                  '/status':
                  index===3?
                  '/source':
                  '/about'
                }
              >
                {" "}
                <ListItemText
                  style={{ color: "rgb(0, 31, 58)" }}
                  primary={text}
                />
              </Link>
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  return (
    <div>
      <DrawerIcon
        onClick={toggleDrawer("left", true)}
        style={{
          color: "white",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          marginLeft: width * 0.04,
          zIndex: 990
        }}
      />

      <Drawer
        style={{ height: 10 }}
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
}
