import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { url } from "../Configure";
import * as MaterialUI from "@material-ui/core";
import { useViewport } from "../Extras/ViewportProvider";

const IndiaKerala =()=> {
    const {width} = useViewport();
    const [series, setSeries] = useState([]);
    const options = {
        xaxis: {
            style: {
                margin: 10
            },
            type: "datetime"
        },
        markers: {
            size: 4,
        },
        stroke: {
            width: 3
        },

        grid: {
            padding: {
                left: 10, // or whatever value that works
                right: 10 // or whatever value that works
            }
        },
        colors:["#eb4646","#8046eb"]
    }

    useEffect(()=> {
        const fetchData = async()=>{
        const response = await fetch(`${url}/statusPage`);
        response.json()
        .then((res)=>{
            let idata = res["historyIndia"].map(d => {
                return [d.timestamp, d.cases]
            });
    
            let kdata = res["historyKerala"].map(d => {
                return [d.timestamp, d.cases]
            });
        idata.splice(0, 31);
        kdata.splice(0, 30);
            setSeries(
                [
                    {
                        name: "India",
                        data: idata
                    },
                    {
                        name: "Kerala",
                        data: kdata
                    }
                ]
            );
        })
        .catch((err)=>console.log(err));
    }
    fetchData();
    },[]);

        return (
            <>
                <MaterialUI.Paper style={{height:450,width:width>800?width*.8:width}} elevation={10}>
                    <br/>
                    <h3>India-Kerala Comparison</h3>
                    <Chart
                        options={options}
                        series={series}
                        type="line"
                        width="100%"
                        height="300px"
                        />
                </MaterialUI.Paper>
            </>
        );
    }

export default IndiaKerala;