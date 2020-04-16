import React, { useState, useEffect } from "react";
import { url } from "../Configure";
import "../Styles/home.css";
import * as MaterialUI from "@material-ui/core";
import StateWise from "../Graphs/StateWise";
import { Animated } from "react-animated-css";
import logosm from "../Media/logosm.png";
import iedclog from "../Media/iedcw.png";
import Loader from "../Extras/Loader";
import DistrictWiseBar from "../Graphs/DistrictWiseBar";
import KeralaMap from "../Graphs/KeralaMap";
import IndiaMap from "../Graphs/IndiaMap";
import SlideShow from "../Graphs/SlideShow";
import IndiaKerala from "../Graphs/IndiaKerala";
import StateWiseOrg from "../Graphs/StateWiseOrg";
import KeralaLineGraph from "../Graphs/KeralaLineGraph";
import { useViewport } from "../Extras/ViewportProvider";

const LocalHome = () => {
  const { width, height } = useViewport();
  const [homeData, setHomeData] = useState({
    stateWiseDataOrg: [],
    districtWiseData: [],
    stateWiseData: [],
    indiaTdeath: 0,
    worldTdeath: 0,
    worldTcases: 0,
    indiaTcases: 0,
    worldRecover: 0,
    indiaRecover: 0,
    globalPredict: 0,
    indiaPredict: 0,
    keralaPredict: 0,
    keralaTdeath: 0,
    keralaTCases: 0,
    keralaRecover: 0,
    keralaActive: 0,
    keralaConfirmed: 0,
    indiaActive: 0,
    worldActive: 0,
    keralaObserve: 0,
  });

  const [isLoaded, setLoaded] = useState(false);
  const [keralamapData, setkeralamapData] = useState({
    KeralaMapProps: {
      district: "",
      active_cases: 0,
      observation: 0,
      death: 0,
      recovered: 0,
    },
  });
  const [indiamapData, setindiamapData] = useState({
    IndiaMapProps: {
      states: "",
      active_cases: 0,
      death: 0,
      confirmed: 0,
      recovered: 0,
    },
  });

  useEffect(() => {
    const fetchData = () => {
      fetch(`${url}/homePage`)
        .then((r) => r.json())
        .then((res) => {
          setHomeData({
            keralaObserve:
              res["districtWiseKerala"]["table"][14]["observation"],
            districtWiseData: res["districtWiseKerala"],
            keralaPredict: res["prediction"]["arr"][0][0],
            indiaPredict: res["prediction"]["arr"][0][1],
            globalPredict: res["prediction"]["arr"][0][2],
            keralaRecover: parseInt(res["kerala"]["Cured/Discharged/Migrated"]),
            keralaTdeath: parseInt(res["kerala"]["Death"]),
            indiaRecover: res["india"]["TotalRecovered"],
            indiaTdeath: res["india"]["TotalDeaths"],
            worldRecover: res["global"]["recovered"],
            worldTdeath: res["global"]["deaths"],
            keralaTCases: res["kerala"]["Total Confirmed cases"],
            worldTcases: res["global"]["cases"],
            indiaTcases: res["india"]["TotalCases"],
            keralaActive: res["kerala"]["active_cases"],
            keralaConfirmed: res["kerala"]["Total Confirmed cases"],
            indiaActive: res["india"]["ActiveCases"],
            worldActive:
              res["global"]["active_cases"]["currently_infected_patients"],
            stateWiseData: res["stateWiseData"],
            stateWiseDataOrg: res["stateWiseOrg"],
          });
        })
        .then(() => {
          setLoaded(true);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  useEffect(() => {
    setkeralamapData({
      KeralaMapProps: {
        district: "Total",
        active_cases: homeData.keralaActive,
        observation: homeData.keralaObserve,
        death: homeData.keralaTdeath,
        recovered: homeData.keralaRecover,
      },
    });
    setindiamapData({
      IndiaMapProps: {
        states: "Total",
        active_cases: homeData.indiaActive,
        death: homeData.indiaTdeath,
        confirmed: homeData.indiaTcases,
        recovered: homeData.indiaRecover,
      },
    });
  }, [homeData]);

  return (
    <>
      {isLoaded ? (
        <div>
          {width > 800 ? (
            <div style={{ marginTop: height * 0.01 }}>
              <div className="Card-status">
                <MaterialUI.Paper className="statusBoard" elevation={10}>
                  <h3>Kerala</h3>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        backgroundColor: "#ccdeff",
                        borderRadius: 15,
                        width: "100%",
                        margin: "0 5px",
                      }}
                    >
                      <p style={{ color: "#3792cf" }}>Active</p>
                      <b style={{ fontSize: 25, color: "#3792cf" }}>
                        {homeData.keralaActive}
                      </b>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#fce4e4",
                        borderRadius: 15,
                        width: "100%",
                        margin: "0 5px",
                      }}
                    >
                      <p style={{ color: "#cf3737" }}>Death</p>
                      <b style={{ fontSize: 25, color: "#cf3737" }}>
                        {homeData.keralaTdeath}
                      </b>
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                  <br />
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        backgroundColor: "#aae9c6",
                        borderRadius: 15,
                        width: "100%",
                        margin: "0 5px",
                      }}
                    >
                      <p style={{ color: "#239c5a" }}> Recovered </p>
                      <b style={{ fontSize: 25, color: "#239c5a" }}>
                        {homeData.keralaRecover}
                      </b>
                      <br />
                      <br />
                      <br />
                    </div>

                    <div
                      style={{
                        backgroundColor: "#98b6ec",
                        borderRadius: 15,
                        width: "100%",
                        margin: "0 5px",
                      }}
                    >
                      <p style={{ color: "#1552c2" }}>Confirmed</p>
                      <b style={{ fontSize: 25, color: "#1552c2" }}>
                        {homeData.keralaConfirmed}
                      </b>
                    </div>

                    <br />
                    <br />
                  </div>
                  <br />
                  <p style={{ fontSize: 12, fontFamily: "lato" }}>
                    Reference : dhs.kerala.gov.in
                  </p>
                </MaterialUI.Paper>
                <MaterialUI.Paper className="statusBoard" elevation={10}>
                  <h3>India</h3>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        backgroundColor: "#ccdeff",
                        borderRadius: 15,
                        width: "100%",
                        margin: "0 5px",
                      }}
                    >
                      <p style={{ color: "#3792cf" }}>Active</p>
                      <b style={{ fontSize: 25, color: "#3792cf" }}>
                        {homeData.indiaActive}
                      </b>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#fce4e4",
                        borderRadius: 15,
                        width: "100%",
                        margin: "0 5px",
                      }}
                    >
                      <p style={{ color: "#cf3737" }}>Death</p>
                      <b style={{ fontSize: 25, color: "#cf3737" }}>
                        {homeData.indiaTdeath}
                      </b>
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                  <br />
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        backgroundColor: "#aae9c6",
                        borderRadius: 15,
                        width: "100%",
                        margin: "0 5px",
                      }}
                    >
                      <p style={{ color: "#239c5a" }}> Recovered </p>
                      <b style={{ fontSize: 25, color: "#239c5a" }}>
                        {homeData.indiaRecover}
                      </b>
                      <br />
                      <br />
                      <br />
                    </div>

                    <div
                      style={{
                        backgroundColor: "#98b6ec",
                        borderRadius: 15,
                        width: "100%",
                        margin: "0 5px",
                      }}
                    >
                      <p style={{ color: "#1552c2" }}>Confirmed</p>
                      <b style={{ fontSize: 25, color: "#1552c2" }}>
                        {homeData.indiaTcases}
                      </b>
                    </div>
                    <br />
                    <br />
                  </div>
                  <br />
                  <p style={{ fontSize: 12, fontFamily: "lato" }}>
                    Reference: mohfw.gov.in
                  </p>
                </MaterialUI.Paper>
                <MaterialUI.Paper className="statusBoard" elevation={10}>
                  <h3>World</h3>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        backgroundColor: "#ccdeff",
                        borderRadius: 15,
                        width: "100%",
                        margin: "0 5px",
                      }}
                    >
                      <p style={{ color: "#3792cf" }}>Active</p>
                      <b style={{ fontSize: 20, color: "#3792cf" }}>
                        {homeData.worldActive}
                      </b>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#fce4e4",
                        borderRadius: 15,
                        width: "100%",
                        margin: "0 5px",
                      }}
                    >
                      <p style={{ color: "#cf3737" }}>Death</p>
                      <b style={{ fontSize: 20, color: "#cf3737" }}>
                        {homeData.worldTdeath}
                      </b>
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                  <br />
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        backgroundColor: "#aae9c6",
                        borderRadius: 15,
                        width: "100%",
                        margin: "0 5px",
                      }}
                    >
                      <p style={{ color: "#239c5a" }}> Recovered </p>
                      <b style={{ fontSize: 20, color: "#239c5a" }}>
                        {homeData.worldRecover}
                      </b>
                      <br />
                      <br />
                      <br />
                    </div>

                    <div
                      style={{
                        backgroundColor: "#98b6ec",
                        borderRadius: 15,
                        width: "100%",
                        margin: "0 5px",
                      }}
                    >
                      <p style={{ color: "#1552c2" }}>Confirmed</p>
                      <b style={{ fontSize: 20, color: "#1552c2" }}>
                        {homeData.worldTcases}
                      </b>
                    </div>
                    <br />
                    <br />
                  </div>
                  <br />
                  <p style={{ fontSize: 12, fontFamily: "lato" }}>
                    Reference: www.worldometers.info
                  </p>
                </MaterialUI.Paper>
              </div>
              <br />

              <MaterialUI.Paper elevation={10} className="mapView">
                <br />

                <center>
                  {" "}
                  <h2>KERALA SPREAD TRENDS</h2>
                </center>
                <p style={{ fontFamily: "lato" }}>
                  ** Click on the map to view the details **
                </p>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    <h2>{keralamapData.KeralaMapProps.district}</h2>

                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        margin: "10px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#ccdeff",
                          borderRadius: 15,
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          margin: "10px",
                        }}
                      >
                        <br />
                        <p style={{ color: "#337aff" }} className="props">
                          Observation
                        </p>
                        <br />
                        <b style={{ color: "#337aff", fontSize: 25 }}>
                          {keralamapData.KeralaMapProps.observation}
                        </b>
                        <br />
                      </div>

                      <div
                        style={{
                          backgroundColor: "#ffd7aa",
                          borderRadius: 15,
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          margin: "10px",
                        }}
                      >
                        <br />
                        <p style={{ color: "#d47d18" }} className="props">
                          Active
                        </p>
                        <br />
                        <b style={{ color: "#d47d18", fontSize: 25 }}>
                          {keralamapData.KeralaMapProps.active_cases}
                        </b>
                        <br />
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        margin: "10px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#fce4e4",
                          borderRadius: 15,
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          margin: "10px",
                        }}
                      >
                        <br />
                        <p style={{ color: "#f54f4f" }} className="props">
                          Death
                        </p>
                        <br />
                        <b style={{ color: "#f54f4f", fontSize: 25 }}>
                          {keralamapData.KeralaMapProps.death}
                        </b>
                        <br />
                      </div>
                      <div
                        style={{
                          backgroundColor: "#89ebb5",
                          borderRadius: 15,
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          margin: "10px",
                        }}
                      >
                        <br />
                        <p style={{ color: "#21b463" }} className="props">
                          Recovered
                        </p>
                        <br />
                        <b style={{ color: "#21b463", fontSize: 25 }}>
                          {keralamapData.KeralaMapProps.recovered}
                        </b>
                        <br />
                      </div>
                    </div>
                  </div>

                  <KeralaMap
                    setContent={(obj) => {
                      setkeralamapData({
                        KeralaMapProps: {
                          active_cases: obj.active_cases,
                          observation: obj.observation,
                          district: obj.district,
                          death: obj.death,
                          confirmed: obj.confirmed,
                          recovered: obj.recovered,
                        },
                      });
                    }}
                    districtWiseData={homeData.districtWiseData.table}
                  />
                </div>
              </MaterialUI.Paper>
              <br />
              <MaterialUI.Paper elevation={10} className="mapView">
                <br />

                <center>
                  {" "}
                  <h2>INDIA SPREAD TRENDS</h2>
                </center>
                <p style={{ fontFamily: "lato" }}>
                  ** Click on the map to view the details **
                </p>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    <h2>{indiamapData.IndiaMapProps.states}</h2>

                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        margin: "10px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#ccdeff",
                          borderRadius: 15,
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          margin: "10px",
                        }}
                      >
                        <br />
                        <p style={{ color: "#337aff" }} className="props">
                          Confirmed
                        </p>
                        <br />
                        <b style={{ color: "#337aff", fontSize: 25 }}>
                          {indiamapData.IndiaMapProps.confirmed}
                        </b>
                        <br />
                      </div>

                      <div
                        style={{
                          backgroundColor: "#ffd7aa",
                          borderRadius: 15,
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          margin: "10px",
                        }}
                      >
                        <br />
                        <p style={{ color: "#d47d18" }} className="props">
                          Active
                        </p>
                        <br />
                        <b style={{ color: "#d47d18", fontSize: 25 }}>
                          {indiamapData.IndiaMapProps.active_cases}
                        </b>
                        <br />
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        margin: "10px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#fce4e4",
                          borderRadius: 15,
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          margin: "10px",
                        }}
                      >
                        <br />
                        <p style={{ color: "#f54f4f" }} className="props">
                          Death
                        </p>
                        <br />
                        <b style={{ color: "#f54f4f", fontSize: 25 }}>
                          {indiamapData.IndiaMapProps.death}
                        </b>
                        <br />
                      </div>
                      <div
                        style={{
                          backgroundColor: "#89ebb5",
                          borderRadius: 15,
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          margin: "10px",
                        }}
                      >
                        <br />
                        <p style={{ color: "#21b463" }} className="props">
                          Recovered
                        </p>
                        <br />
                        <b style={{ color: "#21b463", fontSize: 25 }}>
                          {indiamapData.IndiaMapProps.recovered}
                        </b>
                        <br />
                      </div>
                    </div>
                  </div>

                  <IndiaMap
                    setContent={(obj) => {
                      setindiamapData({
                        IndiaMapProps: {
                          death: obj.death,
                          confirmed: obj.confirmed,
                          recovered: obj.recovered,
                          active_cases: obj.active_cases,
                          states: obj.state,
                        },
                      });
                    }}
                    stateWiseData={homeData.stateWiseData}
                  />
                </div>
              </MaterialUI.Paper>
              <br />
              <StateWiseOrg stateWiseOrg={homeData.stateWiseDataOrg} />
              <br />
              {/* transition video embed */}
              <center>
                <IndiaKerala />
              </center>
              <br />
              <center>
                <KeralaLineGraph />
              </center>
              <br />
              <center>
                <MaterialUI.Paper style={{ width: width * 0.8 }} elevation={10}>
                  <h3>Districtwise Active Cases Reports (Kerala)</h3>
                  <DistrictWiseBar
                    districtWiseData={homeData.districtWiseData.table}
                  />
                  <br />
                </MaterialUI.Paper>
              </center>
              <center>
                <h3 style={{ marginLeft: width * 0.4 }}>
                  StateWise Reports(India)
                </h3>
                <StateWise stateWiseData={homeData.stateWiseData} />
                <SlideShow />
              </center>
              <br />
              <br />
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
              {/*Mobile View is below*/}
              <Animated animationIn="fadeIn" animationInDuration={2500}>
                <MaterialUI.Paper
                  style={{
                    width: width,
                    margin: 0,
                    lineHeight: 0.5,
                  }}
                  className="statusBoard"
                  elevation={1}
                >
                  <h2>Kerala</h2>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      height: "80px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        flex: "1",
                        backgroundColor: "#ccdeff",
                        borderRadius: 5,
                        margin: "0 2px",
                      }}
                    >
                      <span style={{ color: "#3792cf", margin: "5px 0" }}>
                        Active
                      </span>
                      <span
                        style={{
                          fontSize: 20,
                          color: "#3792cf",
                          fontWeight: "bold",
                          margin: "5px 0",
                        }}
                      >
                        {homeData.keralaActive}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        flex: "1",
                        backgroundColor: "#fce4e4",
                        borderRadius: 5,
                        margin: "0 2px",
                      }}
                    >
                      <span style={{ color: "#cf3737", margin: "5px 0" }}>
                        Death
                      </span>
                      <span
                        style={{
                          fontSize: 20,
                          color: "#cf3737",
                          fontWeight: "bold",
                          margin: "5px 0",
                        }}
                      >
                        {homeData.keralaTdeath}
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        flex: "1",
                        backgroundColor: "#aae9c6",
                        borderRadius: 5,
                        margin: "0 2px",
                      }}
                    >
                      <span style={{ color: "#239c5a", margin: "5px 0" }}>
                        {" "}
                        Recovered{" "}
                      </span>
                      <span
                        style={{
                          fontSize: 20,
                          color: "#239c5a",
                          fontWeight: "bold",
                          margin: "5px 0",
                        }}
                      >
                        {homeData.keralaRecover}
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        flex: "1",
                        backgroundColor: "#ccdeff",
                        borderRadius: 5,
                        margin: "0 2px",
                      }}
                    >
                      <span style={{ color: "#1552c2", margin: "5px 0" }}>
                        Confirmed
                      </span>
                      <span
                        style={{
                          fontSize: 20,
                          color: "#1552c2",
                          fontWeight: "bold",
                          margin: "5px 0",
                        }}
                      >
                        {homeData.keralaTCases}
                      </span>
                    </div>
                  </div>

                  <p style={{ fontSize: 12, fontFamily: "lato" }}>
                    Reference : dhs.kerala.gov.in
                  </p>
                  <br />
                </MaterialUI.Paper>
                <MaterialUI.Paper
                  style={{
                    width: width,
                    margin: 0,
                    lineHeight: 0.5,
                  }}
                  className="statusBoard"
                  elevation={1}
                >
                  <h2>India</h2>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      height: "80px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        flex: "1",
                        borderRadius: 5,
                        margin: "0 2px",
                        backgroundColor: "#ccdeff",
                      }}
                    >
                      <span style={{ color: "#3792cf", margin: "5px 0" }}>
                        Active
                      </span>
                      <span
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          margin: "5px 0",
                          color: "#3792cf",
                        }}
                      >
                        {homeData.indiaActive}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        flex: "1",
                        borderRadius: 5,
                        margin: "0 2px",
                        backgroundColor: "#fce4e4",
                      }}
                    >
                      <span style={{ color: "#cf3737", margin: "5px 0" }}>
                        Death
                      </span>
                      <span
                        style={{
                          color: "#cf3737",
                          fontSize: 20,
                          fontWeight: "bold",
                          margin: "5px 0",
                        }}
                      >
                        {homeData.indiaTdeath}
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        flex: "1",
                        borderRadius: 5,
                        margin: "0 2px",
                        backgroundColor: "#aae9c6",
                      }}
                    >
                      <span style={{ color: "#239c5a", margin: "5px 0" }}>
                        {" "}
                        Recovered{" "}
                      </span>
                      <span
                        style={{
                          color: "#239c5a",
                          fontSize: 20,
                          fontWeight: "bold",
                          margin: "5px 0",
                        }}
                      >
                        {homeData.indiaRecover}
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        flex: "1",
                        borderRadius: 5,
                        margin: "0 2px",
                        backgroundColor: "#98b6ec",
                      }}
                    >
                      <span style={{ color: "#1552c2", margin: "5px 0" }}>
                        Confirmed
                      </span>
                      <span
                        style={{
                          color: "#1552c2",
                          fontSize: 20,
                          fontWeight: "bold",
                          margin: "5px 0",
                        }}
                      >
                        {homeData.indiaTcases}
                      </span>
                    </div>
                  </div>

                  <p style={{ fontSize: 12, fontFamily: "lato" }}>
                    Reference : www.mohfw.gov.in
                  </p>
                  <br />
                </MaterialUI.Paper>
                <MaterialUI.Paper
                  style={{
                    width: width,
                    margin: 0,
                    lineHeight: 0.5,
                  }}
                  className="statusBoard"
                  elevation={1}
                >
                  <h2>World</h2>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      height: "80px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#ccdeff",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        flex: "1",
                        borderRadius: 5,
                        margin: "0 2px",
                      }}
                    >
                      <span style={{ color: "#3792cf", margin: "5px 0" }}>
                        Active
                      </span>
                      <span
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          margin: "5px 0",
                          color: "#3792cf",
                        }}
                      >
                        {homeData.worldActive}
                      </span>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#fce4e4",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        flex: "1",
                        borderRadius: 5,
                        margin: "0 2px",
                      }}
                    >
                      <span style={{ color: "#cf3737", margin: "5px 0" }}>
                        Death
                      </span>
                      <span
                        style={{
                          color: "#cf3737",
                          fontSize: 20,
                          fontWeight: "bold",
                          margin: "5px 0",
                        }}
                      >
                        {homeData.worldTdeath}
                      </span>
                    </div>

                    <div
                      style={{
                        backgroundColor: "#aae9c6",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        flex: "1",
                        borderRadius: 5,
                        margin: "0 2px",
                      }}
                    >
                      <span style={{ color: "#239c5a", margin: "5px 0" }}>
                        {" "}
                        Recovered{" "}
                      </span>
                      <span
                        style={{
                          color: "#239c5a",
                          fontSize: 20,
                          fontWeight: "bold",
                          margin: "5px 0",
                        }}
                      >
                        {homeData.worldRecover}
                      </span>
                    </div>

                    <div
                      style={{
                        backgroundColor: "#98b6ec",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        flex: "1",
                        borderRadius: 5,
                        margin: "0 2px",
                      }}
                    >
                      <span style={{ color: "#1552c2", margin: "5px 0" }}>
                        Confirmed
                      </span>
                      <span
                        style={{
                          color: "#1552c2",
                          fontSize: 20,
                          fontWeight: "bold",
                          margin: "5px 0",
                        }}
                      >
                        {homeData.worldTcases}
                      </span>
                    </div>
                  </div>

                  <p style={{ fontSize: 12, fontFamily: "lato" }}>
                    Reference : www.worldometers.info
                  </p>
                  <br />
                </MaterialUI.Paper>
              </Animated>

              <MaterialUI.Paper
                elevation={10}
                style={{ width: width, margin: 0 }}
                className="mapView"
              >
                <br />

                <center>
                  {" "}
                  <h2>KERALA SPREAD TRENDS</h2>
                </center>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <h2>{keralamapData.KeralaMapProps.district}</h2>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      margin: "10px 0",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#ccdeff",
                        borderRadius: 12,
                        width: "20%",
                        display: "flex",
                        flexDirection: "column",
                        margin: "0 5px",
                      }}
                    >
                      <p
                        style={{
                          color: "#337aff",
                          fontSize: 12,
                          fontWeight: "bold",
                        }}
                      >
                        Observation
                      </p>

                      <b style={{ color: "#337aff", fontSize: 20 }}>
                        {keralamapData.KeralaMapProps.observation}
                      </b>
                    </div>

                    <div
                      style={{
                        backgroundColor: "#ffd7aa",
                        borderRadius: 12,
                        width: "20%",
                        display: "flex",
                        flexDirection: "column",
                        margin: "0 5px",
                      }}
                    >
                      <p
                        style={{
                          color: "#d47d18",
                          fontWeight: "bold",
                          fontSize: 12,
                        }}
                      >
                        Active
                      </p>

                      <b style={{ color: "#d47d18", fontSize: 25 }}>
                        {keralamapData.KeralaMapProps.active_cases}
                      </b>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#fce4e4",
                        borderRadius: 12,
                        width: "20%",
                        display: "flex",
                        flexDirection: "column",
                        margin: "0 5px",
                      }}
                    >
                      <p
                        style={{
                          color: "#f54f4f",
                          fontSize: 12,
                          fontWeight: "bold",
                        }}
                      >
                        Death
                      </p>

                      <b style={{ color: "#f54f4f", fontSize: 25 }}>
                        {keralamapData.KeralaMapProps.death}
                      </b>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#89ebb5",
                        borderRadius: 12,
                        width: "20%",
                        display: "flex",
                        flexDirection: "column",
                        margin: "0 5px",
                      }}
                    >
                      <p
                        style={{
                          color: "#21b463",
                          fontSize: 12,
                          fontWeight: "bold",
                        }}
                      >
                        Recovered
                      </p>

                      <b style={{ color: "#21b463", fontSize: 25 }}>
                        {keralamapData.KeralaMapProps.recovered}
                      </b>
                    </div>
                  </div>
                </div>

                <center>
                  <p style={{ fontFamily: "lato" }}>
                    ** Click on the map to view the details **
                  </p>
                  <KeralaMap
                    setContent={(obj) => {
                      setkeralamapData({
                        KeralaMapProps: {
                          active_cases: obj.active_cases,
                          observation: obj.observation,
                          district: obj.district,
                          death: obj.death,
                          recovered: obj.recovered,
                        },
                      });
                    }}
                    districtWiseData={homeData.districtWiseData.table}
                  />
                </center>
              </MaterialUI.Paper>

              <MaterialUI.Paper
                elevation={10}
                style={{ width: width, margin: 0 }}
                className="mapView"
              >
                <br />
                <center>
                  {" "}
                  <h2>INDIA SPREAD TRENDS</h2>
                </center>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <h2>{indiamapData.IndiaMapProps.states}</h2>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      margin: "10px 0",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#ccdeff",
                        borderRadius: 12,
                        width: "20%",
                        display: "flex",
                        flexDirection: "column",
                        margin: "0 5px",
                      }}
                    >
                      <p
                        style={{
                          color: "#337aff",
                          fontSize: 12,
                          fontWeight: "bold",
                        }}
                      >
                        Confirmed
                      </p>

                      <b style={{ color: "#337aff", fontSize: 25 }}>
                        {indiamapData.IndiaMapProps.confirmed}
                      </b>
                    </div>

                    <div
                      style={{
                        backgroundColor: "#ffd7aa",
                        borderRadius: 12,
                        width: "20%",
                        display: "flex",
                        flexDirection: "column",
                        margin: "0 5px",
                      }}
                    >
                      <p
                        style={{
                          color: "#d47d18",
                          fontWeight: "bold",
                          fontSize: 12,
                        }}
                      >
                        Active
                      </p>

                      <b style={{ color: "#d47d18", fontSize: 25 }}>
                        {indiamapData.IndiaMapProps.active_cases}
                      </b>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#fce4e4",
                        borderRadius: 12,
                        width: "20%",
                        display: "flex",
                        flexDirection: "column",
                        margin: "0 5px",
                      }}
                    >
                      <p
                        style={{
                          color: "#f54f4f",
                          fontSize: 12,
                          fontWeight: "bold",
                        }}
                      >
                        Death
                      </p>

                      <b style={{ color: "#f54f4f", fontSize: 25 }}>
                        {indiamapData.IndiaMapProps.death}
                      </b>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#89ebb5",
                        borderRadius: 12,
                        width: "20%",
                        display: "flex",
                        flexDirection: "column",
                        margin: "0 5px",
                      }}
                    >
                      <p
                        style={{
                          color: "#21b463",
                          fontSize: 12,
                          fontWeight: "bold",
                        }}
                      >
                        Recovered
                      </p>

                      <b style={{ color: "#21b463", fontSize: 25 }}>
                        {indiamapData.IndiaMapProps.recovered}
                      </b>
                    </div>
                  </div>
                </div>
                <br />
                <center>
                  <p style={{ fontFamily: "lato" }}>
                    ** Click on the map to view the details **
                  </p>
                  <IndiaMap
                    setContent={(obj) => {
                      setindiamapData({
                        IndiaMapProps: {
                          death: obj.death,
                          confirmed: obj.confirmed,
                          recovered: obj.recovered,
                          active_cases: obj.active_cases,
                          states: obj.state,
                        },
                      });
                    }}
                    stateWiseData={homeData.stateWiseData}
                  />
                </center>
              </MaterialUI.Paper>
              <br />
              <center>
                <StateWiseOrg stateWiseOrg={homeData.stateWiseDataOrg} />
              </center>
              <br />
              {/* Transition video embed */}
              <center>
                <IndiaKerala />
              </center>
              <br />
              <center>
                <KeralaLineGraph />
              </center>
              <br />
              <center>
                <MaterialUI.Paper elevation={10}>
                  <h3>Districtwise Active Cases Reports (Kerala)</h3>
                  <DistrictWiseBar
                    districtWiseData={homeData.districtWiseData.table}
                  />
                  <br />
                </MaterialUI.Paper>
              </center>
              <Animated animationIn="fadeInUp" animationInDuration={4000}>
                <h3>Statewise Reports (India)</h3>
                <StateWise stateWiseData={homeData.stateWiseData} />
              </Animated>
              <SlideShow />
              <br />
              <br />
              <br />
            </div>
          )}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default LocalHome;
