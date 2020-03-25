import React, { Component } from "react";
import Chart from "react-apexcharts";
import * as MaterialUI from '@material-ui/core'
export default class Death extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            options: {
                colors:["#da1414"],
                chart: {
                    type: 'area',
                    height: 350,
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },

                title: {
                    text: 'Covid world wide death',
                    align: 'left'
                },
                // subtitle: {
                //     text: 'Price Movements',
                //     align: 'left'
                // },
                // labels: series.monthDataSeries1.dates,
                xaxis: {
                    type: 'datetime',
                },
                yaxis: {
                    opposite: false
                },
                legend: {
                    horizontalAlign: 'left'
                }
            },
            series: [
                {
                    type: 'area',
                    data: []
                }
            ]
        }
    }

    async componentDidMount() {
        const response = await fetch("https://covid19apiss.herokuapp.com/deaths");

        let res = await response.json();

        this.setState({ data: res.table })
        let data = [];
        this.state.data.forEach(i => {
            let death = 0;


            const [f, b] = i['Total Deaths'].split(',');
            if (f == '')
                death = 0;
            if (b == undefined) {
                death = parseInt(f);
            } else {
                death = parseInt(f + b);
            }
            let d = this.convertDate(i['Date'])
            let dayData = [new Date(d).toLocaleString(), death]


            data.push(dayData)


        })
        this.setState({
            series: [
                {
                    type: 'area',
                    data: data
                }
            ]
        })
    }

    render() {
        return (
           <MaterialUI.Paper elevation={10} style={{width:window.innerWidth*.8}}>
               <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="area"
                   
                    height="500"
                />
           </MaterialUI.Paper>

                
            
        );
    }
    convertDate = (d) => {
        const Y = 2020;
        let M = 0, D = 0;
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', "Dec"];
        let [strMonth, strDay] = d.split('.')
        M = months.indexOf(strMonth)
        D = parseInt(strDay.trim()) + 1

        return new Date(Y, M, D).getTime()
    }
}

// [["Date", "Death"], [4, 5.5], [8, 12]]
/*
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

*/