import React, { Component } from "react";
import logosm from "../Media/logosm.png";
import iedclog from "../Media/iedcw.png";
import '../Styles/about.css'
import jasirpic from '../Media/jasir.jpeg'
import ashifpic from '../Media/ashif.jpg'
import ansithpic from '../Media/ansith.jpg'
import amanpic from '../Media/aman.jpg'
import muneerpic from '../Media/muneer.jpg'
import munupic from '../Media/munu.jpg'
import ropic from '../Media/robert.jpg'
import shabeerpic from '../Media/shabeer.jpg'
export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {

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
        <center>
        <b
          style={{
            
            fontFamily: "arch",
            fontSize: 25
          }}
        >
          Who we are ?
        </b>
        <p
          style={{
            
            fontFamily: "arch",
            width: window.innerWidth > 800 ? "50%" : window.innerWidth
          }}
        >
          We are a group of dedicated volunteers of IEDC of Kerala Startup
          Mission at Sullumussalam Science College, Areekode. We try to provide
          latest updates about Covid19 from MoHFW, WHO, GoK Direct.{" "}
        </p>
        <b
          style={{
        
            fontFamily: "arch",
            fontSize: 25,
            textAlign:"center",
            justifyContent:"center"
          }}
        >
          Meet Our Team
        </b>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            flexDirection:window.innerWidth>800?'row':'column',
            fontFamily: "arch",
            justifyContent:'center'
            // lineHeight: 0
          }}
        >
          <div className="image-container">
          <img src={ropic}/>
          <p>Robert Devasia</p></div>
          <div className="image-container">
          <img src={munupic}/>
          <p>Abdul Muhaimin</p>
          </div>
          <div className="image-container">
          <img src={shabeerpic}/>
          <p>Shabeerali</p>
          </div>

        </div>
        <div
          style={{
            display: "flex",
            justifyContent:'center',
            flexDirection:window.innerWidth>800?'row':'column',
            fontFamily: "arch",
            // lineHeight: 0
          }}
        >
          <img src={ashifpic}/>
          <div className="image-container">
          <img src={muneerpic}/>
          <p>Muneer Hussain</p>
          </div>
          <div className="image-container">
          <img src={ashifpic}/>
          <p>Ashif</p>
          </div>
         
        </div>
        <div
          style={{
            display: "flex",
            flexDirection:window.innerWidth>800?'row':'column',
            justifyContent:'center',
            fontFamily: "arch",
            // lineHeight: 0
          }}
        >
          
          
          <div className="image-container">
          <img src={jasirpic}/>
          <p>Jasir</p></div>
          <div className="image-container">
          <img src={amanpic}/>
          <p>Abdulla Aman</p>
          </div>
          <div className="image-container">
          <img src={ansithpic}/>
        <p>Ansith Mohammed</p>
        </div>

          <p>Muneer Hussain</p> */}
        </div>
        </center>
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
