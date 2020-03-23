import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import { url } from '../Configure';

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
                    enabled: false,
                },

                // stroke: {
                //     curve: 'smooth'
                // },

                grid: {
                    padding: {
                        left: 60, // or whatever value that works
                        right: 60 // or whatever value that works
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
        const response = await fetch(`${url}/getHistoryIndia`);

        let res = await response.json();

        this.setState({ data: res })

        this.setData()

    }
    render() {


        return (
            <>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="line"
                    width="100%"
                    height="500"
                />
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