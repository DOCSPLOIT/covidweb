import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const IndiaStatus =props=> {
  const [series, setSeries] = useState([]);
  const options = {
    chart: {
      width: 380,
      type: "pie"
    },
    labels: ["Total Cases", "Total Recovered", "Total Deaths"],
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
  };        
  useEffect(()=> {
    setSeries([props.cases-props.recovered-props.deaths, props.recovered, props.deaths]);
  }, [props]);

    return (
      <div id="chart">
        <Chart
          options={options}
          series={series}
          width={420}
          type="donut"
        />
      </div>
    );
  }

export default IndiaStatus;