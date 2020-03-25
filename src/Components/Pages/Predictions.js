import React, { Component } from 'react'
import Predict from '../Graphs/Predict'
import PredictText from '../Graphs/PredictText';
import '../Styles/home.css'
export default class Predications extends Component{
    constructor(props){
        super(props)
        this.state={
            timestamp:0
        }
    }
    UNSAFE_componentWillMount(){
        let time=new Date().getTime();
        time=time.toLocaleString()
        time=time.toString();
        let [a,b,c,d,e]=time.split(',')
        time=parseInt(a+b+c+d+e)
        
        this.setState({timestamp:time})
    }
    render(){
   
        
        return(
            <div style={{marginTop:window.innerHeight*.2}}>
                <center>
                 <PredictText timestamp={this.state.timestamp} days={7}/>
                <Predict timestamp={this.state.timestamp} days={7} />
                </center>
                <br/><br/><br/>
                <footer>
                 <div className="footer">
                     <center><p style={{fontWeight:"bold",color:"white"}}>IEDC SSCOLLEGE, Areekode</p></center>
                 </div>
             </footer>
            </div>
        )
    }
}