import React, { Component } from "react";
import logosm from "../Media/logosm.png";
import iedclog from "../Media/iedcw.png";
export default class About extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  render() {
    return (
      <>
        <h1
          style={{
            fontFamily: "arch",
            marginTop: window.innerHeight * 0.15,
            textAlign: "center"
          }}
        >
          About Us
        </h1>
        <b
          style={{
            marginLeft: window.innerWidth * 0.08,
            fontFamily: "arch",
            fontSize: 25
          }}
        >
          Who we are ?
        </b>
        <p
          style={{
            marginLeft: window.innerWidth > 800 ? window.innerWidth * 0.1 : 0,
            fontFamily: "arch",
            width: window.innerWidth > 800 ? "50%" : window.innerWidth
          }}
        >
          We are a group of dedicated volunteers of IEDC of Kerala Startup
          Mission at Sullumussalam Science College, Areekode. We try to provide
          latest updates about Covid19 from MoHFW, WHO, GoK Direct and
          covid19inda.org.{" "}
        </p>
        <b
          style={{
            marginLeft: window.innerWidth * 0.08,
            fontFamily: "arch",
            fontSize: 25
          }}
        >
          Meet Our Team
        </b>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft:
              window.innerWidth < 800
                ? window.innerWidth * 0.05
                : window.innerWidth * 0.1,
            fontFamily: "arch",
            lineHeight: 0
          }}
        >
          <p>Robert Devasia </p>
          <p>Mohammed Faris UM </p>
          <p>Abdul Muhaimin</p>
          <p>Shabeerali </p>
          <p>Jasir</p>
          <p>Abdulla Aman</p>
          <p>Ashif</p>
          <p>Ansith Mohammed</p>
          <p>Muneer Hussain</p>
        </div>
        <br />
        <br />
        <br />
        <br />
        {window.innerWidth > 800 ? (
          <footer>
            <div className="footer">
              <a href="http://sscollege.ac.in">
                <img
                  src={logosm}
                  alt='logsm'
                  style={{
                    width: "75px",
                    height: "75px",
                    position: "absolute",
                    marginLeft: "20px",
                    marginTop: "20px"
                  }}
                />
              </a>
              <center>
                {" "}
                <a
                  href="http://sscollege.ac.in"
                  style={{ textDecoration: "none" }}
                >
                  <p style={{ color: "white", marginTop: "40px" }}>
                    <b style={{ fontSize: 20 }}>
                      Sullamussalam Science College |
                    </b>
                    <l style={{ fontSize: 14 }}>Powered By IEDC </l>
                  </p>
                </a>
              </center>
              <a href="http://iedc.sscollege.ac.in/">
                {" "}
                <img
                  src={iedclog}
                  alt='logoc'
                  style={{
                    width: "100px",
                    height: "100px",
                    position: "absolute",
                    marginLeft: window.innerWidth * 0.9,
                    marginTop: -75
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
}
