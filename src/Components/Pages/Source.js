import React from "react";
import * as MaterialUI from "@material-ui/core";
import logosm from "../Media/logosm.png";
import iedclog from "../Media/iedcw.png";
import { useViewport } from "../Extras/ViewportProvider";

const Sources = () => {
  const { width, height } = useViewport();
  return (
    <>
      <div style={{ marginTop: height * 0.15 }}>
        <center>
          <h1 style={{ fontFamily: "Poppins,sans-serif" }}>Helpful Sources</h1>
          <MaterialUI.Paper
            elevation={3}
            style={{
              fontFamily: "Poppins,sans-serif",
              width: width > 800 ? width * 0.6 : width,
              borderRadius: 5,
            }}
          >
            <h4> Ministry of Health and Family Welfare</h4>
            <a
              style={{
                fontFamily: "Poppins,sans-serif",
                textDecoration: "none",
              }}
              href="https://www.mohfw.gov.in/"
            >
              https://www.mohfw.gov.in/
            </a>
            <h4 style={{ fontFamily: "Poppins,sans-serif" }}>
              Real Time World Statistics
            </h4>
            <a
              style={{
                fontFamily: "Poppins,sans-serif",
                textDecoration: "none",
              }}
              href="https://www.worldometers.info"
            >
              https://www.worldometers.info
            </a>
            <h4 style={{ fontFamily: "Poppins,sans-serif" }}>
              {" "}
              World Health Organization
            </h4>
            <a
              style={{
                fontFamily: "Poppins,sans-serif",
                textDecoration: "none",
              }}
              href="https://www.who.int/"
            >
              https://www.who.int/
            </a>
            <br />
            whatsapp:{" "}
            <a
              style={{
                fontFamily: "Poppins,sans-serif",
                textDecoration: "none",
              }}
              href="https://bit.ly/who-covid-19-whatsapp"
            >
              https://bit.ly/who-covid-19-whatsapp
            </a>
            <br />
            <br />
            <h4>GoK Direct App (Goverment of Kerala)</h4>
            <a
              style={{
                fontFamily: "Poppins,sans-serif",
                textDecoration: "none",
              }}
              href="https://play.google.com/store/apps/details?id=com.qkopy.prdkerala"
            >
              https://play.google.com/store/apps/details?id=com.qkopy.prdkerala
            </a>
            <h4>Disha Helpline : 1056</h4>
            <h4>Directorate of Health Services</h4>
            <a
              style={{
                fontFamily: "Poppins,sans-serif",
                textDecoration: "none",
              }}
              href="http://dhs.kerala.gov.in"
            >
              http://dhs.kerala.gov.in
            </a>
            <br />
            <br />
            <b
              style={{
                fontFamily: "Poppins,sans-serif",
                fontSize: 14,
                color: "black",
              }}
            >
              GIS Map Courtesy: Shimod KP, Geographical Research Forum , Kannur
              University
            </b>
            <br />
            <br />
            <b
              style={{
                fontFamily: "Poppins,sans-serif",
                fontSize: 14,
                color: "black",
              }}
            >
              CovAid Chatbot : In collaboration with TCS
            </b>
            <br />
            <br /><br />
            
          </MaterialUI.Paper>
        </center>
        <br />
        <br />
        <br />
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
      </div>
    </>
  );
};

export default Sources;
