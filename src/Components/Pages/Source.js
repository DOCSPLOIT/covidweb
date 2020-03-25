import React, { Component } from 'react'
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
             <h1 style={{fontFamily: 'Poppins,sans-serif'}}>Helpful Sources</h1>
             <MaterialUI.Paper elevation={3} style={{fontFamily: 'Poppins,sans-serif',width:window.innerWidth>800?window.innerWidth*.6:window.innerWidth,borderRadius:5}}>
            <h4> Ministry of Health and Family Welfare</h4>
                 <a style={{fontFamily: 'Poppins,sans-serif',textDecoration:"none"}} href="https://www.mohfw.gov.in/">https://www.mohfw.gov.in/</a>
            
            
            <h4 style={{fontFamily: 'Poppins,sans-serif'}}>Real Time World Statistics</h4>
                 <a style={{fontFamily: 'Poppins,sans-serif',textDecoration:"none"}} href="https://www.worldometers.info">https://www.worldometers.info</a>
            
             
            <h4 style={{fontFamily: 'Poppins,sans-serif'}}> World Health Organization</h4>
                 <a style={{fontFamily: 'Poppins,sans-serif',textDecoration:"none"}} href="https://www.who.int/">https://www.who.int/</a>
          
             <br/><br/>
             
                 <a style={{fontFamily: 'Poppins,sans-serif',textDecoration:"none"}} href="https://www.facebook.com/worldwideengineeringcommunity/videos/502978780383351/">Animated statistics from @world_wide_engineeringcommunity</a>
            <br/><br/>
             </MaterialUI.Paper>
           
             </center>
             <footer>
                 <div className="footer" style={{marginTop:window.innerHeight*.26}}>
                     <center><p style={{fontFamily: 'Poppins,sans-serif',fontWeight:"bold",color:"white"}}>IEDC SSCOLLEGE, Areekode</p></center>
                 </div>
             </footer>
          </div>
         
        
          
        )
    }
}