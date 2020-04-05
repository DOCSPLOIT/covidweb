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
import farispic from '../Media/faris.jpg'


export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <>

        <center>
          <div style={{ marginTop: window.innerHeight * .15 }}>
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
                textAlign: "center",
                justifyContent: "center"
              }}
            >
              Meet Our Team
        </b>
            <br />
            <br />
            <div
              style={{
                display: "flex",

                fontFamily: "arch",
                justifyContent: 'center'
                // lineHeight: 0
              }}
            >
              <div className="image-container">
                <img src={ropic} />
                <b>Robert Devasia</b>
                <p className="desig">UI Design</p>
              </div>
              <div className="image-container">
                <img src={munupic} />
                <b>Abdul Muhaimin</b>
                <p className="desig">Back-End</p>
              </div>
              <div className="image-container">
                <img src={shabeerpic} />
                <b>Shabeerali</b>
                <p className="desig">AI</p>
              </div>

            </div>
            <div
              style={{
                display: "flex",
                justifyContent: 'center',

                fontFamily: "arch",
                // lineHeight: 0
              }}
            >
              <div className="image-container">
                <img src={farispic} />
                <b>Muhammed Faris</b>
                <p className="desig">UI Design</p>
              </div>
              <div className="image-container">
                <img src={muneerpic} />
                <b>Muneer Hussain</b>
                <p className={'desig'}>Coordinator</p>
              </div>
              <div className="image-container">
                <img src={ashifpic} />
                <b>Ashif</b>
                <p className="desig">Data Processing</p>
              </div>

            </div>
            <div
              style={{
                display: "flex",

                justifyContent: 'center',
                fontFamily: "arch",
                // lineHeight: 0
              }}
            >


              <div className="image-container">
                <img src={jasirpic} />
                <b>Jasir</b>
                <p className="desig">Data Processing</p>
              </div>
              <div className="image-container">
                <img src={amanpic} />
                <b>Abdulla Aman</b>
                <p className="desig">Data Processing</p>
              </div>
              <div className="image-container">
                <img src={ansithpic} />
                <b>Ansith MOHD</b>
                <p className="desig">Data Processing</p>
              </div>

            </div>
          </div>

              <h3>Contact Us</h3>
              <p><i className="fa fa-envelope" ></i> Mail us : iedcsscollege@gmail.com</p>
              <p><i className="fa fa-phone"/>  Phone : +91 97447 94110</p>


          <div >
            <a className="fa fa-facebook" style={{ margin: 20, color: ' #3b5998', fontSize: 30, textDecoration: 'none' }} href="https://m.facebook.com/iedcsscollege" />
            <a className="fa fa-instagram" style={{ margin: 20, fontSize: 30, textDecoration: 'none' }} href="https://www.instagram.com/iedcsscollege/" />
            <a className="fa fa-youtube" style={{ margin: 20, color: ' #000', fontSize: 30, textDecoration: 'none' }} href="https://www.youtube.com/channel/UChYMaX62qlvPSNgenUbiVbw" />

          </div>
        </center>
              <br/>


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
