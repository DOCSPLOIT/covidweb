import React, { Component } from "react";
import "../Styles/status.css";
import IndiaHistory from "../Graphs/IndiaHistory";
import GlobalHistory from "../Graphs/GlobalHistory";
import DeathChange from "../Graphs/DeathsChange";
import GIFFB from "../Media/giffb.gif";
import { Paper } from "@material-ui/core";
import logosm from "../Media/logosm.png";
import iedclog from "../Media/iedcw.png";
import DistrictWise from "../Graphs/DistrictWise";
import { url } from "../Configure";
import Loader from "../Extras/Loader";
import KeralaStatus from "../Graphs/KeralaStatus";
import IndiaStatus from "../Graphs/IndiaStatus";
import GlobalStatus from "../Graphs/GlobalStatus";
export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      keralaCurrent: {
        deaths: 0,
        confirmed: 0,
        recovered: 0
      },
      indiaTdeath: 0,
      worldTdeath: 0,
      worldTcases: 0,
      indiaTcases: 0,
      worldRecover: 0,
      indiaRecover: 0
    };
  }
  componentDidMount() {
    fetch(`${url}/homePage`)
      .then(r => r.json())
      .then(res => {
        this.setState({
          indiaRecover: res["india"]["TotalRecovered"],
          indiaTdeath: res["india"]["TotalDeaths"],
          worldRecover: res["global"]["recovered"],
          worldTdeath: res["global"]["deaths"],
          worldTcases: res["global"]["cases"],
          indiaTcases: res["india"]["TotalCases"],
          keralaCurrent: {
            deaths: res["keralaLive"]["deaths"],
            recovered: res["keralaLive"]["recovered"],
            confirmed: res["keralaLive"]["confirmed"]
          },
          isLoading: true
        });
      });
  }

  render() {
    return (
      <>
        {this.state.isLoading === true ? (
          <div>
            {window.innerWidth > 800 ? (
              <div>
                <center>
                  <div
                    style={{
                      width: window.innerWidth * 0.8,
                      marginTop: window.innerHeight * 0.15
                    }}
                  >
                    <h3>India Cases Till Today</h3>
                    <div style={{ marginTop: window.innerHeight * 0.1 }}>
                      <IndiaHistory />
                    </div>
                  </div>
                  <div style={{ width: window.innerWidth * 0.8 }}>
                    <h3>World Cases Till Today</h3>
                    <GlobalHistory />
                  </div>
                  <h3> Total World Death </h3>
                  <DeathChange />
                </center>
                <br /> <br />
                <Paper
                  elevation={10}
                  style={{
                    marginLeft: window.innerWidth * 0.25,
                    width: window.innerWidth * 0.52
                  }}
                >
                  <br />
                  <h3 style={{ textAlign: "center" }}>
                    Kerala DistrictWise Confirmed Cases
                  </h3>
                  <DistrictWise />
                  <br />
                  <p
                    style={{
                      fontFamily: "Lato",
                      fontSize: 12,
                      color: "gray",
                      textAlign: "center"
                    }}
                  >
                    *data updated in reference with covid19india.com
                  </p>
                  <br />
                </Paper>
                <div
                  style={{
                    display: "flex",
                    marginTop: window.innerHeight * 0.1
                  }}
                >
                  <h2 style={{ marginLeft: window.innerHeight * 0.05 }}>
                    Kerala
                  </h2>
                  <div
                    style={{
                      marginTop: -window.innerHeight * 0.2,
                      marginLeft: -window.innerHeight * 0.25
                    }}
                  >
                    <KeralaStatus
                      cases={parseInt(this.state.keralaCurrent.confirmed)}
                      deaths={parseInt(this.state.keralaCurrent.deaths)}
                      recovered={parseInt(this.state.keralaCurrent.recovered)}
                    />
                  </div>
                  <h2 style={{ textAlign: "center" }}>India</h2>
                  <div
                    style={{
                      marginTop: window.innerHeight * 0.05,
                      marginLeft: -window.innerHeight * 0.05
                    }}
                  >
                    <IndiaStatus
                      cases={parseInt(this.state.indiaTcases)}
                      deaths={parseInt(this.state.indiaTdeath)}
                      recovered={parseInt(this.state.indiaRecover)}
                    />
                  </div>
                  <h2 style={{ marginLeft: 5 }}>World</h2>
                  <div
                    style={{
                      marginTop: window.innerHeight * 0.05,
                      marginLeft: -window.innerHeight * 0.07
                    }}
                  >
                    <GlobalStatus
                      cases={parseInt(this.state.worldTcases)}
                      deaths={parseInt(this.state.worldTdeath)}
                      recovered={parseInt(this.state.worldRecover)}
                    />
                  </div>
                </div>
                <br />
                <br />
                <center>
                  <Paper elevation={4} style={{ width: 350 }}>
                    <img src={GIFFB} alt="autedecatre" />
                  </Paper>
                </center>
                <br />
                <br />
                <footer>
                  <div className="footer">
                    <br />
                    <a href="http://sscollege.ac.in">
                      {" "}
                      <img
                        src={logosm}
                        style={{
                          width: "75px",
                          height: "75px",
                          position: "absolute",
                          marginLeft: "20px"
                        }}
                      />
                    </a>
                    <center>
                      <a
                        href="http://sscollege.ac.in"
                        style={{ textDecoration: "none" }}
                      >
                        <p style={{ color: "white" }}>
                          <b style={{ fontSize: 20 }}>
                            Sullamussalam Science College |
                          </b>
                          <l style={{ fontSize: 14 }}>Powered By IEDC </l>
                        </p>
                      </a>
                    </center>
                  </div>

                  <a href="http://iedc.sscollege.ac.in">
                    {" "}
                    <img
                      src={iedclog}
                      style={{
                        width: "100px",
                        height: "100px",
                        position: "absolute",
                        marginLeft: window.innerWidth * 0.9
                      }}
                    />
                  </a>
                </footer>
              </div>
            ) : (
              <div>
                {/* Mobile View */}
                <center>
                  <div
                    style={{
                      width: window.innerWidth,
                      height: 10,
                      marginTop: window.innerHeight * 0.15
                    }}
                  >
                    <h3>India Cases By Day</h3>
                    <IndiaHistory />
                  </div>
                  <div
                    style={{
                      width: window.innerWidth,
                      height: 10,
                      marginTop: window.innerHeight * 0.6
                    }}
                  >
                    <h3>World Cases By Day</h3>
                    <GlobalHistory />
                  </div>
                  <Paper
                    elevation={10}
                    style={{
                      width: window.innerWidth,
                      marginTop: window.innerHeight * 0.9
                    }}
                  >
                    <br />
                    <h3 style={{ textAlign: "center" }}>
                      Kerala DistrictWise Confirmed Cases
                    </h3>
                    <br />
                    <DistrictWise />

                    <br />
                    <p
                      style={{
                        fontFamily: "Lato",
                        fontSize: 12,
                        color: "gray"
                      }}
                    >
                      *data updated in reference with covid19india.com
                    </p>
                  </Paper>
                  <h3 style={{ textAlign: "center", fontSize: 25 }}>Kerala</h3>
                  <center>
                    <KeralaStatus
                      cases={parseInt(this.state.keralaCurrent.confirmed)}
                      deaths={parseInt(this.state.keralaCurrent.deaths)}
                      recovered={parseInt(this.state.keralaCurrent.recovered)}
                    />{" "}
                  </center>
                  <h3 style={{ textAlign: "center", fontSize: 25 }}>India</h3>
                  <center>
                    {" "}
                    <IndiaStatus
                      cases={parseInt(this.state.indiaTcases)}
                      deaths={parseInt(this.state.indiaTdeath)}
                      recovered={parseInt(this.state.indiaRecover)}
                    />
                  </center>
                  <h3 style={{ textAlign: "center", fontSize: 25 }}>World</h3>
                  <center>
                    <GlobalStatus
                      cases={parseInt(this.state.worldTcases)}
                      deaths={parseInt(this.state.worldTdeath)}
                      recovered={parseInt(this.state.worldRecover)}
                    />
                  </center>
                  <div>
                    <br />
                    <br />
                    <img src={GIFFB} alt="autedecatre" />
                  </div>
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
  }
}
