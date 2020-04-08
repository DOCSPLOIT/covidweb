import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class DistrictWiseBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Active Cases",
          data: [],
        },
      ],
      options: {
        colors: ["#ff4747"],
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        xaxis: {},
      },
    };
  }

  setData = () => {
    let res = [].concat(this.props.districtWiseData);
    res.pop();
    res.sort((a, b) => b.active_cases - a.active_cases);
    let categories = res.map((d) => d.name);
    let data = res.map((d) => parseInt(d.active_cases));
    this.setState({
      options: {
        colors: ["#ff4747"],
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        xaxis: {
          categories: categories,
        },
      },
      series: [
        {
          name: "Active Cases",
          data: data,
        },
      ],
    });
  };

  componentDidMount() {
    this.setData();
  }
  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        height={window.innerWidth > 800 ? undefined : 700}
        width={
          window.innerWidth > 800 ? window.innerWidth * 0.7 : window.innerWidth
        }
        type="bar"
      />
    );
  }
}
