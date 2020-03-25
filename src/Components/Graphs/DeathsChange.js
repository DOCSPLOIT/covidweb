import React, { Component } from "react";
import Chart from "react-apexcharts";
import * as MaterialUI from '@material-ui/core'
export default class DeathChange extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            series: [
                {
                    name: 'Change In Death',
                    data: []
                },
                {
                    name: 'Death',
                    data: []

                },

            ],
            options: {
                chart: {
                    type: 'area',
                    // stacked: true,

                },
                colors: ['#008FFB', '#da1414', '#CED4DC'],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: 0.6,
                        opacityTo: 0.8,
                    }
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left'
                },
                xaxis: {
                    type: 'datetime'
                },
            },


        };
    }

    async componentDidMount() {
        const response = await fetch("https://covid19apiss.herokuapp.com/deaths");

        let res = await response.json();

        this.setState({ data: res.table })
        let deathData = [];
        let changeDeathData = [];
        this.state.data.forEach(i => {



            let death = this.convertToNumber(i['Total Deaths']);
            let changeDeath = this.convertToNumber(i['Change in Total'])
            let d = this.convertDate(i['Date'])
            let dayDeathData = [new Date(d).toLocaleString(), death]
            let DayChangeDeathData = [new Date(d).toLocaleString(), changeDeath]

            deathData.push(dayDeathData)
            changeDeathData.push(DayChangeDeathData)


        })
        this.setState({
            series: [
                {
                    name: 'Change In Death',
                    data: changeDeathData

                },
                {
                    name: 'Death',
                    data: deathData
                },

            ]
        })
    }

    render() {
        return (
            
            <MaterialUI.Paper elevation={10} style={window.innerWidth>800?{width:window.innerWidth*.8}:{
                width:window.innerWidth
            }}>
                  <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="area"
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
    convertToNumber = (d) => {
        const [f, b] = d.split(',');
        if (f == '')
            return 0;
        if (b == undefined) {
            return parseInt(f);
        } else {
            return parseInt(f + b);
        }
    }
}

