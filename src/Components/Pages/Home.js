import React, { Component } from 'react'
import GlobalStatus from '../Graphs/GlobalStatus'
import IndiaStatus from '../Graphs/IndiaStatus';
import { url } from '../Configure';
import '../Styles/home.css'
import KeralaStatus from '../Graphs/KeralaStatus';
import * as MaterialUI from '@material-ui/core'
import StateWise from '../Graphs/StateWise';
import { Animated } from 'react-animated-css';
import logosm from '../Media/logosm.png'
import iedclog from '../Media/iedcw.png'
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
       globalPredict:[],
       indiaPredict:[],
       keralaTdeath:0,
       keralaTCases:0,
       keralaRecover:0
    }    
    }
    UNSAFE_componentWillMount(){
        console.log(new Date().getTime());
        
        fetch(`https://covid19regression.herokuapp.com/predict/${new Date().getTime()}/2`)
        .then(r=>r.json())
        .then(res=>{
            this.setState({indiaPredict:res['india'][0]['prediction'],
           globalPredict:res['global'][0]['prediction']
           })
           
        })
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
     fetch(`${url}/stateWiseData/Kerala`).then(r=>r.json())
     .then(res=>{
         this.setState({
           keralaTCases:  parseInt(res['Total Confirmed cases (Indian National)'])+parseInt(res['Total Confirmed cases ( Foreign National )']),
           keralaRecover: parseInt(res['Cured/Discharged/Migrated']),
            keralaTdeath: parseInt(res['Death'])
     })
     })
     
 }
 
    render(){
        let day=new Date();
        day=day.toDateString();
        
        
        
        return(
            <>
           {window.innerWidth>800?
               <div style={{marginTop:100,width:"100%"}} >
                  
                <div style={{display:"flex",marginLeft:"25%"}}>
              
                    
                    <MaterialUI.Paper elevation={10} style={{width:200,height:250}}>
                        <center>
                            <Animated animationIn="fadeIn" animationInDuration={2000}>
                <h5 className="tdeath" style={{color:"#117cb9"}}>Total Cases</h5>
<p className="text">Kerala   :  {this.state.keralaTCases}</p>
<p className="text">India   :  {this.state.indiaTcases}</p>
<p className="text">World:  {this.state.worldTcases}</p>
<p style={{fontFamily:'Lato',fontSize:12,color:'gray'}}>*data updated in reference with MoHFW</p>
</Animated>
</center>
</MaterialUI.Paper>
<MaterialUI.Paper elevation={10} style={{width:200,height:250,marginLeft:"5%"}} >
    <center><Animated animationIn="fadeIn" animationInDuration={4000}>
            <h5 className="tdeath" style={{color:"#d13838"}}>Total Deaths</h5>
        <p className="text">Kerala   :  {this.state.keralaTdeath}</p>
        <p className="text">India   :  {this.state.indiaTdeath}</p>
        <p className="text">World:  {this.state.worldTdeath}</p>
        <p style={{fontFamily:'Lato',fontSize:12,color:'gray'}}>*data updated in reference with MoHFW</p>
        </Animated>
        
        </center>
        </MaterialUI.Paper>
        <MaterialUI.Paper elevation={10} style={{width:200,height:250,marginLeft:"5%"}} >
            <center><Animated animationIn="fadeIn" animationInDuration={6000}>
            <h5 className="tdeath" style={{color:"#35dd81"}}>Total Recovered</h5>

        <p className="text">Kerala:  {this.state.keralaRecover}</p>
        <p className="text">India   :  {this.state.indiaRecover}</p>
        <p className="text">World:  {this.state.worldRecover}</p>
        <p style={{fontFamily:'Lato',fontSize:12,color:'gray'}}>*data updated in reference with MoHFW</p>
        </Animated>
        </center>
        </MaterialUI.Paper>
            </div>
           
            <div style={{display:"flex",marginTop:window.innerHeight*.1}}>
            <h2 style={{marginLeft:window.innerHeight*.05}}>Kerala</h2>
            <div style={{marginTop:-window.innerHeight*.2,marginLeft:-window.innerHeight*.25}}>
            <KeralaStatus/>
            </div>
            <h2 style={{textAlign:"center"}}>India</h2>
            <div style={{marginTop:window.innerHeight*.05,marginLeft:-window.innerHeight*.05}}>
            <IndiaStatus/>
            </div>
                <h2 style={{marginLeft:5}}>World</h2>
                <div style={{marginTop:window.innerHeight*.05,marginLeft:-window.innerHeight*.07}}>
                <GlobalStatus/>
              
            </div>
                </div>
                
                <br/>
                <h3 style={{marginLeft:window.innerWidth*.4}}>StateWise Reports(India)</h3>
                <StateWise/>
                <center>
    <MaterialUI.Paper  elevation={10} style={{
        backgroundColor:"#4f5a90",
        width:200,height:350,
       position:"absolute",
       zIndex:99,marginLeft:window.innerWidth*.83,marginTop:-window.innerHeight
        }} >
           <br/>
            <h3 style={{color:"white"}}>Our Today's Prediction</h3>
    <p style={{color:"white"}}>On {'\n'} Confirming Cases</p>
    <p style={{color:"white"}}>{day}</p>
        <p style={{color:"white"}}>India </p>
    <b style={{color:"white",fontSize:25}}>{this.state.indiaPredict}</b>
        <p style={{color:"white"}}>World</p>
        <b style={{color:"white",fontSize:25}}>{this.state.globalPredict}</b>
        <br/><br/>
        <a style={{color:"white",fontSize:15}} href="/predict">More</a>
            
       
    </MaterialUI.Paper>
    </center>
    
    
   <br/><br/><br/>
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
                     <img src={iedclog} style={{
                         width:'100px',
                         height:'100px',
                         position:'absolute',
                         marginLeft:window.innerWidth*.9,
                         marginTop:-75
                     }}/>
                 </div>
             </footer>
            </div>:
            
            <div>
                {/*Mobile View is below*/}
                
                <center>
                    <br/> <br/> <br/> <br/> <br/>
            <div>
                <Animated animationIn="fadeIn" animationInDuration={2500}>
            <MaterialUI.Paper style={{
                    backgroundColor:"#117cb9",

                }}>
                    <br/>
            <h3 style={{
                    
                   color:"white"
                }} >Total Cases</h3>
                <div style={{display:"flex"}}>
                <p style={{color:"white",marginRight:window.innerWidth*.1,marginLeft:window.innerWidth*.23}}>Kerala</p>
                <p style={{ color:"white",marginRight:window.innerWidth*.1}}>India</p>
                <p style={{ color:"white"}} >World</p>
                </div>
                <div style={{display:"flex"}}>
                <b style={{color:"white",marginRight:window.innerWidth*.1,
                marginLeft:window.innerWidth*.22,fontSize:25}}>{this.state.keralaTCases}</b>
                <b style={{fontSize:25, color:"white",marginRight:window.innerWidth*.09}}>{this.state.indiaTcases}</b>
                <b style={{fontSize:25, color:"white"}} >{this.state.worldTcases}</b>
                </div>
                <p style={{fontFamily:'Lato',fontSize:12,color:'white'}}>*data updated in reference with MoHFW</p>
                <br/>
                </MaterialUI.Paper>
                </Animated>
                <br/>
                <Animated animationIn="fadeInUp" animationInDuration={4500}>
                <MaterialUI.Paper style={{
                    backgroundColor:"#d13838",

                }}>
                    <br/>
            <h3 style={{
                    
                   color:"white"
                }} >Total Death</h3>
                <div style={{display:"flex"}}>
                <p style={{color:"white",marginRight:window.innerWidth*.1,marginLeft:window.innerWidth*.23}}>Kerala</p>
                <p style={{ color:"white",marginRight:window.innerWidth*.1}}>India</p>
                <p style={{ color:"white"}} >World</p>
                </div>
                <div style={{display:"flex"}}>
                <b style={{color:"white",marginRight:window.innerWidth*.15,
                marginLeft:window.innerWidth*.25,fontSize:25}}>{this.state.keralaTdeath}</b>
                <b style={{fontSize:25, color:"white",marginRight:window.innerWidth*.09}}>{this.state.indiaTdeath}</b>
                <b style={{fontSize:25, color:"white"}} >{this.state.worldTdeath}</b>
                </div>
                <p style={{fontFamily:'Lato',fontSize:12,color:'white'}}>*data updated in reference with MoHFW</p>
                <br/>
                </MaterialUI.Paper>
                </Animated>
                <br/>
                <Animated animationIn="fadeInUp" animationInDuration={6500}>
                <MaterialUI.Paper style={{
                    backgroundColor:"#07552a",

                }}>
                    <br/>
            <h3 style={{
                    
                   color:"white"
                }} >Total Recovered</h3>
                <div style={{display:"flex"}}>
                <p style={{color:"white",marginRight:window.innerWidth*.1,marginLeft:window.innerWidth*.23}}>Kerala</p>
                <p style={{ color:"white",marginRight:window.innerWidth*.1}}>India</p>
                <p style={{ color:"white"}} >World</p>
                </div>
                <div style={{display:"flex"}}>
                <b style={{color:"white",marginRight:window.innerWidth*.15,
                marginLeft:window.innerWidth*.25,fontSize:25}}>{this.state.keralaRecover}</b>
                <b style={{fontSize:25, color:"white",marginRight:window.innerWidth*.09}}>{this.state.indiaRecover}</b>
                <b style={{fontSize:25, color:"white"}} >{this.state.worldRecover}</b>
                </div>
                <p style={{fontFamily:'Lato',fontSize:12,color:'white'}}>*data updated in reference with MoHFW</p>
                <br/>
                </MaterialUI.Paper>
                </Animated>
            </div>
            <Animated animationIn="fadeInUp" animationInDuration={8500}>
            <h3>Statewise Reports (India)</h3>
                <StateWise/>
                </Animated>
            </center>
            <h3 style={{textAlign:"center",fontSize:25}}>Kerala</h3>
            <center><KeralaStatus/> </center> 
            <h3 style={{textAlign:"center",fontSize:25}}>India</h3>
            <center> <IndiaStatus/></center> 
            <h3 style={{textAlign:"center",fontSize:25}}>World</h3>
            <center><GlobalStatus/></center>
            
            <MaterialUI.Paper elevation={10} style={{
        backgroundColor:"#4f5a90",
        width:window.innerWidth,height:280,
        alignSelf:"center",
       
        }} >
            <br/>
          <center>  <h3 style={{color:"white"}}>Our Today's Prediction</h3>
    <i>{}</i>
          <p style={{color:"white"}}>On Confirming Cases</p>
          <div style={{display:"flex"}}>
        <p style={{color:"white",marginRight:window.innerWidth*.2,marginLeft:window.innerWidth*.3}}>India</p>
        <p style={{color:"white"}}>World</p>
        </div>
        <div style={{display:"flex"}}>
    <b style={{color:"white",fontSize:25,marginLeft:window.innerWidth*.29,marginRight:window.innerWidth*.15}}>{this.state.indiaPredict}</b>
       
        <b style={{color:"white",fontSize:25}}>{this.state.globalPredict}</b>
        </div>
        <br/><br/>
        <a style={{color:"white",fontSize:15}} href="/predict">More</a>
        </center>
    </MaterialUI.Paper>
    <br/><br/><br/>
            </div>
            }
            </>
        )
    }
}

