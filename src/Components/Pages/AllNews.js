import React, { useState, useEffect } from "react";
import News from "./News";
import { Animated } from "react-animated-css";
import logosm from "../Media/logosm.png";
import iedclog from "../Media/iedcw.png";
import Loader from "../Extras/Loader";
import { useViewport } from "../Extras/ViewportProvider";

const AllNews = () => {
  const [all, setAll] = useState([]);
  const [showedIndex, setshowedIndex] = useState(-1);
  const [isLoading, setLoading] = useState(false);
  const { width } = useViewport();

  const ShowedNews = (i) => {
    if (i === undefined)
      setshowedIndex(-1);
    else
      setshowedIndex(i);
  };

  useEffect(() => {
    const fetchData = () => {
      fetch("https://covid19newsapi.herokuapp.com/news")
        .then((response) => response.json())
        .then((res) => {
          res["all"].sort((a, b) => {
            let ad = new Date(a.pubdate),
              bd = new Date(b.pubdate);
            return bd - ad;
          });
          setAll(res["all"]);
          setLoading(true);
        });
    };
    fetchData();
  },[]);

  return (
    <>
      {isLoading === true ? (
        <div>
          <div style={{}}>
            <h1>All News</h1>
            {all.map((news) => (
              <Animated animationIn="fadeInUp" animationInDuration={2000}>
                {" "}
                <News
                  key={all.indexOf(news)}
                  showedIndex={showedIndex}
                  ShowedNews={ShowedNews}
                  index={all.indexOf(news)}
                  title={news.title}
                  content={news.description}
                  url={news.url}
                  time={news.pubdate}
                />
              </Animated>
            ))}
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

export default AllNews;
