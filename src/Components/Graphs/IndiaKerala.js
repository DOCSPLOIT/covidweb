import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { url } from "../Configure";
import * as MaterialUI from "@material-ui/core";
import { useViewport } from "../Extras/ViewportProvider";

const IndiaKerala = () => {
  const { width } = useViewport();
  const [series, setSeries] = useState([]);
  const options = {
    xaxis: {
      style: {
        margin: 10,
      },
      type: "datetime",
    },
    stroke: {
      width: 5,
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
          let idata = res["historyIndia"].map((d) => [d.timestamp, d.cases]);
          let ksa = res["historyOthers"].map((d) => [d.timestamp, d.ksa]);
          let qatar = res["historyOthers"].map((d) => [d.timestamp, d.qatar]);
          let uae = res["historyOthers"].map((d) => [d.timestamp, d.uae]);
          let kuwait = res["historyOthers"].map((d) => [d.timestamp, d.kuwait]);
          let oman = res["historyOthers"].map((d) => [d.timestamp, d.oman]);
          idata.splice(0, 31);
          setSeries([
            {
              name: "India",
              data: idata,
            },
            {
              name: "Saudi Arabia",
              data: ksa,
            },
            {
              name: "Qatar",
              data: qatar,
            },
            {
              name: "UAE",
              data: uae,
            },
            {
              name: "Kuwait",
              data: kuwait,
            },
            {
              name: "Oman",
              data: oman,
            },
          ]);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  return (
    <>
      <MaterialUI.Paper
        style={{ height: 550, width: width > 800 ? width * 0.8 : width }}
        elevation={10}
      >
        <br />
        <h3>India-Gulf Comparison</h3>
        <Chart
          options={options}
          series={series}
          type="line"
          width="100%"
          height="400px"
        />
      </MaterialUI.Paper>
    </>
  );
};

export default IndiaKerala;
