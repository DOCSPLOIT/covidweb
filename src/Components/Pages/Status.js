import React, { useState, useEffect } from "react";
import "../Styles/status.css";
import IndiaHistory from "../Graphs/IndiaHistory";
import GlobalHistory from "../Graphs/GlobalHistory";
import DeathChange from "../Graphs/DeathsChange";
import { Paper } from "@material-ui/core";
import logosm from "../Media/logosm.png";
import iedclog from "../Media/iedcw.png";
import DistrictWise from "../Graphs/DistrictWise";
import { url, mapGit_LINK } from "../Configure";
import Loader from "../Extras/Loader";
import KeralaStatus from "../Graphs/KeralaStatus";
import IndiaStatus from "../Graphs/IndiaStatus";
import GlobalStatus from "../Graphs/GlobalStatus";
import KeralaHistory from "../Graphs/KeralaHistory";
import { useViewport } from "../Extras/ViewportProvider";

const Status = () => {
  const { width, height } = useViewport();
  const [data, setData] = useState({
    isLoading: false,
    keralaCurrent: {
      deaths: 0,
      confirmed: 0,
      recovered: 0,
    },
    indiaTdeath: 0,
    worldTdeath: 0,
    worldTcases: 0,
    indiaTcases: 0,
    worldRecover: 0,
    indiaRecover: 0,
  });

  useEffect(() => {
    const fetchData = () => {
      fetch(`${url}/homePage`)
        .then((r) => r.json())
        .then((res) => {
          setData({
            indiaRecover: res["india"]["TotalRecovered"],
            indiaTdeath: res["india"]["TotalDeaths"],
            worldRecover: res["global"]["recovered"],
            worldTdeath: res["global"]["deaths"],
            worldTcases: res["global"]["cases"],
            indiaTcases: res["india"]["TotalCases"],
            keralaCurrent: {
              deaths: res["keralaLive"]["deaths"],
              recovered: res["keralaLive"]["recovered"],
              confirmed: res["keralaLive"]["confirmed"],
            },
            isLoading: true,
          });
        });
    };
    fetchData();
  }, []);

  return (
    <>
      {data.isLoading === true ? (
        <div>
          {width > 800 ? (
            <div>
              <center>
                <KeralaHistory />
                <br />
                <IndiaHistory />
                <br />

                <br />
                <div style={{ width: width * 0.8 }}>
                  <GlobalHistory />
                </div>
                <br />
                <DeathChange />
              </center>
              <br />
              <center>
                <Paper
                  elevation={10}
                  style={{
                    width: width * 0.8,
                  }}
                >
                  <br />
                  <h3 style={{ textAlign: "center" }}>
                    Kerala DistrictWise Active Cases
                  </h3>
                  <DistrictWise />
                  <br />
                </Paper>
              </center>
              <br />
              <center>
                <Paper
                  elevation={10}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignSelf: "center",
                    width: "60%",
                    textAlign: "center",
                  }}
                >
                  <h3>Choropleth Maps</h3>
                  <img
                    src={mapGit_LINK}
                    alt="git%%TODAY&&do.item.prop.LINK"
                    height={550}
                  />
                  <p>
                    For more maps{" "}
                    <a
                      style={{ color: "black", textDecoration: "none" }}
                      href="https://github.com/m3tasploit/projectfiles/tree/master/choropleth"
                    >
                      Click Here
                    </a>
                  </p>
                  <br />
                  <b
                    style={{ fontFamily: "lato", fontSize: 12, color: "black" }}
                  >
                    GIS MAP Courtesy : Shimod KP, Geographical Research Forum,
                    Kannur University
                  </b>
                </Paper>
              </center>
              <div
                style={{
                  display: "flex",
                  marginTop: height * 0.1,
                }}
              >
                <h2 style={{ marginLeft: height * 0.05 }}>Kerala</h2>
                <div
                  style={{
                    marginTop: -height * 0.2,
                    marginLeft: -height * 0.25,
                  }}
                >
                  <KeralaStatus
                    cases={parseInt(data.keralaCurrent.confirmed)}
                    deaths={parseInt(data.keralaCurrent.deaths)}
                    recovered={parseInt(data.keralaCurrent.recovered)}
                  />
                </div>
                <h2 style={{ textAlign: "center" }}>India</h2>
                <div
                  style={{
                    marginTop: height * 0.05,
                    marginLeft: -height * 0.05,
                  }}
                >
                  <IndiaStatus
                    cases={parseInt(data.indiaTcases)}
                    deaths={parseInt(data.indiaTdeath)}
                    recovered={parseInt(data.indiaRecover)}
                  />
                </div>
                <h2 style={{ marginLeft: 5 }}>World</h2>
                <div
                  style={{
                    marginTop: height * 0.05,
                    marginLeft: -height * 0.07,
                  }}
                >
                  <GlobalStatus
                    cases={parseInt(data.worldTcases)}
                    deaths={parseInt(data.worldTdeath)}
                    recovered={parseInt(data.worldRecover)}
                  />
                </div>
              </div>

              <br />
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
            </div>
          ) : (
            <div>
              {/* Mobile View */}
              <center>
                <KeralaHistory />

                <IndiaHistory />

                <div
                  style={{
                    width: width,
                    height: 10,
                    // marginTop: height * 0.1
                  }}
                >
                  <GlobalHistory />
                </div>
                <Paper
                  elevation={10}
                  style={{
                    width: width,
                  }}
                >
                  <br />
                  <div
                    style={{
                      width: width,
                      marginTop: height * 0.6,
                    }}
                  >
                    <h3 style={{ textAlign: "center" }}>
                      Kerala DistrictWise Active Cases
                    </h3>

                    <DistrictWise />
                  </div>
                  <br />
                  <p
                    style={{
                      fontFamily: "Lato",
                      fontSize: 12,
                      color: "gray",
                    }}
                  ></p>
                </Paper>
                <Paper
                  elevation={10}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <h3>Choropleth Maps</h3>
                  <img src={mapGit_LINK} height={350} alt="mapCurrent" />
                  <p>
                    For more maps{" "}
                    <a
                      style={{ color: "black", textDecoration: "none" }}
                      href="https://github.com/m3tasploit/projectfiles/tree/master/choropleth"
                    >
                      Click Here
                    </a>
                  </p>
                  <br />
                  <p
                    style={{ fontFamily: "lato", fontSize: 14, color: "black" }}
                  >
                    GIS MAP Courtesy : Shimod KP,Geographical Research Forum ,
                    Kannur University
                  </p>
                </Paper>
                <h3 style={{ textAlign: "center", fontSize: 25 }}>Kerala</h3>
                <center>
                  <KeralaStatus
                    cases={parseInt(data.keralaCurrent.confirmed)}
                    deaths={parseInt(data.keralaCurrent.deaths)}
                    recovered={parseInt(data.keralaCurrent.recovered)}
                  />{" "}
                </center>
                <h3 style={{ textAlign: "center", fontSize: 25 }}>India</h3>
                <center>
                  {" "}
                  <IndiaStatus
                    cases={parseInt(data.indiaTcases)}
                    deaths={parseInt(data.indiaTdeath)}
                    recovered={parseInt(data.indiaRecover)}
                  />
                </center>
                <h3 style={{ textAlign: "center", fontSize: 25 }}>World</h3>
                <center>
                  <GlobalStatus
                    cases={parseInt(data.worldTcases)}
                    deaths={parseInt(data.worldTdeath)}
                    recovered={parseInt(data.worldRecover)}
                  />
                </center>
                <br />
              </center>
              <br />
              <br />
              <br />
              <br />
            </div>
          )}{" "}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Status;
