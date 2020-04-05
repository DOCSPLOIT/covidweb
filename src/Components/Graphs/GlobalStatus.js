import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class GlobalStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [1, 1, 1],
      options: {
        chart: {
          width: 380,
          type: "pie"
        },
        labels: ["Cases", "Recovered", "Deaths"],
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
        colors: ["#008ffb", "#35dd81", "#dd3535"],
        fill: {
          colors: ["#008ffb", "#35dd81", "#dd3535"]
        }
      },

      active_series: [],
      active_options: {
        chart: {
          width: 380,
          type: "pie"
        },
        labels: ["Currently Infected", "In midcondition", "Critical State"],
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
        ]
      },
      closed_series: [],
      closed_options: {
        chart: {
          width: 380,
          type: "pie"
        },
        labels: ["Cases have an Outcome", "Recovered", "Deaths"],
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
        ]
      }
    };
  }

  componentDidMount() {
    this.setState({
      series: [this.props.cases, this.props.recovered, this.props.deaths]
    });
  }

  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width={400}
        />
        {/* <h4>Active Cases</h4> */}
        {/* <Chart options={this.state.active_options} series={this.state.active_series} type="pie" width={340} /> */}
        {/* <h4>Closed Cases</h4>
<Chart options={this.state.closed_options} series={this.state.closed_series} type="pie" width={380} /> */}
      </div>
    );
  }
}
