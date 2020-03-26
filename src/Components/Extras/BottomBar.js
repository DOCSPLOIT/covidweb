import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home'
import NewsIcon from '@material-ui/icons/AnnouncementOutlined'
import StatusIcon from '@material-ui/icons/Equalizer'
import MediaIcon from '@material-ui/icons/PermMediaOutlined'
import PredictIcon from '@material-ui/icons/ShowChart'
import {  useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width:"100%",
    marginTop:window.innerHeight,
    color:"white",
    position:"fixed",
    zIndex:99,
    
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
      <BottomNavigationAction onClick={()=>navigate.push("/source")} style={{color:"rgb(0, 31, 58)"}} label="Sources" icon={<MediaIcon/>} />
      <BottomNavigationAction onClick={()=>navigate.push("/predict")} style={{color:"rgb(0, 31, 58)"}} label="Prediction" icon={<PredictIcon/>} />
    </BottomNavigation>
  );
}
