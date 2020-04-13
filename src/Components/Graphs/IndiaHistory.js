import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { url } from "../Configure";
import * as MaterialUI from "@material-ui/core";
import { useViewport } from "../Extras/ViewportProvider";

const IndiaHistory = () => {
  const { width } = useViewport();
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

    grid: {
      padding: {
        left: 10, // or whatever value that works
        right: 10, // or whatever value that works
      },
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${url}/statusPage`);
      response
        .json()
        .then((res) => {
          let data = res["historyIndia"].map((d) => {
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
  },[]);

  return (
    <>
      <MaterialUI.Paper
        elevation={10}
        style={{ width: width > 800 ? width * 0.8 : width }}
      >
        <br />
        <h3>India Cases Till Today</h3>
        <Chart
          options={options}
          series={series}
          type="area"
          width="100%"
          height="300"
        />
      </MaterialUI.Paper>
    </>
  );
};

export default IndiaHistory;
