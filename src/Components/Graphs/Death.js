import React, { Component } from "react";
import { Chart } from "react-google-charts";

export default class Death extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            chartData: [
                [
                    { type: 'date', label: 'Date' }, "Death"
                ]
            ]
        }
    }

    async componentDidMount() {
        const response = await fetch("https://covid19apiss.herokuapp.com/deaths");

        let res = await response.json();

        this.setState({ data: res.table })

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
            let dayData = [d,death]
            this.state.chartData.push(dayData);
           console.log(typeof(death));
           
            
        })
       
        
    }

    render() {
        return (
            <div>
                
                <Chart
                    chartType="LineChart"
                    width={"100%"}
                    height={"400px"}
                    options={{
                        hAxix: {
                            title: 'Date'
                        },
                        vAxix: {
                            title: 'Death'
                        }
                    }}
                    loader={<div>loading</div>}
                    data={this.state.chartData}
                    rootProps={{ 'data-testid': '4' }}
                />
            </div>
        );
    }
    convertDate = (d) => {
        const Y = 2020;
        let M = 0, D = 1;
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', "Dec"];
        let [strMonth, strDay] = d.split('.')
        M = months.indexOf(strMonth)
        D = parseInt(strDay.trim())
        return new Date(Y, M, D)
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