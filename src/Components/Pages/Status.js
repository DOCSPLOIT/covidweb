import React, { Component } from 'react'
import '../Styles/status.css'
import KeralaStatus from '../Graphs/KeralaStatus'
import IndiaHistory from '../Graphs/IndiaHistory'
import GlobalHistory from '../Graphs/GlobalHistory'
import IndiaStatus from '../Graphs/IndiaStatus'
import GlobalStatus from '../Graphs/GlobalStatus'
import DeathChange from '../Graphs/DeathsChange'
import GIFFB from '../Media/giffb.gif'
import { Paper } from '@material-ui/core'
import logosm from '../Media/logosm.png'
import iedclog from '../Media/iedcw.png'
export default class News extends Component{
    
    render(){
        return(
            <>
            {window.innerWidth>800?
            <div>
                <center>
                <div style={{width:window.innerWidth*.8,marginTop:window.innerHeight*.15}}>
                    <h3>India Cases Till Today</h3>
                    <div style={{marginTop:window.innerHeight*.1}}>
                    <IndiaHistory/>
                    </div>
                    
                </div>
                <div style={{width:window.innerWidth*.8}} >
                    <h3>World Cases Till Today</h3>
                    <GlobalHistory/>
                </div>
                <h3> Total World Death </h3>
                <DeathChange/>
                </center>
                <div style={{display:"flex",marginTop:window.innerHeight*.1,marginLeft:window.innerHeight*.05}}>
            <h2 style={{marginLeft:window.innerHeight*.05}}>Kerala</h2>
            <div style={{marginTop:-window.innerHeight*.2,marginLeft:-window.innerWidth*.12}}>
            <KeralaStatus/>
            </div>
            <h2>India</h2>
            <div style={{marginTop:window.innerHeight*.05,marginLeft:-window.innerWidth*.02}}>
            <IndiaStatus/>
            </div>
                <h2 style={{marginLeft:-window.innerWidth*.01}}>World</h2>
                <div style={{marginTop:window.innerHeight*.05,marginLeft:-window.innerWidth*.03}}>
                <GlobalStatus/>
              
            </div>
            
                </div>
            <center>
                <Paper elevation={4} style={{width:350}}>
                <img src={GIFFB} alt="autedecatre"/>
                </Paper>
               </center>    
                <br/><br/>
                <footer>
                <div className="footer">
                     <br/>
                     <img src={logosm} style={{
                         width:'75px',
                         height:'75px',
                         position:'absolute',
                         marginLeft:"20px"
                     }}/>
                     <center><p style={{color:"white"}}><b style={{fontSize:20}}>Sullamussalam Science College |</b><l style={{fontSize:14}}>Powered By IEDC </l></p></center>
                 </div>
                
                 <img src={iedclog} style={{
                         width:'100px',
                         height:'100px',
                         position:'absolute',
                         marginLeft:window.innerWidth*.9
                     }}/>
             </footer> 
            </div>:
            <div>
                {/* Mobile View */}
                <center>
                <div style={{width:window.innerWidth,height:10,marginTop:window.innerHeight*.15}}>
                    <h3>India Cases By Day</h3>
                    <IndiaHistory/>
                </div>
                <div style={{width:window.innerWidth,height:10,marginTop:window.innerHeight*.6}}>
                    <h3>World Cases By Day</h3>
                    <GlobalHistory/>
                    
                </div>
                <div style={{marginTop:window.innerHeight*.9}}>
                     </div>
                <h3 className="kerala" style={{marginTop:window.innerHeight*.05}}>Kerala</h3>
                <div>
                <KeralaStatus/>
                </div>
              
                <h3 className="kerala" style={{marginTop:window.innerHeight*.05,left:"40%"}}>India</h3>
                <div>
                <IndiaStatus/>
                </div>
                <div>
                    <img src={GIFFB} alt="autedecatre"/>

               </div>
                </center>
                <br/><br/><br/><br/>
                
            </div>
    }
            </>
        )
    }
}