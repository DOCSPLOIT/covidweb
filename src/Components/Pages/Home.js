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
import Loader from '../Extras/Loader';
import DistrictWiseBar from '../Graphs/DistrictWiseBar';


export default class News extends Component{

    constructor(props){
        super(props);
    this.state={
        data:[],
       indiaTdeath:0,
       worldTdeath:0,
       worldTcases:0,
       indiaTcases:0,
       worldRecover:0,
       indiaRecover:0,
       globalPredict:0,
       indiaPredict:0,
       keralaPredict:0,
       keralaTdeath:0,
       keralaTCases:0,
       keralaRecover:0,
       stateWiseRecover:0,
       isLoading:false
    }    
    }
    componentDidMount(){
        
        
        fetch(`${url}/homePage`)
        .then(r=>r.json())
        .then(res=>{
           let ksumreccover=parseInt(res['kerala']["Total Confirmed cases (Indian National)"])+
                         parseInt(res['kerala']['Total Confirmed cases ( Foreign National )'])
               this.setState({
                   keralaPredict:res['prediction']['arr'][0][0],
                   indiaPredict:res['prediction']['arr'][0][1],
                   globalPredict:res['prediction']['arr'][0][2],
                   keralaRecover:res['kerala']["Cured/Discharged/Migrated"],
                   keralaTdeath:res['kerala']['Death'],
                   indiaRecover:res['india']['TotalRecovered'],
                   indiaTdeath:res['india']['TotalDeaths'],
                   worldRecover:res['global']['recovered'],
                   worldTdeath:res['global']['deaths'],
                   keralaTCases:ksumreccover,
                   worldTcases:res['global']['cases'],
                   indiaTcases:res['india']['TotalCases'],
                   isLoading:true
               })
             const sdata=res['stateWiseData'];
             
             sdata.pop();
             sdata.pop();
             this.setState({data:sdata})
             
             
        })
       
    }
     
   



    render(){
        let day=new Date();
        day=day.toDateString();
        let kd=this.state.keralaTdeath
        let kr=this.state.keralaRecover
        let kc=this.state.keralaTCases
        
        
        return(
            <>
            {this.state.isLoading===true?<div>
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
            <KeralaStatus cases={kc} deaths={parseInt(kd)} recovered={parseInt(kr)} />
            </div>
            <h2 style={{textAlign:"center"}}>India</h2>
            <div style={{marginTop:window.innerHeight*.05,marginLeft:-window.innerHeight*.05}}>
            <IndiaStatus cases={parseInt(this.state.indiaTcases)} deaths={parseInt(this.state.indiaTdeath)} recovered={parseInt(this.state.indiaRecover)} />
            </div>
                <h2 style={{marginLeft:5}}>World</h2>
                <div style={{marginTop:window.innerHeight*.05,marginLeft:-window.innerHeight*.07}}>
                <GlobalStatus cases={parseInt(this.state.worldTcases)} deaths={parseInt(this.state.worldTdeath)} recovered={parseInt(this.state.worldRecover)} />
              
            </div>
                </div>
                
                <br/>
                <h3 style={{marginLeft:window.innerWidth*.4}}>StateWise Reports(India)</h3>
               <div style={{display:"flex"}}>
                <StateWise/>
               
                <center>
    <MaterialUI.Paper  elevation={10} style={{
        backgroundColor:"#4f5a90",
        width:200,
       position:"absolute",
       zIndex:99,marginLeft:window.innerWidth*.02,marginTop:window.innerHeight*.2}}>
           <br/>
            <h3 style={{color:"white"}}>Our Today's Prediction</h3>
    <p style={{color:"white"}}>On {'\n'} Confirming Cases</p>
    <p style={{color:"white"}}>{day}</p>
    <p style={{color:"white"}}>Kerala </p>
    <b style={{color:"white",fontSize:25}}>{this.state.keralaPredict}</b>
        <p style={{color:"white"}}>India </p>
    <b style={{color:"white",fontSize:25}}>{this.state.indiaPredict}</b>
        <p style={{color:"white"}}>World</p>
        <b style={{color:"white",fontSize:25}}>{this.state.globalPredict}</b>
        <br/><br/>
        <a style={{color:"white",fontSize:15}} href="/predict">More</a>
          <br/>  <br/><br/>
       
    </MaterialUI.Paper>
    </center>
    
    </div>
    <br/>
    <center>
    <MaterialUI.Paper style={{width:window.innerWidth*.8}} elevation={10}>
        <br/>
              <h3>Districtwise Confirmed Reports (Kerala)</h3>
                <DistrictWiseBar/>
                <br/>
                <p style={{fontFamily:'Lato',fontSize:12,color:'gray',textAlign:"center"}}>*data updated in reference with covid19india.org</p>
                <br/>
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
              <MaterialUI.Paper elevation={10}>
              <h3>Districtwise Confirmed Reports (Kerala)</h3>
                <DistrictWiseBar/>
                
                <p style={{fontFamily:'Lato',fontSize:12,color:'gray',textAlign:"center"}}>*data updated in reference with covid19india.org</p>
                <br/>
              </MaterialUI.Paper>
            </center>
            <h3 style={{textAlign:"center",fontSize:25}}>Kerala</h3>
            <center><KeralaStatus cases={kc} deaths={parseInt(kd)} recovered={parseInt(kr)}/> </center> 
            <h3 style={{textAlign:"center",fontSize:25}}>India</h3>
            <center> <IndiaStatus cases={parseInt(this.state.indiaTcases)} deaths={parseInt(this.state.indiaTdeath)} recovered={parseInt(this.state.indiaRecover)}/></center> 
            <h3 style={{textAlign:"center",fontSize:25}}>World</h3>
            <center><GlobalStatus cases={parseInt(this.state.worldTcases)} deaths={parseInt(this.state.worldTdeath)} recovered={parseInt(this.state.worldRecover)}/></center>
            
            <MaterialUI.Paper elevation={10} style={{
        backgroundColor:"#4f5a90",
        width:window.innerWidth,height:280,
        alignSelf:"center",
       
        }} >
            <br/>
          <center>  <h3 style={{color:"white"}}>Our Today's Prediction</h3>
          <p style={{color:"white"}}>On Confirming Cases</p>
          <p style={{color:"white"}}>{day}</p>
          <div style={{display:"flex"}}>
              
        <p style={{color:"white",marginRight:window.innerWidth*.2,marginLeft:window.innerWidth*.1}}>Kerala</p>
        <p style={{color:"white",marginRight:window.innerWidth*.15}}>India</p>
        <p style={{color:"white"}}>World</p>
        </div>
        <div style={{display:"flex"}}>
    <b style={{color:"white",fontSize:25,marginLeft:window.innerWidth*.1,marginRight:window.innerWidth*.2}}>{this.state.keralaPredict}</b>
       
        <b style={{color:"white",fontSize:25,marginRight:window.innerWidth*.1}}>{this.state.indiaPredict}</b>
        
        <b style={{color:"white",fontSize:25}}>{this.state.globalPredict}</b>
        </div>
        <br/>
        <a style={{color:"white",fontSize:15}} href="/predict">More</a>
        <br/><br/>
        </center>
    </MaterialUI.Paper>
    <br/><br/><br/>
            </div>
            }
            </div>:<Loader/>}
            </>
        )
    }
}

