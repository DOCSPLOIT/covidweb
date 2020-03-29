import React, { Component } from "react";
import * as MaterialUI from "@material-ui/core";
import { url } from "../Configure";
// import { regressionUrl } from "../Configure";

export default class PredictText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      indiaData: [],
      GlobalData: [],
      keralaData: []
    };
  }

  componentDidMount() {
    fetch(`${url}/predictionPage`)
      .then(response => response.json())
      .then(res => {
        const oneDay = 1000 * 3600 * 24;
        let today = Date.now();
        let date = [];
        const n = res["arr"].length;
        for (let i = 0; i < n; i++) {
          let d = today + i * oneDay;
          let de = new Date(d);
          let dd = de.getDate();
          let mm = de.getMonth() + 1;
          let yy = de.getFullYear();
          d = `${dd}-${mm}-${yy}`;
          date.push([d, res["arr"][i]]);
        }

        this.setState({ data: date });
      });
  }

  render() {
    return (
      <MaterialUI.TableContainer
        style={
          window.innerWidth > 800
            ? {
                width: window.innerWidth * 0.5,
                alignSelf: "center"
              }
            : { width: window.innerWidth }
        }
        component={MaterialUI.Paper}
        elevation={10}
      >
        <h2>Prediction Table [Confirmation Cases]</h2>
        <MaterialUI.Table
          style={
            window.innerWidth > 800
              ? {
                  minWidth: 650
                }
              : { width: window.innerWidth }
          }
        >
          <MaterialUI.TableHead>
            {" "}
            <MaterialUI.TableRow
              style={{ marginLeft: 200, backgroundColor: "#66b0ff" }}
            >
              <MaterialUI.TableCell
                style={{ fontWeight: "bold", color: "#25266d" }}
                align="center"
              >
                Date
              </MaterialUI.TableCell>
              <MaterialUI.TableCell
                style={{ fontWeight: "bold", color: "#25266d" }}
                align="center"
              >
                Kerala
              </MaterialUI.TableCell>
              <MaterialUI.TableCell
                style={{ fontWeight: "bold", color: "#25266d" }}
                align="center"
              >
                India
              </MaterialUI.TableCell>
              <MaterialUI.TableCell
                style={{ fontWeight: "bold", color: "#25266d" }}
                align="center"
              >
                World
              </MaterialUI.TableCell>
            </MaterialUI.TableRow>
          </MaterialUI.TableHead>
          <MaterialUI.TableBody>
            {this.state.data.map((item, index) => (
              <MaterialUI.TableRow
                key={item[0]}
                style={{
                  backgroundColor: index % 2 == 0 ? "white" : "#66b0ff"
                }}
              >
                <MaterialUI.TableCell
                  style={{ fontWeight: "bold", color: "#25266d" }}
                  align="center"
                >
                  {item[0]}
                </MaterialUI.TableCell>
                <MaterialUI.TableCell
                  style={{ fontWeight: "bold", color: "#25266d" }}
                  align="center"
                >
                  {item[1][0]}
                </MaterialUI.TableCell>
                <MaterialUI.TableCell
                  style={{ fontWeight: "bold", color: "#25266d" }}
                  align="center"
                >
                  {item[1][1]}
                </MaterialUI.TableCell>
                <MaterialUI.TableCell
                  style={{ fontWeight: "bold", color: "#25266d" }}
                  align="center"
                >
                  {item[1][2]}
                </MaterialUI.TableCell>
              </MaterialUI.TableRow>
            ))}
          </MaterialUI.TableBody>
        </MaterialUI.Table>
      </MaterialUI.TableContainer>
    );
  }
}
