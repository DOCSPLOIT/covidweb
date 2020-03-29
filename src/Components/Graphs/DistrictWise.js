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
        this.setState({
          series: [
            res["keralaDistrictWise"]["Thrissur"]["confirmed"],
            res["keralaDistrictWise"]["Alappuzha"]["confirmed"],
            res["keralaDistrictWise"]["Kasaragod"]["confirmed"],
            res["keralaDistrictWise"]["Pathanamthitta"]["confirmed"],
            res["keralaDistrictWise"]["Kannur"]["confirmed"],
            res["keralaDistrictWise"]["Ernakulam"]["confirmed"],
            res["keralaDistrictWise"]["Kottayam"]["confirmed"],
            res["keralaDistrictWise"]["Thiruvananthapuram"]["confirmed"],
            res["keralaDistrictWise"]["Idukki"]["confirmed"],
            res["keralaDistrictWise"]["Malappuram"]["confirmed"],
            res["keralaDistrictWise"]["Kozhikode"]["confirmed"],
            res["keralaDistrictWise"]["Palakkad"]["confirmed"],
            res["keralaDistrictWise"]["Wayanad"]["confirmed"],
            res["keralaDistrictWise"]["Kollam"]["confirmed"]
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
