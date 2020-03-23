import React, { Component } from 'react'
import { url } from '../Configure';
import Chart from 'react-apexcharts'
export default class IndiaStatus extends Component{
    constructor(props){
        super(props);
        this.state={
            series:[],
            options: {
                chart: {
                  width: 380,
                  type: 'pie',
                },
                labels:['Total Cases','Total Recovered','Toatal Deaths',]
                ,
                
                responsive: [{
                  breakpoint: 480,
                  options: {
                    chart: {
                      width: 200
                    },
                    legend: {
                      position: 'bottom'
                    }
                  },
                  
                }],
               
              dataLabels:{
                enabled:true,
                
            }
              }
            
        }
    }
     componentDidMount(){
        
        fetch(`${url}/reportsIndia`).then(r=>r.json())
        .then(res=>{
           this.setState({series:[parseInt(res.TotalCases),parseInt(res.TotalRecovered),parseInt(res.TotalDeaths)]})
        })
       
    }
    render(){
       
        
        console.log(this.state.series);
        
        
        return(
<div id="chart" style={window.innerWidth>800?{display:"flex"}:{display:"",textAlign:"center"}}>
  <h4>Overall Status</h4>
<Chart options={this.state.options} series={this.state.series} width={380} type="pie" />
</div>
        )
    }
    }