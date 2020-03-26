import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home'
import NewsIcon from '@material-ui/icons/AnnouncementOutlined'
import StatusIcon from '@material-ui/icons/Equalizer'
import SourceIcon from '@material-ui/icons/PermMediaOutlined'
import PredictIcon from '@material-ui/icons/ShowChart'
import DrawerIcon from '@material-ui/icons/Menu'
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
    
  });

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h3 style={{
         textAlign:"center",
         fontSize:25,
         
      }}>Covid Updates</h3>
      <Divider />
      <List>
        {['Home', 'News', 'Status', 'Sources','Prediction'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index===0?<HomeIcon style={{color:"rgb(0, 31, 58)"}}/>:index===1?<NewsIcon style={{color:"rgb(0, 31, 58)"}}/>:index===2?<StatusIcon style={{color:"rgb(0, 31, 58)"}}/>:
            index===3?<SourceIcon style={{color:"rgb(0, 31, 58)"}} />:<PredictIcon style={{color:"rgb(0, 31, 58)"}} />
            }</ListItemIcon>
           <Link style={{textDecoration:'none',}} to={
             index===0?'/':index===1?'/news':index===2?'/status':index===3?'/source':'/predict'
           }> <ListItemText style={{color:"rgb(0, 31, 58)"}} primary={text}  /></Link>
          </ListItem>
        ))}
      </List>
      <footer>
                    <div className="footer" style={{
                      marginTop:window.innerHeight*.33
                    }}>
                        <br/>
                        <center><p style={{color:"white"}}><b style={{fontSize:15}}>Sullamussalam Science College </b><l style={{fontSize:14}}>Powered By IEDC </l></p></center>
                    </div>
                </footer>
    </div>
  );

  return (
    <div>
       <DrawerIcon onClick={toggleDrawer('left',true)} style={
         {
           color:"white",
           position:"absolute",
           marginTop:window.innerHeight*.044,
           marginLeft:window.innerWidth*.04,
           zIndex:990
        }
         }/>
 
          <Drawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>  
    </div>
  );
}
