import React, { Component } from "react";
import News from "./News";
import { Animated } from "react-animated-css";
import logosm from "../Media/logosm.png";
import iedclog from "../Media/iedcw.png";
import Loader from "../Extras/Loader";
export default class AllNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gok: [],
      who: [],
      all: [],
      showedIndex: -1,
      isLoading: false
    };
  }
  componentDidMount() {
    fetch("https://covid19newsapi.herokuapp.com/news")
      .then(response => response.json())
      .then(res => {
        res["all"].sort((a, b) => {
          let ad = new Date(a.pubdate),
            bd = new Date(b.pubdate);
          return bd - ad;
        });
        this.setState({
          all: res["all"],
          isLoading: true
        });
      });
  }
  render() {
    return (
      <>
        {this.state.isLoading === true ? (
          <div>
            <div style={{}}>
              <h1>All News</h1>
              {/* {this.state.gok.map(news => <News key={this.state.gok.indexOf(news)} showedStatus={this.state.showedStatus} showedIndex={this.state.showedGokIndex} ShowedNews={this.ShowedNews} index={this.state.gok.indexOf(news)} title={news.title} content={news.description} url={news.url} time={news.pubdate} />)}
                {this.state.who.map(news => <News key={this.state.who.indexOf(news)} showedStatus={this.state.showedStatus} showedIndex={this.state.showedWhoIndex} ShowedNews={this.ShowedNews} index={this.state.who.indexOf(news)} title={news.title} content={news.description} url={news.url} time={news.pubdate} />)}
             */}
              {this.state.all.map(news => (
                <Animated animationIn="fadeInUp" animationInDuration={2000}>
                  {" "}
                  <News
                    key={this.state.all.indexOf(news)}
                    showedIndex={this.state.showedIndex}
                    ShowedNews={this.ShowedNews}
                    index={this.state.all.indexOf(news)}
                    title={news.title}
                    content={news.description}
                    url={news.url}
                    time={news.pubdate}
                  />
                </Animated>
              ))}
              <br />
              {window.innerWidth > 800 ? (
                <footer>
                  <div className="footer">
                    <br />
                    <a href="http://sscollege.ac.in">
                      {" "}
                      <img
                        src={logosm}
                        style={{
                          width: "75px",
                          height: "75px",
                          position: "absolute",
                          marginLeft: "20px"
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
                          <l style={{ fontSize: 14 }}>Powered By IEDC </l>
                        </p>
                      </a>
                    </center>
                    <a href="http://iedc.sscollege.ac.in">
                      {" "}
                      <img
                        src={iedclog}
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
  }
  ShowedNews = i => {
    if (i == undefined)
      this.setState({
        showedIndex: -1
      });
    else
      this.setState({
        showedIndex: i
      });
  };
}

//  http://covid19newsapi.herokuapp.com/news
