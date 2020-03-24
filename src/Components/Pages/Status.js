import React, { Component } from 'react'
import '../Styles/status.css'
import KeralaStatus from '../Graphs/KeralaStatus'
import IndiaTStatus from '../Graphs/IndiaTStatus'
import IndiaHistory from '../Graphs/IndiaHistory'
import GlobalStatus from '../Graphs/GlobalStatus'
import GlobalHistory from '../Graphs/GlobalHistory'
export default class News extends Component{
    
    render(){
        return(
            <div>
                <div style={{display:'flex'}}>
                <h3 className="kerala">Kerala</h3>
                <KeralaStatus/>
                <h3 className="kerala" style={{marginLeft:"50%"}}>India</h3>
                <IndiaTStatus/>
                </div>
                <center>
                <div style={{width:"75%",height:10}}>
                    <h3>India Cases By Day</h3>
                    <IndiaHistory/>
                </div>
                </center>
                <div>
                    <h3 className="kerala">World</h3>
                    <div style={{marginTop:"30%",marginLeft:"5%"}}>
                        <GlobalHistory/>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}