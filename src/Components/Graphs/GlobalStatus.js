import React, { Component } from 'react'
import { url } from '../Configure'
import Chart from "react-apexcharts";

export default class GlobalStatus extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels:['Cases','Recovered','Deaths',]
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
        },


        active_series: [],
        active_options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Currently Infected','In midcondition','Critical State'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
        closed_series: [],
        closed_options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Cases have an Outcome','Recovered','Deaths'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        }
        
      
      
      };
    }
    componentDidMount(){
        fetch(`${url}/globalStatus`).then(r=>r.json()).then(res=>{
            this.setState({series:[res.cases,res.recovered,res.deaths],
            active_series:[res['active_cases']['currently_infected_patients'],
        res['active_cases']['inMidCondition'],res['active_cases']['criticalStates']
        ],
        closed_series:[res["closed_cases"]["cases_which_had_an_outcome"],
    res["closed_cases"]["recovered"],res["closed_cases"]["deaths"]
    ]
            })
        }
        )
    }

  

    render() {
        
      return (
          
<div id="chart" style={window.innerWidth>800?{display:"flex"}:{display:"",textAlign:"center"}}>

    <h4>Overall Status</h4>
<Chart  options={this.state.options} series={this.state.series} type="pie" width={380} />
<h4>Active Cases</h4>
<Chart options={this.state.active_options} series={this.state.active_series} type="pie" width={380} />
<h4>Closed Cases</h4>
<Chart options={this.state.closed_options} series={this.state.closed_series} type="pie" width={380} />

</div>

      )
    }
}

