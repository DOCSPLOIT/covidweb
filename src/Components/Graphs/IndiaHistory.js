import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import { url } from '../Configure';
import * as MaterialUI from '@material-ui/core'
class IndiaHistory extends Component {
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
                    width:2.5,
                    
                },
                
                grid: {
                    padding: {
                        left: 10, // or whatever value that works
                        right: 10 // or whatever value that works
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

        this.setState({ data: res['historyIndia'] })

        this.setData()

    }
    render() {


        return (
            <>
            <MaterialUI.Paper elevation={10}>
            <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="area"
                    width="100%"
                    height="300"
                />
            </MaterialUI.Paper>
               
            </>)
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

export default IndiaHistory;