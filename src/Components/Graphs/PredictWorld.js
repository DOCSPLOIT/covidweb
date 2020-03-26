import React, { Component } from "react";
import Chart from "react-apexcharts";
import * as MaterialUI from '@material-ui/core'
export default class PredictWorld extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timestamp: this.props.timestamp,
            days: this.props.days,
            indiaData: [],
            GlobalData: [],
            options: {
                title:{
                    text:'Confirmed Cases Prediction'
                },
                xaxis: {
                    style: {  
                    },
                    type: 'datetime'

                },
               tooltip:{
                   shared:false
               },
                dataLabels: {
                    enabled: true,
                },

                 stroke: {
                     width:2.5
                 },

                grid: {
                    padding: {
                        left: 10, // or whatever value that works
                        right: 40 // or whatever value that works
                    }
                }


            },
            series: [
                // {
                //     name: "India",
                //     data: []
                // }
                {
                    name: "Global",
                    data: []
                }
            ]
        }
    }

    componentDidMount() {
        fetch(`https://covid19regression.herokuapp.com/predict/${this.state.timestamp}/${this.state.days}`)
            .then(response => response.json())
            .then(res => {

                // let idata = res.india.map(d => {
                //     return [d.timestamp, d.prediction];
                // });
                let gdata = res.global.map(d => {
                    return [d.timestamp, d.prediction];
                });
               
                this.setState({
                    series: [
                        {
                            name: "Global",
                            data: gdata
                        }
                    ]
                })


            })

    }

    render() {
        return (
          
                <MaterialUI.Paper elevation={10} style={
                    window.innerWidth>800?{width:window.innerWidth*.4,
                    height:window.innerHeight*.6,
                    }:{width:window.innerWidth,}}>
                <h1>World</h1>
                <Chart
                   
                    height={window.innerHeight*.4}
                    type="area"
                    options={this.state.options}
                    series={this.state.series}
                    
                />
                </MaterialUI.Paper>
           
        );
    }

}

