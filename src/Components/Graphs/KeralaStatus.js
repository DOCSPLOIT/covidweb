import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { useViewport } from "../Extras/ViewportProvider";

const KeralaStatus =props=> {
  const {width, height} = useViewport();
  const [series, setSeries] = useState([]);
  const options = {
    chart: {
      width: 380,
      type: "pie"
    },
    labels: ["Active", "Recovered", "Deaths"],
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



  useEffect(()=>{
    setSeries(
      [
        props.cases-props.recovered-props.deaths,
        props.recovered,
        props.deaths
      ]
    );
  },[props]);

    return (
      <div
        id="chart"
        style={
          width > 800
            ? {
                marginTop: height * 0.25,
                marginLeft: width * 0.1
              }
            : {}
        }
      >
        <Chart
          options={options}
          series={series}
          width={380}
          type="donut"
        />
      </div>
    );
  }

  export default KeralaStatus;
