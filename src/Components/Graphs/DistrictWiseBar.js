import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { useViewport } from "../Extras/ViewportProvider";

const DistrictWiseBar = (props) => {
  const { width } = useViewport();
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const setData = () => {
      let res = [].concat(props.districtWiseData);
      res.pop();
      res.sort((a, b) => b.active_cases - a.active_cases);
      let categories = res.map((d) => d.name);
      let data = res.map((d) => parseInt(d.active_cases));

      setOptions({
        colors: ["#ff4747"],
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        xaxis: {
          categories: categories,
        },
      });
      setSeries([
        {
          name: "Active Cases",
          data: data,
        },
      ]);
    };

    setData();
  }, [props.districtWiseData]);

  return (
    <Chart
      options={options}
      series={series}
      height={width > 800 ? undefined : 700}
      width={width > 800 ? width * 0.7 : width}
      type="bar"
    />
  );
};

export default DistrictWiseBar;
