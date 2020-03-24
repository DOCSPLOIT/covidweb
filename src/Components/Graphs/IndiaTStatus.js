import React, { Component } from 'react'
import { url, header } from '../Configure';
import Chart from 'react-google-charts';

export default class IndiaTStatus extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
   componentDidMount(){
         fetch(`${url}/reportsIndia`).then(r=>r.json())
         .then(res=>{
            this.setState({data:[
                ['IndiaCovid19','Population'],
                ['Recovered',parseInt(res['TotalRecovered'])],
                ['Death',parseInt(res['TotalDeaths'])],
                ['Cases',parseInt(res['TotalCases'])]
            ]})
            
            
        })
        
    
       
        
    }
    render(){
        
        
        return(
            <div style={{marginTop:window.innerHeight*.17,marginLeft:window.innerWidth*.1}}>
            <Chart
  width={'600px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={this.state.data}
  rootProps={{ 'data-testid': '1' }}
/>
</div>
        )
    }
}