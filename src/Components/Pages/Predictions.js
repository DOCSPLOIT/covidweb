import React, { useState, useEffect } from "react";
import Predict from "../Graphs/Predict";
import PredictText from "../Graphs/PredictText";
import "../Styles/home.css";
import logosm from "../Media/logosm.png";
import iedclog from "../Media/iedcw.png";
import { url } from "../Configure";
import Loader from "../Extras/Loader";
import { useViewport } from "../Extras/ViewportProvider";

const Predictions = () => {
  const [isLoading, setLoading] = useState(false);
  const { width, height } = useViewport();

  useEffect(() => {
    const fetchData = () => {
      fetch(`${url}/predictionPage`)
        .then((r) => r.json())
        .then((res) => {
          setLoading(true);
        });
    };
    fetchData();
  }, []);

  const para = (
    <p
      style={{
        fontFamily: "Lato",
        color: "gray",
        width: width > 800 ? "60%" : "",
      }}
    >
      The system is equipped with latest tools and techniques in Artificial
      intelligence to predict future cases of positive confirmation of covid-19
      by automatically learning the case histories, pattern of various cases and
      trends. The algorithm shall predict daily probabilities by updating with
      Worldometer, WHO, Ministry of Health and Family Welfare.
      <b>
        This system is equipped with polynomial regression(from sklearn) and
        machine learning regression algorithm.
      </b>
    </p>
  );

  return (
    <>
      {isLoading === true ? (
        <div>
          <div style={{ marginTop: height * 0.2 }}>
            <center>
              <h1>Statistical Projection</h1>
              {width < 800 ? para : null}
              <br />
              <PredictText />
              <Predict />

              <br />
              {width > 800 ? para : null}
            </center>

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
                <br />
              </>
            )}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Predictions;
