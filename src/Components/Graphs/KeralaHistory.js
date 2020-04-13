import React, { useState, useEffect } from 'react'
import Chart from "react-apexcharts";
import { url } from "../Configure";
import * as MaterialUI from "@material-ui/core";
import { useViewport } from '../Extras/ViewportProvider';

const KeralaHistory =()=> {
    const {width, height} = useViewport();
    const [series, setSeries] = useState([]);
    const options = {
        xaxis: {
            style: {
                margin: 10
            },
            type: "datetime"
        },
        dataLabels: {
            enabled: true
        },

        stroke: {
            width: 2.5
        },

        grid: {
            padding: {
                left: 10, // or whatever value that works
                right: 10 // or whatever value that works
            }
        }
    };


    useEffect(()=>{
        const fetchData = ()=>{
        fetch(`${url}/statusPage`).then(r => r.json())
            .then(res => {
                let data = res["historyKerala"].map(d => {
                    return [d.timestamp, d.cases];
                });
        
                setSeries(
                    [
                        {
                            name: "Cases",
                            data: data
                        }
                    ]
                );
            })
            .catch(err=>console.log(err));
        }
        fetchData();
    },[]);
        return (
            <>
                <MaterialUI.Paper elevation={10} style={{
                    marginTop: height * .15,
                    width: width > 800 ? width * .8 : width
                }}>
                    <br/>
                    <h3>Kerala Cases Till Today</h3>
                    <Chart
                        options={options}
                        series={series}
                        type="area"
                        width="100%"
                        height="300"
                    />
                </MaterialUI.Paper>
            </>
        )
    }

    export default KeralaHistory;