import React from "react";
import * as MaterialUI from "@material-ui/core";
import { Animated } from "react-animated-css";
import { useViewport } from "../Extras/ViewportProvider";

const News = (props) => {
  const { width } = useViewport();
  const changeShowContent = () => {
    if (props.showedIndex === props.index) props.ShowedNews(undefined);
    else props.ShowedNews(props.index);
  };
  if (props.showedIndex === props.index) {
    return (
      <center>
        <Animated animationIn="fadeIn" animationInDuration={1500}>
          <MaterialUI.Paper
            onClick={changeShowContent}
            elevation={5}
            style={{
              width: width > 800 ? width * 0.6 : width,
              marginTop: "10px",
            }}
          >
            <h4
              onClick={changeShowContent}
              style={{
                cursor: "pointer",
                fontSize: width > 800 ? 25 : 20,
              }}
            >
              {props.title}
            </h4>
            <p
              style={{
                textIndent: "20px",
              }}
            >
              {props.content}
            </p>
            {props.url ? (
              <MaterialUI.Button color="primary" href={props.url}>
                More Details
              </MaterialUI.Button>
            ) : null}
            <br />
            Published On :<div>{new Date(props.time).toLocaleString()}</div>
            <br />
            <br />
          </MaterialUI.Paper>
        </Animated>
      </center>
    );
  } else {
    return (
      <center>
        <MaterialUI.Paper
          onClick={changeShowContent}
          elevation={5}
          style={{
            width: width > 800 ? width * 0.6 : width,
            marginTop: "10px",
          }}
        >
          <br />
          <h4
            onClick={changeShowContent}
            style={{
              cursor: "pointer",
              textAlign: "center",
              fontSize: width > 800 ? 25 : 20,
            }}
          >
            {props.title}
          </h4>
          Published On:
          <div>{new Date(props.time).toLocaleString()}</div>
          <br />
        </MaterialUI.Paper>
      </center>
    );
  }
};

export default News;
