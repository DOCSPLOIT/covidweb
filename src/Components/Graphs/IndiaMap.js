import React, { Component } from "react"
import {
    ComposableMap,
    Geographies,
    Geography,

} from "react-simple-maps"
import { scaleLinear } from "d3-scale"

const minColor = "#a4a9d1"
const maxColor = "#384191"

const url = 'https://raw.githubusercontent.com/m3tasploit/projectfiles/master/india.json';

class IndiaMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            maxValue: 0,
        }
        this.setContent = this.props.setContent;
       
    }

    componentDidMount() {
        fetch('https://covid19apiss.herokuapp.com/stateWiseData')
            .then(res => res.json())
            .then(data => {
               
                data.forEach(element => {
                    element.active_cases = parseInt(element['Total Confirmed cases']) - parseInt(element['Death']) - parseInt(element['Cured/Discharged/Migrated']);
                });
                let cases = data.map(elt => elt.active_cases)
                let max = Math.max(...cases);
                console.log('max', max)
                this.setState({
                    data: data,
                    maxValue: max
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }


    render() {
        if (this.state.data.length > 0) {
            const colorScale = scaleLinear()
                .domain([1, this.state.maxValue])
                .range([minColor, maxColor])
            return (
                <div style={window.innerWidth > 800 ? { width: '60%' } : { width: '100%' }}>
                    <ComposableMap width={100} height={100} projection='geoMercator' projectionConfig={window.innerWidth > 800 ? { center: [80, 25], scale: 150 } : { center: [80, 22], scale: 150 }}>
                        <Geographies geography={url}>
                            {({ geographies }) => geographies.map((geo, i) => {
                                /* console.log(geo) */

                                const st = this.state.data.find(d => d['Name of State / UT'] === geo.properties.ST_NM);
                                if (st) {
                                    geo.properties.active_cases = st.active_cases;
                                    geo.properties.death = st['Death'];
                                    geo.properties.recovered = st['Cured/Discharged/Migrated'];
                                    geo.properties.confirmed = st['Total Confirmed cases'];
                                } else {
                                    geo.properties.active_cases = "0";
                                    geo.properties.death = "0";
                                    geo.properties.recovered = "0";
                                    geo.properties.confirmed = "0";
                                }
                                let col = (st ? colorScale(st["active_cases"]) : "#F5F4F6");
                                return (
                                    <Geography
                                        key={i + 1}
                                        geography={geo}
                                        fill={col}
                                        onMouseEnter={() => {
                                            const { ST_NM, active_cases, recovered, confirmed, death } = geo.properties;
                                            this.setContent({
                                                death: death,
                                                recovered: recovered,
                                                confirmed: confirmed,
                                                state: ST_NM,
                                                active_cases: active_cases
                                            });


                                        }}
                                        // projection={projection}
                                        style={{
                                            default: {
                                                stroke: "#22285e",
                                                strokeWidth: .1,
                                                outline: "none",
                                            },
                                            hover: {
                                                stroke: "#22285e",
                                                strokeWidth: .5,
                                                outline: "none",
                                            },
                                            pressed: {
                                                stroke: "#22285e",
                                                strokeWidth: .8,
                                                outline: "none",
                                            }
                                        }}
                                    />
                                )
                            })}
                        </Geographies>

                    </ComposableMap>
                </div>
            )
        } else {
            return (null)
        }
    }
}

export default IndiaMap;