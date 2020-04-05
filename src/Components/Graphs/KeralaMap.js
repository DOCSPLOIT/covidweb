import React, { Component } from "react"
import {
    ComposableMap,
    Geographies,
    Geography,

} from "react-simple-maps"
import { scaleLinear } from "d3-scale"

const minColor = "#fcd9d9"
const maxColor = "#910000"

const url = 'https://raw.githubusercontent.com/m3tasploit/projectfiles/master/kerala.json';

class KeralaMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            maxValue: 0,
        }
        this.setContent = this.props.setContent;
        
    }

    componentDidMount() {
        fetch('https://covid19apiss.herokuapp.com/districtWiseKerala')
            .then(res => res.json())
            .then(data => {
                data.table.pop();
                let cases = data.table.map(elt => elt.active_cases)
                let max = Math.max(...cases);
                console.log('max', max)

                this.setState({
                    data: data.table,
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
                <div style={window.innerWidth>800?{width:'55%'}:{width:'100%'}}>
                    <ComposableMap width={100} height={100} projection='geoMercator' projectionConfig={window.innerWidth>800?{ center: [76, 10.55], scale: 1200 }:{center: [76, 10.55], scale: 1000}}>
                        <Geographies geography={url}>
                            {({ geographies }) => geographies.map((geo, i) => {
                                /* console.log(geo) */

                                const st = this.state.data.find(d => d.name === geo.properties.district);
                                if (st) {
                                    geo.properties.active_cases = st.active_cases;
                                    geo.properties.observation = st.observation;
                                    geo.properties.death=st.death;
                                    geo.properties.recovered=st.recovered;
                                    geo.properties.confirmed=st.confirmed;
                                }
                                let col = (st ? colorScale(st["active_cases"]) : "#F5F4F6");
                                return (
                                    <Geography
                                        key={i + 1}
                                        geography={geo}
                                        fill={col}
                                        onMouseEnter={() => {
                                            const { district, active_cases, observation,death,recovered,confirmed } = geo.properties;
                                            this.setContent({
                                                observation: observation,
                                                district: district,
                                                active_cases: active_cases,
                                                death:death,
                                                recovered:recovered,
                                                confirmed:confirmed
                                            });
                                           
                                            
                                        }}
                                        // projection={projection}
                                        style={{
                                            default: {
                                                stroke: "#5a3333",
                                                strokeWidth: .1,
                                                outline: "none",
                                            },
                                            hover: {
                                                stroke: "#910000",
                                                strokeWidth: .5,
                                                outline: "none",
                                            },
                                            pressed: {
                                                stroke: "#910000",
                                                strokeWidth: 1,
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

export default KeralaMap;