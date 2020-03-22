import React, { Component } from 'react'
import { url } from '../Configure'
import Chart from "react-apexcharts";

export default class GlobalStatus extends Component{
    constructor(props){
        super(props)
        this.state={
          
            
    }
}
    componentWillMount(){
        fetch(`${url}/globalStatus`).then(r=>r.json()).then(res=>{
            this.setState({overallStatus:res})
        })
    }
    render(){
  
        return(
            <Chart type="pie" series={this.state.series}  options={this.state.options}/>
        )
    }
}