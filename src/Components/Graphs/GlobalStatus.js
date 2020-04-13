import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const GlobalStatus =props=> {
  const [series, setSeries] = useState([]);
  const options = {
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
  };
    
  

  useEffect(()=> {
    setSeries(
      [props.cases-props.deaths-props.recovered, props.recovered, props.deaths]
    );
  }, [props]);


    return (
      <div id="chart">
        <Chart
          options={options}
          series={series}
          type="donut"
          width={400}
        />
      </div>
    );
  }

  export default GlobalStatus;
