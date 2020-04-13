import React from "react";
import { LinearProgress } from "@material-ui/core";
import { useViewport } from "./ViewportProvider";

const Loader =()=> {
    const {width, height} = useViewport();
    return (
      <div
        style={{ textAlign: "center", marginTop: height * 0.35 }}
      >
        <p>Loading...</p>
        <center>
          <LinearProgress
            style={{
              width:
                width > 800
                  ? width * 0.5
                  : width * 0.8
            }}
          />
        </center>
      </div>
    );
  }

  export default Loader;
