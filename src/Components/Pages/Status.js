import React, { Component } from 'react'
import '../Styles/status.css'
import KeralaStatus from '../Graphs/KeralaStatus'
import IndiaHistory from '../Graphs/IndiaHistory'
import GlobalHistory from '../Graphs/GlobalHistory'
import IndiaStatus from '../Graphs/IndiaStatus'
import GlobalStatus from '../Graphs/GlobalStatus'
import Death from '../Graphs/Death'


export default class News extends Component{
    
    render(){
        return(
            <>
            {window.innerWidth>800?
            <div>
                <div style={{display:'flex'}}>
                <h3 className="kerala" style={{marginLeft:window.innerWidth*.065}}>Kerala</h3>
                <KeralaStatus/>
                <h3 className="kerala" style={{marginLeft:window.innerWidth*.385}}>India</h3>
                <div style={{marginTop:window.innerHeight*.25}}>
                <IndiaStatus/>
                </div>
                <h3 className="kerala" style={{marginLeft:window.innerWidth*.70}}>World</h3>
                <div style={{marginTop:window.innerHeight*.25}}>
                <GlobalStatus/>
                </div>
                </div>
                <center>
                <div style={{width:window.innerWidth*.8}}>
                    <h3>India Cases By Day</h3>
                    <div style={{marginTop:window.innerHeight*.1}}>
                    <IndiaHistory/>
                    </div>
                    
                </div>
                <div style={{width:window.innerWidth*.8}} >
                    <h3>World Cases By Day</h3>
                    <GlobalHistory/>
                </div>
                </center>
                <footer>
                 <div className="footer">
                     <center><p style={{fontWeight:"bold",color:"white"}}>IEDC SSCOLLEGE, Areekode</p></center>
                 </div>
             </footer> 
            </div>:
            <div>
                {/* Mobile View */}
                <center>
                <h3 className="kerala" style={{left:"40%"}}>Kerala</h3>
                <div style={{marginTop:window.innerHeight*.25}}>
                <KeralaStatus/>
                </div>
                <h3 className="kerala" style={{marginTop:window.innerHeight*.60,left:"40%"}}>India</h3>
                <div style={{marginTop:window.innerHeight*.1}}>
                <IndiaStatus/>
                </div>
                <div style={{width:window.innerWidth,height:10,marginTop:window.innerHeight*.1}}>
                    <h3>India Cases By Day</h3>
                    <IndiaHistory/>
                </div>
                <div style={{width:window.innerWidth,height:10,marginTop:window.innerHeight*.6}}>
                    <h3>World Cases By Day</h3>
                    <GlobalHistory/>
                    <br/><br/><br/>
                </div>

                </center>
                
            </div>
    }
            </>
        )
    }
}