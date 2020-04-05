import React, { Component } from "react";
import Chart from "react-apexcharts";
export default class KeralaStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [0, 0, 0],

      options: {
        chart: {
          width: 380,
          type: "pie"
        },
        labels: ["Confirmed", "Recovered", "Deaths"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 380
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ],

        dataLabels: {
          enabled: true
        },
        fill: {
          colors: ["#008ffb", "#35dd81", "#dd3535"]
        },
        colors: ["#008ffb", "#35dd81", "#dd3535"]
      }
    };
  }

  componentDidMount() {
    this.setState({
      series: [
        parseInt(this.props.cases),
        this.props.recovered,
        this.props.deaths
      ]
    });
  }

  render() {
    return (
      <div
        id="chart"
        style={
          window.innerWidth > 800
            ? {
                marginTop: window.innerHeight * 0.25,
                marginLeft: window.innerWidth * 0.1
              }
            : {}
        }
      >
        <Chart
          options={this.state.options}
          series={this.state.series}
          width={380}
          type="donut"
        />
      </div>
    );
  }
}
