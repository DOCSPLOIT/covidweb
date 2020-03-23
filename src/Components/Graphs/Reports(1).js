import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class Reports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalDeaths: [0, 0, 0, 0, 0],
            totalCases: [0, 0, 0, 0, 0],
            totalRecovered: [0, 0, 0, 0, 0],
            contries: ['chaina', 'italy', 'spain', 'USA', 'india'],
            // chart options
            options: {
                chart: {
                    background: '#f4f4f4',
                    foreColor: '#333'
                },
                xaxis: {
                    categories: ['chaina', 'italy', 'spain', 'USA', 'india']
                }
            },
            series: [
                {
                    name: "Total Death",
                    data: [0, 0, 0, 0, 0]
                },
                {
                    name: "Total Cases",
                    data: [0, 0, 0, 0, 0]
                },
                {
                    name: "Total Recovered",
                    data: [0, 0, 0, 0, 0]
                }
            ]

        }

    }
    componentDidMount() {
        fetch("https://covid19apiss.herokuapp.com/reports")
            .then(response => response.json())
            .then(res => {

                const totalDeaths = res.map(c => {
                    const [f, b] = c.TotalDeaths.split(',');
                    if (f == '')
                        return 0;
                    if (b == undefined) {
                        return parseInt(f);
                    } else {
                        return parseInt(f + b);
                    }
                })

                const contries = res.map(c => {
                    return c['Country,Other']
                })

                const totalCases = res.map(c => {
                    const [f, b] = c.TotalCases.split(',');
                    if (f == '')
                        return 0;
                    if (b == undefined) {
                        return parseInt(f);
                    } else {
                        return parseInt(f + b);
                    }
                })

                const totalRecovered = res.map(c => {
                    const [f, b] = c.TotalRecovered.split(',');
                    if (f == '')
                        return 0;
                    if (b == undefined) {
                        return parseInt(f);
                    } else {
                        return parseInt(f + b);
                    }
                })


                this.setState({
                    options: {
                        chart: {
                            background: '#f4f4f4',
                            foreColor: '#333'
                        },
                        xaxis: {
                            categories: contries
                        }
                    }
                })

                this.setState({
                    series: [
                        {
                            name: "Total Death",
                            data: totalDeaths
                        },
                        {
                            name: "Total Cases",
                            data: totalCases
                        },
                        {
                            name: "Total Recovered",
                            data: totalRecovered
                        }
                    ]
                })


            })


    }
    render() {
        console.log(this.state.series);
        
        return (
            <>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    width="100%"
                    height="400"
                />
            </>)
    }

}

export default Reports;