import React, { Component } from "react";
import { url } from "../Configure";
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
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
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
            "Kasargod"
          ]
        }
      }
    };
  }
  componentDidMount() {
    fetch(`${url}/statusPage`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          series: [
            {
              data: [
                
                parseInt(res["keralaDistrictWise"]["Thiruvananthapuram"]["active_cases"]),
                parseInt(res["keralaDistrictWise"]["Kollam"]["active_cases"]),
                parseInt(res["keralaDistrictWise"]["Pathanamthitta"]["active_cases"]),
                parseInt(res["keralaDistrictWise"]["Alappuzha"]["active_cases"]),
                parseInt(res["keralaDistrictWise"]["Kottayam"]["active_cases"]),
                parseInt(res["keralaDistrictWise"]["Idukki"]["active_cases"]),
                parseInt(res["keralaDistrictWise"]["Ernakulam"]["active_cases"]),
                parseInt(res["keralaDistrictWise"]["Thrissur"]["active_cases"]),
                parseInt(res["keralaDistrictWise"]["Palakkad"]["active_cases"]),
                parseInt(res["keralaDistrictWise"]["Malappuram"]["active_cases"]),
                parseInt(res["keralaDistrictWise"]["Kozhikode"]["active_cases"]),
                parseInt(res["keralaDistrictWise"]["Wayanad"]["active_cases"]),
                parseInt(res["keralaDistrictWise"]["Kannur"]["active_cases"]),
                parseInt(res["keralaDistrictWise"]["Kasaragod"]["active_cases"])
              ]
            }
          ]
        });
      });
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
