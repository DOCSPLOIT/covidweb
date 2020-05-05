import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleSequential } from "d3-scale";
import { interpolateReds } from "d3";
import { useViewport } from "../Extras/ViewportProvider";

// const minColor = "#ffffff";
// const maxColor = "#cc3535";

const colorInterpolator = (t) => {
  return interpolateReds(t * 0.85);
};

const url =
  "https://raw.githubusercontent.com/m3tasploit/projectfiles/master/india.json";

const IndiaMap = (props) => {
  const { width } = useViewport();
  const [data, setData] = useState([]);
  const [maxValue, setMaxValue] = useState(0);

  useEffect(() => {
    let data = [].concat(props.stateWiseData);
    data.forEach((element) => {
      element.active_cases =
        parseInt(element["Total Confirmed cases"]) -
        parseInt(element["Death"]) -
        parseInt(element["Cured/Discharged/Migrated"]);
    });
    let cases = data.map((elt) => elt.active_cases);
    let max = Math.max(...cases);
    setData(data);
    setMaxValue(max);
  }, [props.stateWiseData]);

  if (data.length > 0) {
    // const colorScale = scaleLinear()
    //   .domain([0, maxValue])
    //   .range([minColor, maxColor]);
    const colorScale = scaleSequential([0, maxValue], colorInterpolator).clamp(
      true
    );
    return (
      <div style={width > 800 ? { width: width * 0.6 } : { width: width }}>
        <ComposableMap
          width={100}
          height={100}
          projection="geoMercator"
          projectionConfig={
            width > 800
              ? { center: [80, 20.5], scale: 150 }
              : { center: [80, 22], scale: 150 }
          }
        >
          <Geographies geography={url}>
            {({ geographies }) =>
              geographies.map((geo, i) => {
                /* console.log(geo) */

                const st = data.find(
                  (d) => d["Name of State / UT"] === geo.properties.ST_NM
                );
                if (st) {
                  geo.properties.active_cases = st.active_cases;
                  geo.properties.death = st["Death"];
                  geo.properties.recovered = st["Cured/Discharged/Migrated"];
                  geo.properties.confirmed = st["Total Confirmed cases"];
                } else {
                  geo.properties.active_cases = "0";
                  geo.properties.death = "0";
                  geo.properties.recovered = "0";
                  geo.properties.confirmed = "0";
                }
                let col = st ? colorScale(st["active_cases"]) : "#F5F4F6";
                return (
                  <Geography
                    key={i + 1}
                    geography={geo}
                    fill={col}
                    onMouseEnter={() => {
                      const {
                        ST_NM,
                        active_cases,
                        recovered,
                        confirmed,
                        death,
                      } = geo.properties;
                      props.setContent({
                        death: death,
                        recovered: recovered,
                        confirmed: confirmed,
                        state: ST_NM,
                        active_cases: active_cases,
                      });
                    }}
                    // projection={projection}
                    style={{
                      default: {
                        stroke: "#22285e",
                        strokeWidth: 0.1,
                        outline: "none",
                      },
                      hover: {
                        stroke: "#22285e",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      pressed: {
                        stroke: "#22285e",
                        strokeWidth: 0.8,
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
    );
  } else {
    return null;
  }
};

export default IndiaMap;
