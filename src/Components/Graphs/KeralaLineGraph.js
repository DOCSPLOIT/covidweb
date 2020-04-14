import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import { Paper } from "@material-ui/core";

const KeralaLineGraph = ({ data: series }) => {
  useEffect(() => {
    ApexCharts.exec("chart", "updateSeries", series);
  }, [series]);
  const options = {
    chart: {
      id: "chart",
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000
        }
    },
    zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    
    xaxis: {
    //   type: "datetime",
        
    },
    
    stroke: {
      width: 3,
      curve:'smooth'
    },

    grid: {
      padding: {
        left: 10, // or whatever value that works
        right: 10, // or whatever value that works
      },
    },
    colors: ["#1e479e", "#8046eb","#dd3535"],
    //colors-order:['confirmed,active,death] or change it
  };
  return (
    <Paper elevation={10} style={{width:'60%'}} >
      <Chart options={options} series={[]} type="line" width="100%" height={400} />
    </Paper>
  );
};

export default KeralaLineGraph;
