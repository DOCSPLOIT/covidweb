import React from "react";
import logosm from "../Media/logosm.png";
import iedclog from "../Media/iedcw.png";
import "../Styles/about.css";
import jasirpic from "../Media/jasir.jpeg";
import ashifpic from "../Media/ashif.jpg";
import ansithpic from "../Media/ansith.jpg";
import amanpic from "../Media/aman.jpg";
import muneerpic from "../Media/muneer.jpg";
import munupic from "../Media/munu.jpg";
import ropic from "../Media/robert.jpg";
import shabeerpic from "../Media/shabeer.jpg";
import farispic from "../Media/faris.jpg";
import { useViewport } from "../Extras/ViewportProvider";

const About = () => {
  const { width, height } = useViewport();

  return (
    <>
      <center>
        <div style={{ marginTop: height * 0.15 }}>
          <b
            style={{
              fontFamily: "arch",
              fontSize: 25,
            }}
          >
            Who we are ?
          </b>
          <p
            style={{
              fontFamily: "arch",
              width: width > 800 ? "50%" : width,
            }}
          >
            We are a group of dedicated volunteers of IEDC of Kerala Startup
            Mission at Sullumussalam Science College, Areekode. We try to
            provide latest updates about Covid19 from MoHFW, WHO, GoK Direct.{" "}
          </p>
          <b
            style={{
              fontFamily: "arch",
              fontSize: 25,
              textAlign: "center",
              justifyContent: "center",
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
              justifyContent: "center",
              // lineHeight: 0
            }}
          >
            <div className="image-container">
              <img src={ropic} alt="" />
              <b>Robert Devasia</b>
              <p className="desig">UI Design</p>
            </div>
            <div className="image-container">
              <img src={munupic} alt="" />
              <b>Abdul Muhaimin</b>
              <p className="desig">Back-End</p>
            </div>
            <div className="image-container">
              <img src={shabeerpic} alt="" />
              <b>Shabeerali</b>
              <p className="desig">AI</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",

              fontFamily: "arch",
              // lineHeight: 0
            }}
          >
            <div className="image-container">
              <img src={farispic} alt="" />
              <b>Muhammed Faris</b>
              <p className="desig">UI Design</p>
            </div>
            <div className="image-container">
              <img src={muneerpic} alt="" />
              <b>Muneer Hussain</b>
              <p className={"desig"}>Coordinator</p>
            </div>
            <div className="image-container">
              <img src={ashifpic} alt="" />
              <b>Ashif</b>
              <p className="desig">Data Processing</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",

              justifyContent: "center",
              fontFamily: "arch",
              // lineHeight: 0
            }}
          >
            <div className="image-container">
              <img src={jasirpic} alt="" />
              <b>Jasir</b>
              <p className="desig">Data Processing</p>
            </div>
            <div className="image-container">
              <img src={amanpic} alt="" />
              <b>Abdulla Aman</b>
              <p className="desig">Data Processing</p>
            </div>
            <div className="image-container">
              <img src={ansithpic} alt="" />
              <b>Ansith MOHD</b>
              <p className="desig">Data Processing</p>
            </div>
          </div>
        </div>

        <h3>Contact Us</h3>
        <p>
          <i className="fa fa-envelope"></i> Mail us : iedcsscollege@gmail.com
        </p>
        <p>
          <i className="fa fa-phone" /> Phone : +91 97447 94110
        </p>

        <div>
          <a
            className="fa fa-facebook"
            style={{
              margin: 20,
              color: " #3b5998",
              fontSize: 30,
              textDecoration: "none",
            }}
            href="https://m.facebook.com/iedcsscollege"
          >
            {null}
          </a>
          <a
            className="fa fa-instagram"
            style={{ margin: 20, fontSize: 30, textDecoration: "none" }}
            href="https://www.instagram.com/iedcsscollege/"
          >
            {null}
          </a>
          <a
            className="fa fa-youtube"
            style={{
              margin: 20,
              color: " #000",
              fontSize: 30,
              textDecoration: "none",
            }}
            href="https://www.youtube.com/channel/UChYMaX62qlvPSNgenUbiVbw"
          >
            {null}
          </a>
        </div>
      </center>
      <br />

      {width > 800 ? (
        <div className="footer_wrapper">
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
        <>
          <br />
        </>
      )}
    </>
  );
};

export default About;
