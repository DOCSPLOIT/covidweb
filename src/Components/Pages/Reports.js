import React, { Component } from "react";
import { url } from "../Configure";
import * as MaterialUI from "@material-ui/core";
import Loader from "../Extras/Loader";
export default class Reports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isConnected: false,
    };
  }
  componentDidMount() {
    fetch(`${url}/foreignCountries`)
      .then((res) => res.json())
      .then((res) => {
        res.map((t) => {
          this.setState({
            data: res,
            // Country:t['Country,Other'],
            // Confirmed:t['TotalCases'],
            // Active:t['ActiveCases'],
            // Death:t['TotalDeaths'],
            // Recovered:t['TotalRecovered']
            isConnected: true,
          });
        });
      });
  }
  render() {
    const View = this.state.data.map((t) => {
      return (
        <MaterialUI.Paper
          style={{
            lineHeight: 0.5,
            width:
              window.innerWidth > 800
                ? window.innerWidth * 0.6
                : window.innerWidth,
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
        {this.state.isConnected === true ? (
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
      </>
    );
  }
}
