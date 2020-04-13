import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import * as MaterialUI from "@material-ui/core";
import { url } from "../Configure";
import { useViewport } from "../Extras/ViewportProvider";

const convertDate = (d) => {
  const Y = 2020;
  let M = 0,
    D = 0;
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let [strMonth, strDay] = d.split(".");
  M = months.indexOf(strMonth);
  D = parseInt(strDay.trim());

  return Date.UTC(Y, M, D);
};
const convertToNumber = (d) => {
  const [f, b] = d.split(",");
  if (f === "") return 0;
  if (b === undefined) {
    return parseInt(f);
  } else {
    return parseInt(f + b);
  }
};

const DeathChange = () => {
  const { width } = useViewport();
  const options = {
    chart: {
      type: "area",
      // stacked: true,
    },
    colors: ["#008FFB", "#da1414", "#CED4DC"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
    xaxis: {
      type: "datetime",
    },
  };
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${url}/statusPage`);

      response
        .json()
        .then((res) => {
          console.log("gotdata");
          const data = res["deaths"]["table"];
          let deathData = [];
          let changeDeathData = [];
          data.forEach((i) => {
            let death = convertToNumber(i["Total\nDeaths"]);
            let changeDeath = convertToNumber(i["Change\nin Total"]);
            let d = convertDate(i["Date"]);
            let dayDeathData = [d, death];
            let DayChangeDeathData = [d, changeDeath];
            deathData.push(dayDeathData);
            changeDeathData.push(DayChangeDeathData);
          });
          setSeries([
            {
              name: "Change In Death",
              data: changeDeathData,
            },
            {
              name: "Death",
              data: deathData,
            },
          ]);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  return (
    <MaterialUI.Paper
      elevation={10}
      style={
        width > 800
          ? { width: width * 0.8 }
          : {
              width: width,
            }
      }
    >
      <br />
      <h3>Global Death Rate Caused By Covid-19</h3>
      <Chart options={options} series={series} type="area" height="300" />
    </MaterialUI.Paper>
  );
};

export default DeathChange;
