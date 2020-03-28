import React, { Component } from 'react'
import '../Styles/status.css'
import IndiaHistory from '../Graphs/IndiaHistory'
import GlobalHistory from '../Graphs/GlobalHistory'
import DeathChange from '../Graphs/DeathsChange'
import GIFFB from '../Media/giffb.gif'
import { Paper } from '@material-ui/core'
import logosm from '../Media/logosm.png'
import iedclog from '../Media/iedcw.png'
import DistrictWise from '../Graphs/DistrictWise'
import { url } from '../Configure'
import Loader from '../Extras/Loader'
export default class News extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoading:false

        }
    }
    componentDidMount(){
        fetch(`${url}/statusPage`).then(r=>r.json())
        .then(res=>{
            this.setState({isLoading:true})
        })
    }
    
    render(){
        return(
            <>
            {this.state.isLoading===true?<div>
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
              <br/> <br/> 
               <Paper elevation={10} style={{marginLeft:window.innerWidth*.25
                ,width:window.innerWidth*.52}}>
                    <br/>
                    <h3 style={{textAlign:"center"}}>Kerala DistrictWise Confirmed Cases</h3>
               <DistrictWise/>
               <br/>
               <p style={{fontFamily:'Lato',fontSize:12,color:'gray',textAlign:"center"}}>*data updated in reference with covid19india.com</p>
                   <br/>
                   </Paper>  

                <br/><br/>
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
                <Paper elevation={10} style={{
            width:window.innerWidth,marginTop:window.innerHeight*.9}}>
                    <br/>
                    <h3 style={{textAlign:"center"}}>Kerala DistrictWise Confirmed Cases</h3>
                    <br/>
               <DistrictWise/>
               <br/>
               <p style={{fontFamily:'Lato',fontSize:12,color:'gray'}}>*data updated in reference with covid19india.com</p>
                   </Paper>  
                <div>
                <br/><br/>
                    <img src={GIFFB} alt="autedecatre"/>

               </div>
                </center>
                <br/><br/><br/><br/>
                
            </div>
    }   </div>:<Loader/>}
            </>
        )
    }
}