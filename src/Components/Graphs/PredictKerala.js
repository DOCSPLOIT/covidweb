import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { Paper } from "@material-ui/core";
import { url } from "../Configure";
import { useViewport } from "../Extras/ViewportProvider";

const PredictKerala =()=> {
  const {width, height} = useViewport();
  const [series, setSeries] = useState([]);
  const options = {
    colors: ["#e73a8b"],
    xaxis: {
      style: {
        margin: 10
      },
      type: "datetime"
    },
    dataLabels: {
      enabled: true
    },

    // stroke: {
    //     curve: 'smooth'
    // },

    grid: {
      padding: {
        left: 10, // or whatever value that works
        right: 40 // or whatever value that works
      }
    }
  }

  useEffect(()=>{
    const fetchData = ()=>{
    fetch(`${url}/PredictionPage`)
      .then(response => response.json())
      .then(res => {
        const oneDay = 1000 * 3600 * 24;
        let today = Date.now();
        let kdata = [];
        const n = res["arr"].length;
        for (let i = 0; i < n; i++) {
          let d = today + i * oneDay;
          kdata.push([d, res["arr"][i][0]]);
        }
        setSeries(
          [
            {
              name: "Kerala",
              data: kdata
            }
          ]
        );
      })
      .catch(err=>console.log(err));
    }
    fetchData();
  },[]);

    return (
      <div
        style={
          width > 800
            ? {
                display: "flex",
                marginTop: width * 0.02,
                justifyContent: "center"
              }
            : {}
        }
      >
        <Paper
          elevation={10}
          style={
            width > 800
              ? {
                  width: width * 0.4,
                  marginRight: height * 0.2,
                  height: height * 0.6
                }
              : { width: width }
          }
        >
          <h1>Kerala</h1>
          <Chart
            width={
              width > 800
                ? width * 0.4
                : width
            }
            height={height * 0.4}
            type="area"
            options={options}
            series={series}
          />
        </Paper>
      </div>
    );
  }

  export default PredictKerala;
