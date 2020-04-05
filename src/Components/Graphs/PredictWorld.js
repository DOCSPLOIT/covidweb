import React, { Component } from "react";
import Chart from "react-apexcharts";
import * as MaterialUI from "@material-ui/core";
import { url } from "../Configure";
export default class PredictWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        colors: ["#f06d30"],
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
          name: "World",
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
      ]
    };
  }
  componentDidMount() {
    fetch(`${url}/PredictionPage`)
      .then(response => response.json())
      .then(res => {
        const oneDay = 1000 * 3600 * 24;
        let today = Date.now();
        let gdata = [];
        const n = res["arr"].length;
        for (let i = 0; i < n; i++) {
          let d = today + i * oneDay;
          gdata.push([d, res["arr"][i][2]]);
        }
        this.setState({
          series: [
            {
              name: "World",
              data: gdata
            }
          ]
        });
      });
  }

  render() {
    return (
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
        <MaterialUI.Paper
          elevation={10}
          style={
            window.innerWidth > 800
              ? {
                  width: window.innerWidth * 0.4,
                  height: window.innerHeight * 0.6
                }
              : { width: window.innerWidth }
          }
        >
          <h1>World</h1>
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
        </MaterialUI.Paper>
      </div>
    );
  }
}
