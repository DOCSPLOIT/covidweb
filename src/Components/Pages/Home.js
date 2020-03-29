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
       isLoading:false,
       keralaCurrent:{
           deaths:0,
           confirmed:0,
           recovered:0
       }
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
                   isLoading:true,
                   keralaCurrent:{
                       deaths:parseInt(res['keralaLive']['deaths']),
                       recovered:parseInt(res['keralaLive']['recovered']),
                       confirmed:parseInt(res['keralaLive']['confirmed'])
                   }
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
      
        
        
        return(
            <>
            {this.state.isLoading===true?<div>
           {window.innerWidth>800?
               <div style={{marginTop:100,width:"100%"}} >
                  
                <div style={{display:"flex",marginLeft:"25%"}}>
               
                    
                    <MaterialUI.Paper elevation={10} style={{width:200,height:250,lineHeight:0.5}}>
                    <Animated animationIn="fadeIn" animationInDuration={6000}>
        <br/><br/>
        <center>
            <h3 style={{color:' #117cb9'}}>Active Cases</h3>
        </center>
        <br/>
        <b style={{marginLeft:15}}>Kerala :</b>
         <p style={{fontSize:15,marginLeft:30}}>Current  : <b> {this.state.keralaCurrent.confirmed}</b></p>
           <p style={{fontSize:15,marginLeft:30}}>From MoHFW :<b> {this.state.keralaTCases}</b></p>
        <br/>
           <b style={{marginLeft:15}}>India : {this.state.indiaTcases}</b>
           <br/><br/><br/><br/>
           <b style={{marginLeft:15,}}>World : {this.state.worldTcases}</b>
           <br/><br/>
           <p style={{fontFamily:'Lato',fontSize:12,color:'gray',textAlign:"center",lineHeight:1}}>*data updated in reference with MoHFW and covid19india.org</p>
        </Animated>
</MaterialUI.Paper>
<MaterialUI.Paper elevation={10} style={{width:200,height:250,marginLeft:"5%",lineHeight:.5}} >
<Animated animationIn="fadeIn" animationInDuration={6000}>
        <br/><br/>
        <center>
            <h3 style={{color:'#d13838'}}>Total Deaths</h3>
        </center>
        <br/>
        <b style={{marginLeft:15}}>Kerala :</b>
         <p style={{fontSize:15,marginLeft:30}}>Current  : <b> {this.state.keralaCurrent.deaths}</b></p>
           <p style={{fontSize:15,marginLeft:30}}>From MoHFW :<b> {this.state.keralaTdeath}</b></p>
        <br/>
           <b style={{marginLeft:15}}>India : {this.state.indiaTdeath}</b>
           <br/><br/><br/><br/>
           <b style={{marginLeft:15,}}>World : {this.state.worldTdeath}</b>
           <br/><br/>
           <p style={{fontFamily:'Lato',fontSize:12,color:'gray',textAlign:"center",lineHeight:1}}>*data updated in reference with MoHFW and covid19india.org</p>
        </Animated>
        </MaterialUI.Paper>
        <MaterialUI.Paper elevation={10} style={{width:200,height:250,marginLeft:"5%",lineHeight:.5}} >
        <Animated animationIn="fadeIn" animationInDuration={6000}>
        <br/><br/>
        <center>
            <h3 style={{color:'#35dd81'}}>Total Recover</h3>
        </center>
        <br/>
        <b style={{marginLeft:15}}>Kerala :</b>
         <p style={{fontSize:15,marginLeft:30}}>Current  : <b> {this.state.keralaCurrent.recovered}</b></p>
           <p style={{fontSize:15,marginLeft:30}}>From MoHFW :<b> {this.state.keralaRecover}</b></p>
        <br/>
           <b style={{marginLeft:15}}>India : {this.state.indiaRecover}</b>
           <br/><br/><br/><br/>
           <b style={{marginLeft:15,}}>World : {this.state.worldRecover}</b>
           <br/><br/>
           <p style={{fontFamily:'Lato',fontSize:12,color:'gray',textAlign:"center",lineHeight:1}}>*data updated in reference with MoHFW and covid19india.org</p>
        </Animated>
        </MaterialUI.Paper>
            </div>
           
            <div style={{display:"flex",marginTop:window.innerHeight*.1}}>
            <h2 style={{marginLeft:window.innerHeight*.05}}>Kerala</h2>
            <div style={{marginTop:-window.innerHeight*.2,marginLeft:-window.innerHeight*.25}}>
            <KeralaStatus cases={parseInt(this.state.keralaCurrent.confirmed)} deaths={parseInt(this.state.keralaCurrent.deaths)} recovered={parseInt(this.state.keralaCurrent.recovered)} />
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
               {/* <div style={{display:"flex"}}> */}
               <center>
                <StateWise/>
                </center>
                
    {/* <MaterialUI.Paper  elevation={10} style={{
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
       
    </MaterialUI.Paper> */}
   
    
    {/* </div> */}
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
                  <a href='http://sscollege.ac.in'>   <img src={logosm} style={{
                         width:'75px',
                         height:'75px',
                         position:'absolute',
                         marginLeft:"20px"
                     }}/></a>
                     <center><a href='http://sscollege.ac.in' style={{textDecoration:'none'}}><p style={{color:"white"}}><b style={{fontSize:20}}>Sullamussalam Science College |</b><l style={{fontSize:14}}>Powered By IEDC </l></p></a></center>
                   <a href='http://iedc.sscollege.ac.in' > <img src={iedclog} style={{
                         width:'100px',
                         height:'100px',
                         position:'absolute',
                         marginLeft:window.innerWidth*.9,
                         marginTop:-75
                     }}/></a>
                 </div>
             </footer>
            </div>:
            
            <div>
                {/*Mobile View is below*/}
                
               
                    <br/> <br/> <br/>
            <div>
                <Animated animationIn="fadeIn" animationInDuration={2500}>
            <MaterialUI.Paper style={{
                    
                    textAlign:'center',
                    margin:'auto'
                }}>
                    <br/>
               <center>
               <h2 >Kerala</h2>
                   </center> 
                       <div className="liveUpdates">
                 <div className='Status'>
            <p style={{color:'#3792cf'}} >Active Cases</p>
            <b style={{fontSize:25,color:'#3792cf'}} className="dataP" >{this.state.keralaCurrent.confirmed-this.state.keralaCurrent.deaths-this.state.keralaCurrent.recovered}</b></div>
            <div className='Status'>
            <p style={{color:'#cf3737'}}>Deaths</p>
            <b style={{fontSize:25,color:'#cf3737'}} className="dataP" >{this.state.keralaCurrent.deaths}</b></div>
            <div className='Status'>
            <p style={{color:'#239c5a'}} >Recovered</p>
            <b style={{fontSize:25,color:'#239c5a'}} className="dataP" >{this.state.keralaCurrent.recovered}</b>
            </div></div>
            </MaterialUI.Paper></Animated>
            <Animated animationIn="fadeIn" animationInDuration={2500}>
            <MaterialUI.Paper style={{
                    
                    textAlign:'center',
                    margin:'auto'
                }}>
               <h2>India</h2>
                  
                       <div className="liveUpdates">
                       <div className='Status'>
            <p style={{color:'#3792cf'}} >Active Cases</p>
            <b style={{fontSize:25,color:'#3792cf'}} className="dataP" >{this.state.indiaTcases-this.state.indiaTdeath-this.state.indiaRecover}</b></div>
            <div className='Status'>
            <p style={{color:'#cf3737'}}>Deaths</p>
            <b style={{fontSize:25,color:'#cf3737'}} className="dataP" >{this.state.indiaTdeath}</b></div>
            <div className='Status'>
            <p style={{color:'#239c5a'}} >Recovered</p>
            <b style={{fontSize:25,color:'#239c5a'}} className="dataP" >{this.state.indiaRecover}</b>
            </div>
              </div>
              </MaterialUI.Paper></Animated>
              <Animated animationIn="fadeIn" animationInDuration={2500}>
            <MaterialUI.Paper style={{
                    
                    textAlign:'center',
                    margin:'auto'
                }}>
               <center>
               <h2>World</h2>
                   </center> 
                       <div className="liveUpdates">
                       <div className='Status'>
            <p style={{color:'#3792cf'}} >Active Cases</p>
            <b style={{fontSize:25,color:'#3792cf'}} className="dataP" >{this.state.worldTcases-this.state.worldTdeath-this.state.worldRecover}</b></div>
            <div className='Status'>
            <p style={{color:'#cf3737'}}>Deaths</p>
            <b style={{fontSize:25,color:'#cf3737'}} className="dataP" >{this.state.worldTdeath}</b></div>
            <div className='Status'>
            <p style={{color:'#239c5a'}} >Recovered</p>
            <b style={{fontSize:25,color:'#239c5a'}} className="dataP" >{this.state.worldRecover}</b>
            </div>
            </div>
            <p style={{fontFamily:'Lato',fontSize:12,color:'gray'}}>*data updated in reference with MoHFW</p>
                <p style={{fontFamily:'Lato',fontSize:12,color:'gray'}}>*Kerala data updated in reference with covid19india.org</p>
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
                <p style={{fontFamily:'Lato',fontSize:12,color:'white'}}>*Kerala data updated in reference with covid19india.org</p>
                <br/>
              </MaterialUI.Paper>
            
            <h3 style={{textAlign:"center",fontSize:25}}>Kerala</h3>
            <center><KeralaStatus cases={parseInt(this.state.keralaCurrent.confirmed)} deaths={parseInt(this.state.keralaCurrent.deaths)} recovered={parseInt(this.state.keralaCurrent.recovered)}/> </center> 
            <h3 style={{textAlign:"center",fontSize:25}}>India</h3>
            <center> <IndiaStatus cases={parseInt(this.state.indiaTcases)} deaths={parseInt(this.state.indiaTdeath)} recovered={parseInt(this.state.indiaRecover)}/></center> 
            <h3 style={{textAlign:"center",fontSize:25}}>World</h3>
            <center><GlobalStatus cases={parseInt(this.state.worldTcases)} deaths={parseInt(this.state.worldTdeath)} recovered={parseInt(this.state.worldRecover)}/></center>
            
            {/* <MaterialUI.Paper elevation={10} style={{
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
    </MaterialUI.Paper> */}
    <br/><br/><br/>
            </div>
            }
            </div>:<Loader/>}
            </>
        )
    }
}

