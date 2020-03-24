import React, { Component } from 'react'
import GlobalStatus from '../Graphs/GlobalStatus'
import IndiaStatus from '../Graphs/IndiaStatus';
import { url } from '../Configure';
import '../Styles/home.css'
export default class News extends Component{

    constructor(props){
        super(props);
    this.state={
       indiaTdeath:0,
       worldTdeath:0,
       worldTcases:0,
       indiaTcases:0,
       worldRecover:0,
       indiaRecover:0,

    }    
    }
    
    componentDidMount() { 
     fetch(`${url}/reportsIndia`).then(r=>r.json())
     .then(res=>{
         this.setState({indiaTcases:res['TotalCases'],
                indiaTdeath:res['TotalDeaths'],
                indiaRecover:res['TotalRecovered']
        })
     })
     fetch(`${url}/globalStatus`).then(r=>r.json())
     .then(res=>{
         this.setState({worldTcases:res['cases'],
                worldRecover:res['recovered'],
                worldTdeath:res['deaths']
        })
     })
 }
 
    render(){
        
        return(
            <>
           {window.innerWidth>800?<div style={{marginTop:100,width:"100%"}} >
           
                <div style={{display:"flex",marginLeft:"25%"}}>
                    <div>
                <h5 className="tdeath">Total Cases</h5>

<p className="text">India   :  {this.state.indiaTcases}</p>
<p className="text" style={{lineHeight:12}}>World:  {this.state.worldTcases}</p>
</div>
<div style={{marginLeft:window.innerWidth*.2}}>
            <h5 className="tdeath">Total Deaths</h5>

        <p className="text">India   :  {this.state.indiaTdeath}</p>
        <p className="text" style={{lineHeight:12}}>World:  {this.state.worldTdeath}</p>
        </div>
        <div style={{marginLeft:window.innerWidth*.2}}>
            <h5 className="tdeath">Total Recovered</h5>

        <p className="text">India   :  {this.state.indiaRecover}</p>
        <p className="text" style={{lineHeight:12}}>World:  {this.state.worldRecover}</p>
        </div>
            
            
            </div>
            <div style={{display:"flex",marginTop:200,marginLeft:"15%"}}>
            <h2 style={{marginLeft:20}}>India</h2>
            <IndiaStatus/>
            
                <h2 style={{marginLeft:20}}>World </h2>
                <GlobalStatus/>
                </div>
                <footer>
                 <div className="footer">
                     <center><p style={{fontWeight:"bold",color:"white"}}>IEDC SSCOLLEGE, Areekode</p></center>
                 </div>
             </footer>
            </div>:
            
            <div>
                <center>
            <div>
                <h5 style={{
                    marginTop:"25%",
                    fontSize:25,

                }} >Total Cases</h5>
                <p style={{
                    fontSize:22
                }}>India :{this.state.indiaTcases}</p>
                <p style={{ 
                    fontSize:22,
                    
                }} >World :{this.state.worldTcases}</p>
                
                <h5 style={{
                    fontSize:25,

                }} >Total Deaths</h5>
                <p style={{
                    fontSize:22
                }}>India :{this.state.indiaTdeath}</p>
                <p style={{ 
                    fontSize:22,
                    
                }} >World :{this.state.worldTdeath}</p>
                
                <h5 style={{
                    fontSize:25,

                }} >Total Recovered</h5>
                 <p style={{
                    fontSize:22
                }}>India :{this.state.indiaRecover}</p>
                <p style={{ 
                    fontSize:22,
                    
                }} >World :{this.state.worldRecover}</p>
               
            </div>
            </center>
            <h3 style={{marginLeft:"10%",fontSize:25}}>India</h3>
            <center> <IndiaStatus/></center> 
            <h3 style={{marginLeft:"10%",fontSize:25}}>World</h3>
            <GlobalStatus/>
             <br/>...<br/>...
            </div>
            }
            </>
        )
    }
}

