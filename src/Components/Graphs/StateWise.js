import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import * as MaterialUI from "@material-ui/core";
import { useViewport } from "../Extras/ViewportProvider";

const StateWise = (props) => {
  const { width } = useViewport();
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState({});
  
  useEffect(() => {
    const fetchData = () => {
      let data = [].concat(props.stateWiseData);
      data.sort((a, b) => {
        return b["Total Confirmed cases"] - a["Total Confirmed cases"];
      });
      const states = data.map((c) => {
        return c["Name of State / UT"];
      });

      const totalDeaths = data.map((c) => {
        const [f, b] = c["Death"].split(",");

        if (b === undefined) {
          return parseInt(f);
        } else {
          return parseInt(f + b);
        }
      });
      const discharged = data.map((c) => {
        const [f, b] = c["Cured/Discharged/Migrated"].split(",");

        if (b === undefined) {
          return parseInt(f);
        } else {
          return parseInt(f + b);
        }
      });

      const totalCases = data.map((c) => {
        let [f, b] = c["Total Confirmed cases"].split(",");
        let fr = 0;
        if (b === undefined) {
          fr = parseInt(f);
        } else {
          fr = parseInt(f + b);
        }
        return fr;
      });
      setOptions({
        colors: ["#032570", "#087435", "#da1414"],
        dataLabels: {
          enabled: true,
        },
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        stroke: {
          width: 1,
          colors: ["#fff"],
        },
        title: {
          text: "State wise data",
        },

        xaxis: {
          categories: states,

          labels: {
            show: true,
            align: "right",

            style: {
              colors: [],
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
              cssClass: "apexcharts-yaxis-label",
            },
          },
        },
      });

      setSeries([
        {
          name: "Cases",
          data: totalCases,
        },
        {
          name: "Recovered",
          data: discharged,
        },
        {
          name: "Death",
          data: totalDeaths,
        },
      ]);
    };
    fetchData();
  }, [props.stateWiseData]);

  return (
    <MaterialUI.Paper
      elevation={10}
      style={
        width > 800
          ? {
              width: width * 0.8,
            }
          : {
              width: width,
            }
      }
    >
      <Chart
        options={options}
        series={series}
        type="bar"
        height={width > 800 ? "1000" : "1000"}
      />
    </MaterialUI.Paper>
  );
};

export default StateWise;
