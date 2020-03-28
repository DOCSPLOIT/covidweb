import React, { Component } from 'react'
import * as MaterialUI from '@material-ui/core'
import logosm from '../Media/logosm.png'
import iedclog from '../Media/iedcw.png'


export default class Sources extends Component{
    constructor(props){
        super(props);
        this.state={
          
        }
    }
   
    render(){
        return(
            <>
            
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
                <br/>
                whatsapp:  <a style={{fontFamily: 'Poppins,sans-serif',textDecoration:"none"}} href="https://bit.ly/who-covid-19-whatsapp">https://bit.ly/who-covid-19-whatsapp</a>
             <br/><br/>
             
                 <a style={{fontFamily: 'Poppins,sans-serif',textDecoration:"none"}} href="https://www.facebook.com/worldwideengineeringcommunity/videos/502978780383351/">Animated statistics from @world_wide_engineeringcommunity</a>
            <br/><br/>
            <h4>GoK Direct (Goverment of Kerala)</h4>
                 <a style={{fontFamily: 'Poppins,sans-serif',textDecoration:"none"}} href="http://prdlive.kerala.gov.in">http://prdlive.kerala.gov.in</a>
                 <br/><br/>
                 <p>Kerala Live Updates from</p>  <a style={{fontFamily: 'Poppins,sans-serif',textDecoration:"none"}} href="api.covid19india.org">api.covid19india.org</a>
                 <br/><br/>
             </MaterialUI.Paper>
         
             </center>
             <br/><br/>
             
             {
                 window.innerWidth>800?
                 <footer>
                 <div className="footer">
                     
                     <img src={logosm} style={{
                         width:'75px',
                         height:'75px',
                         position:'absolute',
                         marginLeft:"20px",
                         marginTop:'20px'
                     }}/>
                     <center><p style={{color:"white",marginTop:'40px'}}><b style={{fontSize:20}}>Sullamussalam Science College |</b><l style={{fontSize:14}}>Powered By IEDC </l></p></center>
                     <img src={iedclog} style={{
                         width:'100px',
                         height:'100px',
                         position:'absolute',
                         marginLeft:window.innerWidth*.9,
                         marginTop:-75
                     }}/>
                 </div>
             </footer>
             :
             <>
             <br/>
             </>
             }
             
          </div>
         
        </>
          
        )
    }
}