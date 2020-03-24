import React, { Component } from 'react'
import Predict from '../Graphs/Predict'
import PredictText from '../Graphs/PredictText';
import '../Styles/home.css'
export default class Predications extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        const timestamp=new Date().getTime();
        console.log(timestamp);
        

        return(
            <div style={{marginTop:window.innerHeight*.2}}>
                <center>
                 <PredictText timestamp={timestamp} days={7}/>
                <Predict timestamp={timestamp} days={7} />
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