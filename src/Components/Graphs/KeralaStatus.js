import React, { Component } from 'react'
import {url, header} from '../Configure'
import Chart from 'react-google-charts'
export default class KeralaStatus extends Component{
    constructor(props){
        super(props)
        this.state={
            status:[]
        }
    }

    componentDidMount(){
        fetch(`${url}/stateWiseData/Kerala`).then(r=>r.json())
        .then(res=>{
            this.setState({status:[['Overall','Population per Cases'],
            
            ['Confirmed(Foreign National)',parseInt(res['Total Confirmed cases ( Foreign National )'])],
            ['Death',parseInt(res['Death'])],
            ['Confirmed(National)',parseInt(res['Total Confirmed cases (Indian National)'])],
            ['Cured/Discharged/Migrated',parseInt(res['Cured/Discharged/Migrated'])],
            ]})
        
        })
    }
    render(){
        return(
            <div style={{marginTop:window.innerHeight*.17}}>
            <Chart
  width={'600px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={this.state.status}
  rootProps={{ 'data-testid': '1' }}
/>
</div>
        )
    }
}