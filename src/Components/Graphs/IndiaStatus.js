import React, { Component } from 'react'
import { url } from '../Configure';
import Chart from 'react-apexcharts'
export default class IndiaStatus extends Component{
    constructor(props){
        super(props);
        this.state={
            series:[1,1,1],
            options: {
                chart: {
                  width: 380,
                  type: 'pie',
                },
                labels:['Total Cases','Total Recovered','Total Deaths',]
                ,
                
                responsive: [{
                  breakpoint: 480,
                  options: {
                    chart: {
                      width: 380
                    },
                    legend: {
                      position: 'bottom'
                    }
                  },
                  
                }],
               
              dataLabels:{
                enabled:true,
                
            },
            fill:{
              colors:['#008ffb', '#35dd81', '#dd3535']
            },
            colors:['#008ffb', '#35dd81', '#dd3535']
              }
            
        }
    }
    componentDidUpdate(prevProps,prevState){
  
      
      if(this.state.series[0]!=prevProps.cases){
        this.setState({series:[this.props.cases,this.props.recovered,this.props.deaths]})
      }
      
    
   }
    render(){
       
        
       
        
        
        return(
<div id="chart">
<Chart options={this.state.options} series={this.state.series} width={420} type="donut" />
</div>
        )
    }
    }