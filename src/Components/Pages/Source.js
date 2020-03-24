import React, { Component } from 'react'
import Player from 'video-react/lib/components/Player';
import FBVideo from '../Media/video1.mp4'
import * as MaterialUI from '@material-ui/core'
export default class Sources extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
          <div style={{marginTop:window.innerHeight*.15}}>
              <center>
             <h1>Helpful Sources</h1>
             <MaterialUI.Paper elevation={3} style={{width:window.innerWidth*.6,borderRadius:5}}>
            <h4> Ministry of Health and Family Welfare</h4>
                 <a style={{textDecoration:"none"}} href="https://www.mohfw.gov.in/">https://www.mohfw.gov.in/</a>
             </MaterialUI.Paper>
             <MaterialUI.Paper elevation={3} style={{width:window.innerWidth*.6,borderRadius:5}}>
            <h4>Real Time World Statistics</h4>
                 <a style={{textDecoration:"none"}} href="https://www.worldometers.info">https://www.worldometers.info</a>
             </MaterialUI.Paper>
             <MaterialUI.Paper elevation={3} style={{width:window.innerWidth*.6,borderRadius:5}}>
            <h4> World Health Organization</h4>
                 <a style={{textDecoration:"none"}} href="https://www.who.int/">https://www.who.int/</a>
             </MaterialUI.Paper>
             <br/>
             <MaterialUI.Paper elevation={3} style={{width:window.innerWidth*.6,borderRadius:5}}>
                 
                 <a style={{textDecoration:"none"}} href="https://www.facebook.com/worldwideengineeringcommunity/videos/502978780383351/">Animated Statistics</a>
             </MaterialUI.Paper>
             </center>
             <footer>
                 <div className="footer" style={{marginTop:window.innerHeight*.26}}>
                     <center><p style={{fontWeight:"bold",color:"white"}}>IEDC SSCOLLEGE, Areekode</p></center>
                 </div>
             </footer>
          </div>
          
        )
    }
}