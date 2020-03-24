import React, { Component } from 'react'
import { url } from '../Configure';
import Chart from 'react-apexcharts'
export default class KeralaStatus extends Component{
    constructor(props){
        super(props);
        this.state={
            series:[],
            options: {
                chart: {
                  width: 380,
                  type: 'pie',
                },
                labels:['Confirmed (National)','Confirmed (Foreign)','Recovered','Deaths']
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
              colors:['#008ffb','#109bad', '#35dd81', '#dd3535']
            },
            colors:['#008ffb','#109bad', '#35dd81', '#dd3535']
              }
        }
    }
    componentDidMount(){
        fetch(`${url}/stateWiseData/Kerala`).then(r=>r.json())
        .then(res=>{
            this.setState({series:[
                parseInt(res['Total Confirmed cases (Indian National)']),
                parseInt(res['Total Confirmed cases ( Foreign National )']),
                parseInt(res['Cured/Discharged/Migrated']),
                parseInt(res['Death'])
        ]})
        })
    }
    render(){
        return(
            <div id="chart" style={window.innerWidth>800?{
                marginTop:window.innerHeight*.25,marginLeft:window.innerWidth*.05
                }:{}}>
<Chart  options={this.state.options} series={this.state.series} width={440} type="pie" />
</div>
        )
    }
}