import React, { Component } from "react";
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

export default class LocalHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      stateWiseRecover: 0,
      isLoaded: false,
      keralaActive: 0,
      keralaConfirmed: 0,
      indiaActive: 0,
      worldActive: 0,
      keralaObserve: 0,
      KeralaMapProps: {
        district: "",
        active_cases: 0,
        observation: 0,
        death: 0,
        recovered: 0,
      },
      IndiaMapProps: {
        states: "",
        active_cases: 0,
        death: 0,
        confirmed: 0,
        recovered: 0,
      },
      stateWiseDataOrg:[]
    };
  }
  
  componentDidMount() {
    fetch(`${url}/homePage`)
      .then((r) => r.json())
      .then((res) => {
        this.setState({
          keralaObserve: res["districtWiseKerala"]["table"][14]["observation"],
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
          stateWiseDataOrg:res['stateWiseOrg']
        });
      })
      .then(() => {
        this.setState({
          KeralaMapProps: {
            district: "Total",
            active_cases: this.state.keralaActive,
            observation: this.state.keralaObserve,
            death: this.state.keralaTdeath,
            recovered: this.state.keralaRecover,
          },
          IndiaMapProps: {
            states: "Total",
            active_cases: this.state.indiaActive,
            death: this.state.indiaTdeath,
            confirmed: this.state.indiaTcases,
            recovered: this.state.indiaRecover,
          },
          isLoaded: true,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
 
    
    return (
      <>
        {this.state.isLoaded ? (
          <div>
            {window.innerWidth > 800 ? (
              <div style={{ marginTop: window.innerHeight * 0.01 }}>
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
                          {this.state.keralaActive}
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
                          {this.state.keralaTdeath}
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
                          {this.state.keralaRecover}
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
                          {this.state.keralaConfirmed}
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
                          {this.state.indiaActive}
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
                          {this.state.indiaTdeath}
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
                          {this.state.indiaRecover}
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
                          {this.state.indiaTcases}
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
                          {this.state.worldActive}
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
                          {this.state.worldTdeath}
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
                          {this.state.worldRecover}
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
                          {this.state.worldTcases}
                        </b>
                      </div>
                      <br />
                      <br />
                    </div>
                    <br />
                    <p style={{ fontSize: 12, fontFamily: "lato" }}>
                      Reference: www.worldometer.info
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
                      <h2>{this.state.KeralaMapProps.district}</h2>

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
                            {this.state.KeralaMapProps.observation}
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
                            {this.state.KeralaMapProps.active_cases}
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
                            {this.state.KeralaMapProps.death}
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
                            {this.state.KeralaMapProps.recovered}
                          </b>
                          <br />
                        </div>
                      </div>
                    </div>

                    <KeralaMap
                      setContent={(obj) => {
                        this.setState({
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
                      districtWiseData={this.state.districtWiseData.table}
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
                      <h2>{this.state.IndiaMapProps.states}</h2>

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
                            {this.state.IndiaMapProps.confirmed}
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
                            {this.state.IndiaMapProps.active_cases}
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
                            {this.state.IndiaMapProps.death}
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
                            {this.state.IndiaMapProps.recovered}
                          </b>
                          <br />
                        </div>
                      </div>
                    </div>

                    <IndiaMap
                      setContent={(obj) => {
                        this.setState({
                          IndiaMapProps: {
                            death: obj.death,
                            confirmed: obj.confirmed,
                            recovered: obj.recovered,
                            active_cases: obj.active_cases,
                            states: obj.state,
                          },
                        });
                      }}
                      stateWiseData={this.state.stateWiseData}
                    />
                  </div>
                </MaterialUI.Paper>
                <br />
                <center>
                  <IndiaKerala />
                </center>
                <br />
                <h3 style={{ marginLeft: window.innerWidth * 0.4 }}>
                  StateWise Reports(India)
                </h3>

                <center>
                  <StateWise stateWiseData={this.state.stateWiseData} />
                </center>
                <StateWiseOrg stateWiseOrg={this.state.stateWiseDataOrg} />

                {/* <MaterialUI.Paper  elevation={10} style={{
        backgroundColor:"#4f5a90",
        width:200,
       position:"absolute",
       zIndex:99,marginLeft:window.innerWidth*.02,marginTop:window.innerHeight*.2}}>
           <br/>
            <h3 style={{color:"white"}}>Our Today's Prediction</h3>
    <p style={{color:"white"}}>On {'\n'} Confirming Cases</p>
    <p style={{color:"white"}}>{day}</p>
    <p style={{color:"white"}}>Kerala </p>
    <b style={{color:"white",fontSize:25}}>{this.state.keralaPredict}</b>
        <p style={{color:"white"}}>India </p>
    <b style={{color:"white",fontSize:25}}>{this.state.indiaPredict}</b>
        <p style={{color:"white"}}>World</p>
        <b style={{color:"white",fontSize:25}}>{this.state.globalPredict}</b>
        <br/><br/>
        <a style={{color:"white",fontSize:15}} href="/predict">More</a>
          <br/>  <br/><br/>
       
    </MaterialUI.Paper> */}

                {/* </div> */}
                <br />
                <center>
                  <MaterialUI.Paper
                    style={{ width: window.innerWidth * 0.8 }}
                    elevation={10}
                  >
                    <br />
                    <h3>Districtwise Active Cases Reports (Kerala)</h3>
                    <DistrictWiseBar
                      districtWiseData={this.state.districtWiseData.table}
                    />
                    <br />
                  </MaterialUI.Paper>
                  <SlideShow />
                </center>
                <br />
                <br />
                <br />
                <footer>
                  <div className="footer">
                    <br />
                    <a href="http://sscollege.ac.in">
                      {" "}
                      <img
                        alt="lgosm"
                        src={logosm}
                        style={{
                          width: "75px",
                          height: "75px",
                          position: "absolute",
                          marginLeft: "20px",
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
                          <i style={{ fontSize: 14 }}>Powered By IEDC </i>
                        </p>
                      </a>
                    </center>
                    <a href="http://iedc.sscollege.ac.in">
                      {" "}
                      <img
                        alt="sm"
                        src={iedclog}
                        style={{
                          width: "100px",
                          height: "100px",
                          position: "absolute",
                          marginLeft: window.innerWidth * 0.9,
                          marginTop: -75,
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
                    style={{ width: window.innerWidth, margin: 0,lineHeight:.5 }}
                    className="statusBoard"
                    elevation={1}
                  >
                    <h2>Kerala</h2>
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
                 {this.state.keralaActive}
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
                 {this.state.keralaTdeath}
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
                  {this.state.keralaRecover}
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
                  {this.state.keralaTCases}
                </b>
              </div>
              <br />
              <br />
            </div>
                    </center>
                    <p style={{ fontSize: 12, fontFamily: "lato" }}>
                      Reference : dhs.kerala.gov.in
                    </p>
                    <br/>
                  </MaterialUI.Paper>
                  <MaterialUI.Paper
                    style={{ width: window.innerWidth, margin: 0 ,lineHeight:.5}}
                    className="statusBoard"
                    elevation={1}
                  >
                    <h2>India</h2>
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
                 {this.state.indiaActive}
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
                  {this.state.indiaTdeath}
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
                 {this.state.indiaRecover}
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
                  {this.state.indiaTcases}
                </b>
              </div>
              <br />
              <br />
            </div>

                    <p style={{ fontSize: 12, fontFamily: "lato" }}>
                      Reference : www.mohfw.gov.in
                    </p>
                    <br/>
                  </MaterialUI.Paper>
                  <MaterialUI.Paper
                    style={{ width: window.innerWidth, margin: 0,lineHeight:.5 }}
                    className="statusBoard"
                    elevation={1}
                  >
                    <h2>World</h2>
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
                 {this.state.worldActive}
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
                  {this.state.worldTdeath}
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
                  {this.state.worldRecover}
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
                  {this.state.worldTcases}
                </b>
              </div>
              <br />
              <br />
            </div>

                    <p style={{ fontSize: 12, fontFamily: "lato" }}>
                      Reference : www.worldometer.info
                    </p>
                    <br/>
                  </MaterialUI.Paper>
                </Animated>

                <MaterialUI.Paper
                  elevation={10}
                  style={{ width: window.innerWidth, margin: 0 }}
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
                    <h2>{this.state.KeralaMapProps.district}</h2>
                    <div
                      style={{ width: "100%", display: "flex", margin: "10px" }}
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
                          {this.state.KeralaMapProps.observation}
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
                          {this.state.KeralaMapProps.active_cases}
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
                          {this.state.KeralaMapProps.death}
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
                          {this.state.KeralaMapProps.recovered}
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
                        this.setState({
                          KeralaMapProps: {
                            active_cases: obj.active_cases,
                            observation: obj.observation,
                            district: obj.district,
                            death: obj.death,
                            recovered: obj.recovered,
                          },
                        });
                      }}
                      districtWiseData={this.state.districtWiseData.table}
                    />
                  </center>
                </MaterialUI.Paper>

                <MaterialUI.Paper
                  elevation={10}
                  style={{ width: window.innerWidth, margin: 0 }}
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
                    <h2>{this.state.IndiaMapProps.states}</h2>
                    <div
                      style={{ width: "100%", display: "flex", margin: "10px" }}
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
                          {this.state.IndiaMapProps.confirmed}
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
                          {this.state.IndiaMapProps.active_cases}
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
                          {this.state.IndiaMapProps.death}
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
                          {this.state.IndiaMapProps.recovered}
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
                        this.setState({
                          IndiaMapProps: {
                            death: obj.death,
                            confirmed: obj.confirmed,
                            recovered: obj.recovered,
                            active_cases: obj.active_cases,
                            states: obj.state,
                          },
                        });
                      }}
                      stateWiseData={this.state.stateWiseData}
                    />
                  </center>
                </MaterialUI.Paper>
                <br />
                <center>
                  <IndiaKerala />
                </center>
                <br />
                <Animated animationIn="fadeInUp" animationInDuration={4000}>
                  <h3>Statewise Reports (India)</h3>
                  <StateWise stateWiseData={this.state.stateWiseData} />
                </Animated>
                <center>
                <StateWiseOrg stateWiseOrg={this.state.stateWiseDataOrg}/>
                </center>
                <MaterialUI.Paper elevation={10}>
                  <h3>Districtwise Active Cases Reports (Kerala)</h3>
                  <DistrictWiseBar
                    districtWiseData={this.state.districtWiseData.table}
                  />
                  <br />
                </MaterialUI.Paper>
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
  }
}
