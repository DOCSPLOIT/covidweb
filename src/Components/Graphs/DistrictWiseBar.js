import React, { Component } from 'react'
import { url } from '../Configure'
import Chart from 'react-apexcharts'

export default class DistrictWiseBar extends Component{

    constructor(props){
        super(props)
        this.state={
            series:[],
            options:{
                colors:['#ff4747'],
                chart:{
                    type:'bar',
                    height: 350
                }, plotOptions: {
                    bar: {
                      horizontal: true,
                    }
                  },
                  xaxis: {
                    categories: ['Thiruvananthapuram','Kollam','Pathanamthitta','Alappuzha','Kottayam','Idukki','Ernakulam','Thrissur','Palakkad','Malappuram','Kozhikode','Wayanad','Kannur','Kasargod']
                  },
                 
            }
        }
    }
    componentDidMount(){
        fetch(`${url}/statusPage`).then(res=>res.json())
        .then(res=>{
            this.setState({series:[{data:[
              
                res["keralaDistrictWise"]['Thiruvananthapuram']['confirmed'],
                res["keralaDistrictWise"]['Kollam']['confirmed'],
                res["keralaDistrictWise"]['Pathanamthitta']['confirmed'],
                res["keralaDistrictWise"]['Alappuzha']['confirmed'],
                res["keralaDistrictWise"]['Kottayam']['confirmed'],
                res["keralaDistrictWise"]['Idukki']['confirmed'],
                res["keralaDistrictWise"]['Ernakulam']['confirmed'],
                res["keralaDistrictWise"]['Thrissur']['confirmed'],
                res["keralaDistrictWise"]['Palakkad']['confirmed'],
                res["keralaDistrictWise"]['Malappuram']['confirmed'],
                res["keralaDistrictWise"]['Kozhikode']['confirmed'],
                res["keralaDistrictWise"]['Wayanad']['confirmed'],
                res["keralaDistrictWise"]['Kannur']['confirmed'],
                res["keralaDistrictWise"]['Kasaragod']['confirmed'],
                
            ]}]})
        })
    }
    render(){
        return(
            <Chart  options={this.state.options} series={this.state.series} height={
                window.innerWidth>800?undefined:700
            }
             width={window.innerWidth>800?window.innerWidth*.7:window.innerWidth} type="bar"  />
        )
    }
}