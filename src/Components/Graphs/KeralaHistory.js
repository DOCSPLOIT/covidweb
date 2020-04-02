import React, { Component } from 'react'
import Chart from "react-apexcharts";
import { url } from "../Configure";
import * as MaterialUI from "@material-ui/core";
export default class KeralaHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            series: [
                {
                    name: "",
                    data: []
                }
            ],
            options: {
                xaxis: {
                    style: {
                        margin: 10
                    },
                    type: "datetime"
                },
                dataLabels: {
                    enabled: true
                },

                stroke: {
                    width: 2.5
                },

                grid: {
                    padding: {
                        left: 10, // or whatever value that works
                        right: 10 // or whatever value that works
                    }
                }
            },
        };
    }
    componentDidMount() {
        fetch(`${url}/statusPage`).then(r => r.json())
            .then(res => {
                this.setState({ data: res["historyKerala"] });
                this.setData();
            })

    }
    render() {


        return (
            <>
                <MaterialUI.Paper elevation={10} style={{
                    marginTop: window.innerHeight * .15,
                    width: window.innerWidth > 800 ? window.innerWidth * .8 : window.innerWidth
                }}>
                    <br/>
                    <h3>Kerala Cases Till Today</h3>
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="area"
                        width="100%"
                        height="300"
                    />
                </MaterialUI.Paper>
            </>
        )
    }
    setData = () => {
        let data = this.state.data.map(d => {
            return [d.timestamp, d.cases];
        });

        this.setState({
            series: [
                {
                    name: "Cases",
                    data: data
                }
            ]
        });
    };
}