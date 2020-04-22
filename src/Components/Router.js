import React from "react";

import { Switch, Route, Link } from "react-router-dom";
import BottomBar from "./Extras/BottomBar";
import "./Styles/route.css";
import Home from "./Pages/Home";
import AllNews from "./Pages/AllNews";
import Status from "./Pages/Status";
import Sources from "./Pages/Source";
// import Predictions from "./Pages/Predictions";
import Drawer from "./Extras/Drawer";
import About from "./Pages/AboutUs";
import { useViewport } from "./Extras/ViewportProvider";

const Router = () => {
  const { width } = useViewport();
  return (
    <div>
      <div className="navbar">
        {width > 800 ? null : (
            <div>
            <Drawer />
            <span style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                fontWeight: 500,
                fontSize: "1.2rem",
                textAlign: "center",
                color: "white",
                transform: "translate(-50%, -50%)"
            }}>
            Covid-19 Updates
            </span>
            </div>
            )}
        {width > 800 ? (
          <div className="navbar__nav">
          <h3 className="title">Covid-19 Updates</h3>
          <div className="spacer"/>
            <div className="navlink">
              <Link className="navitem" to="/">
                HOME
              </Link>
              <Link className="navitem" to="/news">
                UPDATES
              </Link>
              {/* <Link className="navitem" to="/predict">
                PROJECTION
              </Link> */}
              <Link className="navitem" to="/status">
                STATUS
              </Link>
              <Link className="navitem" to="/source">
                SOURCES
              </Link>
              <Link className="navitem" to="/about">
                ABOUT US
              </Link>
            </div>
          </div>
        ) : (
          <div className="bottomBar">
            <BottomBar />
          </div>
        )}
      </div>
      <div style={{ width: "100%" }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/news">
            <AllNews />
          </Route>
          <Route path="/status">
            <Status />
          </Route>
          {/* <Route path="/predict">
            <Predictions />
          </Route> */}
          <Route path="/source">
            <Sources />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
export default Router;
