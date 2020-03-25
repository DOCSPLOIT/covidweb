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
                    enabled: false,
                },

                 stroke: {
                     width:2.5
                 },
                 colors:["#005c31"],
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
        const response = await fetch(`${url}/getHistoryGlobal`);

        let res = await response.json();

        this.setState({ data: res })

        this.setData()

    }
    render() {


        return (
          
            <MaterialUI.Paper elevation={10}>
            <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="line"
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
