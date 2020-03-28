import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import { url } from '../Configure';
import * as MaterialUI from '@material-ui/core'
export default class GlobalHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {

            // chart options
            data: [],
            options: {
               
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
                     width:2.5
                 },
                 colors:["#ee571b"],
                grid: {
                    padding: {
                        left: 10, // or whatever value that works
                        right: 40 // or whatever value that works
                    }
                }


            },
            series: [
                {
                    name: "Cases",
                    data: []
                }]
        }


    }
    async componentDidMount() {
        const response = await fetch(`${url}/statusPage`);

        let res = await response.json();

        this.setState({ data: res['historyGlobal'] })

        this.setData()

    }
    render() {


        return (
          
            <MaterialUI.Paper elevation={10}>
            <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="area"
                    width="100%"
                    height="500"
                />
            </MaterialUI.Paper>
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
                }]
        })


    }

}
