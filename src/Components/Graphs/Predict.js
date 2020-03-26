import React, { Component } from "react";
import Chart from "react-apexcharts";
import PredictWorld from './PredictWorld'
import Paper from '@material-ui/core/Paper'
export default class Predict extends Component {

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
                        margin: 10
                    },
                    type: 'datetime'

                },
                dataLabels: {
                    enabled: true,
                },

                 stroke: {
                     width:2.5,
                     colors:"#f32"
                 },

                grid: {
                    padding: {
                        left: 10, // or whatever value that works
                        right: 40 // or whatever value that works
                    },
                   
                },
                colors:["#f32"]

            },
            series: [
                {
                    name: "India",
                    data: []
                }
                // }, {
                //     name: "Global",
                //     data: []
                // }
            ]
        }
    }

    componentDidMount() {
        fetch(`https://covid19regression.herokuapp.com/predict/${this.state.timestamp}/${this.state.days}`)
            .then(response => response.json())
            .then(res => {

                let idata = res.india.map(d => {
                    return [d.timestamp, d.prediction];
                });
                // let gdata = res.global.map(d => {
                //     return [d.timestamp, d.prediction];
                // });
                
                this.setState({
                    series: [
                        {
                            name: "India",
                            data: idata
                        }
                    ]
                })


            })





    }

    render() {
        return (
            <div style={window.innerWidth>800?{display:"flex",marginTop:window.innerWidth*.02,justifyContent:"center"}:{}} >
                <Paper elevation={10} style={window.innerWidth>800?{width:window.innerWidth*.4,
                    height:window.innerHeight*.6,}:{width:window.innerWidth}}>
                <h1>India</h1>
                <Chart
                    width={window.innerWidth>800?window.innerWidth*.4:window.innerWidth}
                    height={window.innerHeight*.4}
                    type="area"
                    options={this.state.options}
                    series={this.state.series}

                />
                </Paper>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <PredictWorld  timestamp={this.props.timestamp} days={this.props.days} />
            </div>
        );
    }

}

