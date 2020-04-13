import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { url } from "../Configure";
import * as MaterialUI from "@material-ui/core";

const GlobalHistory = () => {
  const [series, setSeries] = useState([]);
  const options = {
    xaxis: {
      style: {
        margin: 10,
      },
      type: "datetime",
    },
    dataLabels: {
      enabled: true,
    },

    stroke: {
      width: 2.5,
    },
    colors: ["#ee571b"],
    // grid: {
    //   padding: {
    //     left: 10, // or whatever value that works
    //     right: 40, // or whatever value that works
    //   },
    // },
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${url}/statusPage`);
      response
        .json()
        .then((res) => {
          let data = res["historyGlobal"].map((d) => {
            return [d.timestamp, d.cases];
          });
          setSeries([
            {
              name: "Cases",
              data: data,
            },
          ]);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  return (
    <MaterialUI.Paper elevation={10}>
      <br />
      <h3>Global Cases Till Today</h3>
      <Chart
        options={options}
        series={series}
        type="area"
        width="100%"
        height="300"
      />
    </MaterialUI.Paper>
  );
};

export default GlobalHistory;
