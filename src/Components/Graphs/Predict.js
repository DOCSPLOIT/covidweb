import React, { Component } from "react";
import Chart from "react-apexcharts";
import PredictWorld from "./PredictWorld";
import Paper from "@material-ui/core/Paper";
import PredictKerala from "./PredictKerala";
import { url } from "../Configure";
export default class Predict extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

        // stroke: {
        //     curve: 'smooth'
        // },

        grid: {
          padding: {
            left: 10, // or whatever value that works
            right: 40 // or whatever value that works
          }
        }
      },
      series: [
        {
          name: "India",
          data: [
            [1585236526093, 50],
            [1585322926093, 75],
            [1585409326093, 100],
            [1585495726093, 125],
            [1585582126093, 150],
            [1585668526093, 175],
            [1585754926093, 200]
          ]
        }
        // }, {
        //     name: "Global",
        //     data: []
        // }
      ]
    };
  }

  componentDidMount() {
    fetch(`${url}/PredictionPage`)
      .then(response => response.json())
      .then(res => {
        const oneDay = 1000 * 3600 * 24;
        let today = Date.now();
        let idata = []
        const n = res["arr"].length;
        for (let i = 0; i < n; i++) {
          let d = today + i * oneDay;

          idata.push([d, res["arr"][i][1]]);
        }
        this.setState({
          series: [
            {
              name: "India",
              data: idata
            }
          ]
        });
      });
  }

  render() {
    return (
      <>
        <div
          style={
            window.innerWidth > 800
              ? {
                  display: "flex",
                  marginTop: window.innerWidth * 0.02,
                  justifyContent: "center"
                }
              : {}
          }
        >
          <PredictKerala />
          <Paper
            elevation={10}
            style={
              window.innerWidth > 800
                ? {
                    width: window.innerWidth * 0.4,
                    marginTop: window.innerHeight * 0.045,
                    height: window.innerHeight * 0.6
                  }
                : { width: window.innerWidth }
            }
          >
            <h1>India</h1>
            <Chart
              width={
                window.innerWidth > 800
                  ? window.innerWidth * 0.4
                  : window.innerWidth
              }
              height={window.innerHeight * 0.4}
              type="area"
              options={this.state.options}
              series={this.state.series}
            />
          </Paper>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <PredictWorld timestamp={this.props.timestamp} days={this.props.days} />
      </>
    );
  }
}
