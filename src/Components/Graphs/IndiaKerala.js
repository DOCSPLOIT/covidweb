import React, { Component } from "react";
import Chart from "react-apexcharts";
import { url } from "../Configure";
import * as MaterialUI from "@material-ui/core";

class IndiaKerala extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // chart options
            idata: [],
            kdata: [],
            options: {
                xaxis: {
                    style: {
                        margin: 10
                    },
                    type: "datetime"
                },
                markers: {
                    size: 5,
                    shape: 'circle',
                    radius: 1
                },
                stroke: {
                    width: 3
                },

                grid: {
                    padding: {
                        left: 10, // or whatever value that works
                        right: 10 // or whatever value that works
                    }
                }
            },
            series: []
        };
    }
    async componentDidMount() {
        const response = await fetch(`${url}/statusPage`);

        let res = await response.json();
        let idata = res["historyIndia"];
        let kdata = res["historyKerala"];
        idata.splice(0, 3);
        kdata.splice(0, 30);
        this.setState({
            idata: idata,
            kdata: kdata,
        });

        this.setData();
    }
    render() {
        return (
            <>
                <MaterialUI.Paper elevation={10}>
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="line"
                        width="100%"
                        height="600px"
                    />
                </MaterialUI.Paper>
            </>
        );
    }
    setData = () => {
        let idata = this.state.idata.map(d => {
            return [d.timestamp, d.cases]
        });

        let kdata = this.state.kdata.map(d => {
            return [d.timestamp, d.cases]
        });

        this.setState({
            series: [
                {
                    name: "India",
                    data: idata
                },
                {
                    name: "Kerala",
                    data: kdata
                }
            ]
        });
    };
}

export default IndiaKerala;