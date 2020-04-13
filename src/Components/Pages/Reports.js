import React, { useEffect, useState } from "react";
import { url } from "../Configure";
import * as MaterialUI from "@material-ui/core";
import Loader from "../Extras/Loader";
import logosm from "../Media/logosm.png";
import iedclog from "../Media/iedcw.png";
import { useViewport } from "../Extras/ViewportProvider";

const Reports = ()=> {
  const {width} = useViewport();
    const [data, setData] = useState([]);
    const [isConnected, setConnected] = useState(false);
  
  useEffect(()=>{
    const fetchData = ()=>{
    fetch(`${url}/foreignCountries`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setConnected(true);
      });
    }
    fetchData();
  });

    const View = data.map((t) => {
      return (
        <MaterialUI.Paper
          style={{
            lineHeight: 0.5,
            width:
              width > 800
                ? width * 0.6
                : width,
            margin: 0,
          }}
          className="statusBoard"
          elevation={1}
        >
          <h2 style={{ lineHeight: 0 }}>{t["Country,Other"]}</h2>
          <center>
            <div style={{ display: "flex", margin: 0 }}>
              <div
                style={{
                  backgroundColor: "#ccdeff",
                  borderRadius: 5,
                  width: "25%",

                  margin: "0 5px",
                }}
              >
                <p style={{ color: "#3792cf" }}>Active</p>
                <b style={{ fontSize: 20, lineHeight: 0, color: "#3792cf" }}>
                  {t["ActiveCases"]}
                </b>
              </div>
              <div
                style={{
                  backgroundColor: "#fce4e4",
                  borderRadius: 5,
                  width: "25%",
                  margin: "0 2px",
                }}
              >
                <p style={{ color: "#cf3737" }}>Death</p>
                <b style={{ fontSize: 20, color: "#cf3737" }}>
                  {t["TotalDeaths"]}
                </b>
                <br />
                <br />
                <br />
              </div>

              <div
                style={{
                  backgroundColor: "#aae9c6",
                  borderRadius: 5,
                  width: "25%",
                  margin: "0 2px",
                }}
              >
                <p style={{ color: "#239c5a" }}> Recovered </p>
                <b style={{ fontSize: 20, color: "#239c5a" }}>
                  {t["TotalRecovered"]}
                </b>
                <br />
                <br />
                <br />
              </div>

              <div
                style={{
                  backgroundColor: "#98b6ec",
                  borderRadius: 5,
                  width: "25%",
                  margin: "0 2px",
                }}
              >
                <p style={{ color: "#1552c2" }}>Confirmed</p>
                <b style={{ fontSize: 20, color: "#1552c2" }}>
                  {t["TotalCases"]}
                </b>
              </div>
              <br />
              <br />
            </div>
          </center>
        </MaterialUI.Paper>
        
      );
    });

    return (
      <>
        {isConnected === true ? (
          <center>
            {View}
            <br />

            <p style={{ fontFamily: "lato" }}>Reference: www.worlodmeter.com</p>
            <br />
            <br />
          </center>
        ) : (
          <Loader />
        )}
        {width > 800 ? (
        <footer className="footer">
                <div className="footer__div">
                  <a href="http://sscollege.ac.in">
                    <img
                      alt="lgosm"
                      src={logosm}
                      style={{
                        width: "55px",
                        height: "55px",
                      }}
                    />
                  </a>
                    <a
                      href="http://sscollege.ac.in"
                      style={{ textDecoration: "none" }}
                    >
                      <p style={{ color: "white" }}>
                        <b style={{ fontSize: 20 }}>
                          Sullamussalam Science College |
                        </b>
                        <i style={{ fontSize: 14 }}>Powered By IEDC </i>
                      </p>
                    </a>
                  <a href="http://iedc.sscollege.ac.in">
                    <img
                      alt="sm"
                      src={iedclog}
                      style={{
                        width: "80px",
                        height: "80px",
                      }}
                    />
                  </a>
                </div>
              </footer>
      ) : (
        <>
          <br />
        </>
      )}
      </>
    );
  }

  export default Reports;
