import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import { useViewport } from "../Extras/ViewportProvider";

const minColor = "#fcd9d9";
const maxColor = "#910000";

const url =
  "https://raw.githubusercontent.com/m3tasploit/projectfiles/master/kerala.json";

const KeralaMap = (props) => {
  const { width } = useViewport();
  const [data, setData] = useState([]);
  const [maxValue, setMaxValue] = useState(0);

  useEffect(() => {
    let data = [].concat(props.districtWiseData);
    data.pop();
    let cases = data.map((elt) => elt.active_cases);
    let max = Math.max(...cases);
    setData(data);
    setMaxValue(max);
  }, [props.districtWiseData]);

  if (data.length > 0) {
    const colorScale = scaleLinear()
      .domain([1, maxValue])
      .range([minColor, maxColor]);
    return (
      <div style={width > 800 ? { width: width * 0.55 } : { width: width }}>
        <ComposableMap
          width={100}
          height={100}
          projection="geoMercator"
          projectionConfig={
            width > 800
              ? { center: [76, 10.55], scale: 1200 }
              : { center: [76, 10.55], scale: 1000 }
          }
        >
          <Geographies geography={url}>
            {({ geographies }) =>
              geographies.map((geo, i) => {
                /* console.log(geo) */

                const st = data.find((d) => d.name === geo.properties.district);
                if (st) {
                  geo.properties.active_cases = st.active_cases;
                  geo.properties.observation = st.observation;
                  geo.properties.death = st.death;
                  geo.properties.recovered = st.recovered;
                  geo.properties.confirmed = st.confirmed;
                }
                let col = st ? colorScale(st["active_cases"]) : "#F5F4F6";
                return (
                  <Geography
                    key={i + 1}
                    geography={geo}
                    fill={col}
                    onMouseEnter={() => {
                      const {
                        district,
                        active_cases,
                        observation,
                        death,
                        recovered,
                        confirmed,
                      } = geo.properties;
                      props.setContent({
                        observation: observation,
                        district: district,
                        active_cases: active_cases,
                        death: death,
                        recovered: recovered,
                        confirmed: confirmed,
                      });
                    }}
                    // projection={projection}
                    style={{
                      default: {
                        stroke: "#5a3333",
                        strokeWidth: 0.1,
                        outline: "none",
                      },
                      hover: {
                        stroke: "#910000",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      pressed: {
                        stroke: "#910000",
                        strokeWidth: 1,
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

export default KeralaMap;
