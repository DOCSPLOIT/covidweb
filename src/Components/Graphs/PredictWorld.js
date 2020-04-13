import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import * as MaterialUI from "@material-ui/core";
import { url } from "../Configure";
import { useViewport } from "../Extras/ViewportProvider";

const PredictWorld =()=> {
  const {width, height} = useViewport();
  const [series, setSeries] = useState([]);
  const options = {
    colors: ["#f06d30"],
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
  };
    
  useEffect(()=>{
    const fetchData = ()=>{
    fetch(`${url}/PredictionPage`)
      .then(response => response.json())
      .then(res => {
        const oneDay = 1000 * 3600 * 24;
        let today = Date.now();
        let gdata = [];
        const n = res["arr"].length;
        for (let i = 0; i < n; i++) {
          let d = today + i * oneDay;
          gdata.push([d, res["arr"][i][2]]);
        }
        setSeries(
          [
            {
              name: "World",
              data: gdata
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
        <MaterialUI.Paper
          elevation={10}
          style={
            width > 800
              ? {
                  width: width * 0.4,
                  height: height * 0.6
                }
              : { width: width }
          }
        >
          <h1>World</h1>
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
        </MaterialUI.Paper>
      </div>
    );
  }

export default PredictWorld;
