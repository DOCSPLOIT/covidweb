import React, { Component } from "react";
import { url } from "../Configure";
import Chart from "react-apexcharts";
export default class DistrictWise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      options: {
        chart: {
          width: 380,
          type: "pie"
        },
        labels: [
          "Thrissur",
          "Alappuzha",
          "Kasargod",
          "Pathanamthitta",
          "Kannur",
          "ErnaKulam",
          "Kottayam",
          "Thiruvananthapuram",
          "Idukki",
          "Malappuram",
          "Kozhikode",
          "Palakkad",
          "Wayanad",
          "Kollam"
        ],
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
        colors: [
          "#008ffb",
          "#35dd81",
          "#dd3535",
          "#19ee1f",
          "#10ddcc",
          "#d610dd",
          "#e99999",
          "#30e073",
          "#dde030",
          "#106e34",
          "#ff9900",
          "#ce245c",
          "#75eaee",
          "#354fe7",
          "#3bd100"
        ]
      }
    };
  }
  componentDidMount() {
    fetch(`${url}/statusPage`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        
        this.setState({
          series: [
            res["keralaDistrictWise"]["Thrissur"]["active_cases"],
            res["keralaDistrictWise"]["Alappuzha"]["active_cases"],
            res["keralaDistrictWise"]["Kasaragod"]["active_cases"],
            res["keralaDistrictWise"]["Pathanamthitta"]["active_cases"],
            res["keralaDistrictWise"]["Kannur"]["active_cases"],
            res["keralaDistrictWise"]["Ernakulam"]["active_cases"],
            res["keralaDistrictWise"]["Kottayam"]["active_cases"],
            res["keralaDistrictWise"]["Thiruvananthapuram"]["active_cases"],
            res["keralaDistrictWise"]["Idukki"]["active_cases"],
            res["keralaDistrictWise"]["Malappuram"]["active_cases"],
            res["keralaDistrictWise"]["Kozhikode"]["active_cases"],
            res["keralaDistrictWise"]["Palakkad"]["active_cases"],
            res["keralaDistrictWise"]["Wayanad"]["active_cases"],
            res["keralaDistrictWise"]["Kollam"]["active_cases"]
          ]
        });
      });
  }
  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        width={700}
        type="donut"
      />
    );
  }
}
