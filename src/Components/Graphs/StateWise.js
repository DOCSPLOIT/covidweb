import React, { Component } from "react";
import Chart from "react-apexcharts";
import * as MaterialUI from "@material-ui/core";
import { url } from "../Configure";
class StateWise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // chart options
      data: [],
      series: [
        {
          name: "Cases",
          data: []
        },
        {
          name: "Recovered",
          data: []
        },
        {
          name: "Death",
          data: []
        }
      ],
      options: {
        colors: ["#032570", "#087435", "#da1414"],
        dataLabels: {
          enabled: true
        },
        chart: {
          type: "bar",
          height: 350,
          stacked: true
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        stroke: {
          width: 1,
          colors: ["#fff"]
        },
        title: {
          text: "State wise data"
        },
        xaxis: {
          categories: []
          // labels: {
          //     formatter: function (val) {
          //         return val + "K"
          //     }
          // }
        },
        yaxis: {
          title: {
            text: undefined
          }
        }
        // tooltip: {
        //     y: {
        //         formatter: function (val) {
        //             return val + "K"
        //         }
        //     }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40
      }
    };
  }
  async componentDidMount() {
    const response = await fetch(`${url}/homePage`);

    let res = await response.json();
    let ds = res["stateWiseData"];
    ds.pop();
    ds.pop();
    this.setState({ data: ds });

    this.setData();
  }
  render() {
    return (
      <MaterialUI.Paper
        elevation={10}
        style={
          window.innerWidth > 800
            ? {
                width: window.innerWidth * 0.8
              }
            : {
                width: window.innerWidth
              }
        }
      >
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={window.innerWidth > 800 ? "800" : "500"}
        />
      </MaterialUI.Paper>
    );
  }

  setData = () => {
    const states = this.state.data.map(c => {
      return c["Name of State / UT"];
    });

    const totalDeaths = this.state.data.map(c => {
      const [f, b] = c["Death"].split(",");
      if (f == "") return 0;
      if (b == undefined) {
        return parseInt(f);
      } else {
        return parseInt(f + b);
      }
    });
    const discharged = this.state.data.map(c => {
      const [f, b] = c["Cured/Discharged/Migrated"].split(",");
      if (f == "") return 0;
      if (b == undefined) {
        return parseInt(f);
      } else {
        return parseInt(f + b);
      }
    });

    const totalCases = this.state.data.map(c => {
      let [f, b] = c["Total Confirmed cases (Indian National)"].split(",");

      let i = 0;
      if (b == undefined) {
        i = parseInt(f);
      } else {
        i = parseInt(f + b);
      }

      [f, b] = c["Total Confirmed cases ( Foreign National )"].split(",");
      let fr = 0;
      if (b == undefined) {
        fr = parseInt(f);
      } else {
        fr = parseInt(f + b);
      }
      return i + fr;
    });

    this.setState({
      options: {
        dataLabels: {
          enabled: window.innerWidth > 800 ? true : false
        },
        chart: {
          type: "bar",
          height: 350,
          stacked: true
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        stroke: {
          width: 1,
          colors: ["#fff"]
        },
        title: {
          text: "State wise data"
        },
        xaxis: {
          categories: states
          // labels: {
          //     formatter: function (val) {
          //         return val
          //     }
          // }
        },
        yaxis: {
          title: {
            text: undefined
          }
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40
      },
      series: [
        {
          name: "Cases",
          data: totalCases
        },
        {
          name: "Recovered",
          data: discharged
        },
        {
          name: "Death",
          data: totalDeaths
        }
      ]
    });
  };
}

export default StateWise;
