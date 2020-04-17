import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Paper } from "@material-ui/core";
import { url } from "../Configure";
import { useViewport} from "../Extras/ViewportProvider";

const KeralaLineGraph = () => {
  const { width } = useViewport();
  const [data, setData] = useState([]);

  const options = {
    xaxis: {
      style: {
        margin: 10,
      },
      type: "datetime",
    },
    stroke: {
      // curve: "smooth",
      width: 5,
    },
    grid: {
      padding: {
        left: 10, // or whatever value that works
        right: 10, // or whatever value that works
      },
    },
    colors: ["#8046eb", "#179600", "#cc2200"],
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${url}/statusPage`);
      response
        .json()
        .then((res) => {
          let cases = res["historyKerala"].map((d) => {
            return [d.timestamp, d.cases];
          });
          cases.splice(0, 45);
          let active = res["historyKerala"].map((d) => {
            return [d.timestamp, d.active];
          });
          active.splice(0, 45);
          let recovered = res["historyKerala"].map((d) => {
            return [d.timestamp, d.recovered];
          });
          recovered.splice(0, 45);
          setData([
            {
              name: "Confirmed",
              data: cases,
            },
            {
              name: "Recovered",
              data: recovered,
            },
            {
              name: "Active",
              data: active,
            },
          ]);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  return (
    <>
      <Paper
        elevation={10}
        style={{ height: 450, width: width > 800 ? width * 0.8 : width }}
      >
        <br />
        <h3>Kerala confirmed-recovered-active comparison</h3>
        <Chart
          options={options}
          series={data}
          type="line"
          width="100%"
          height="300px"
        />
      </Paper>
    </>
  );
};

export default KeralaLineGraph;
