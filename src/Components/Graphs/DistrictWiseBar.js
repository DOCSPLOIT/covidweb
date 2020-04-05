import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class DistrictWiseBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
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
          categories: [
            "Thiruvananthapuram",
            "Kollam",
            "Pathanamthitta",
            "Alappuzha",
            "Kottayam",
            "Idukki",
            "Ernakulam",
            "Thrissur",
            "Palakkad",
            "Malappuram",
            "Kozhikode",
            "Wayanad",
            "Kannur",
            "Kasargod",
          ],
        },
      },
    };
  }

  setData = () => {
    let res = [].concat(this.props.districtWiseData);
    res.pop();
    this.setState({
      series: [
        {
          data: [
            parseInt(res[0]["active_cases"]),
            parseInt(res[1]["active_cases"]),
            parseInt(res[2]["active_cases"]),
            parseInt(res[3]["active_cases"]),
            parseInt(res[4]["active_cases"]),
            parseInt(res[5]["active_cases"]),
            parseInt(res[6]["active_cases"]),
            parseInt(res[7]["active_cases"]),
            parseInt(res[8]["active_cases"]),
            parseInt(res[9]["active_cases"]),
            parseInt(res[10]["active_cases"]),
            parseInt(res[11]["active_cases"]),
            parseInt(res[12]["active_cases"]),
            parseInt(res[13]["active_cases"]),
          ],
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
