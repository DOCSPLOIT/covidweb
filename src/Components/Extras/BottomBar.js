import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home'
import NewsIcon from '@material-ui/icons/AnnouncementOutlined'
import StatusIcon from '@material-ui/icons/ShowChart'
import {  useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width:"100%",
    marginTop:window.innerHeight*.91,
    color:"white"
  },
});

export default function SimpleBottomNavigation() {
  const navigate=useHistory();
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
      <BottomNavigationAction onClick={()=>navigate.push("/")} style={{color:"rgb(0, 31, 58)"}} label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction onClick={()=>navigate.push("/news")} style={{color:"rgb(0, 31, 58)"}} label="News" icon={<NewsIcon />} />
      <BottomNavigationAction onClick={()=>navigate.push("/status")} style={{color:"rgb(0, 31, 58)"}} label="Status" icon={<StatusIcon />} />
    </BottomNavigation>
  );
}
