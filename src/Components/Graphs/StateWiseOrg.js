import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  createStyles,
} from "@material-ui/core";
import { useViewport } from "../Extras/ViewportProvider";
import "../Styles/home.css";
const StateWiseOrg = ({ stateWiseOrg }) => {
  const [data, setData] = useState(stateWiseOrg);
  const { width } = useViewport();

  useEffect(() => {
    const modData = () => {
      let temp = [].concat(stateWiseOrg);
      let total = temp.splice(0, 1);
      temp.sort((a, b) => b.confirmed - a.confirmed);
      temp = temp.concat(total);
      setData(temp);
    };
    modData();
  }, [stateWiseOrg]);

  const renderTableData = () =>
    data.map((d, index, arr) => {
      const {
        confirmed,
        active,
        deaths,
        recovered,
        state,
        deltaconfirmed,
        deltadeaths,
        deltarecovered,
      } = d;

      const check = (n1, n2) => (index % 2 === 0 ? n1 : n2);
      const styles = createStyles({
        tableData: {
          padding: width > 800 ? 20 : 10,
          paddingLeft: 2,
          paddingRight: 2,
          backgroundColor: check(null, "rgb(245,245,245)"),
          fontFamily: "arch",
          fontWeight: "bolder",
          borderRadius: check(null, 8),
          fontSize: 12,
          margin: 2,
          textAlign: "center",
        },
      });
      return (
        <TableRow style={{ borderWidth: 0 }} key={index}>
          <TableCell
            style={{
              backgroundColor: "white",
              borderWidth: 0,
              textAlign: "left",
              color: "",
            }}
            padding="none"
          >
            <p
              id="state"
              style={({ color: "rgb(100,100,100)" }, styles.tableData)}
            >
              {state}
            </p>
          </TableCell>
          <TableCell
            style={{ backgroundColor: "white", borderWidth: 0 }}
            padding="none"
          >
            <p id="confirm" style={({ color: "#ff073a" }, styles.tableData)}>
              {`${confirmed} `}
              <span
                style={{
                  color: "#cf3737",
                  fontSize: ".55rem",
                  fontWeight: "bold",
                }}
              >
                +{deltaconfirmed}
              </span>
            </p>
          </TableCell>
          <TableCell
            style={{
              backgroundColor: "white",
              color: "#6c757d",
              borderWidth: 0,
            }}
            padding="none"
          >
            <p id="deaths" style={styles.tableData}>
              {`${deaths} `}
              <span
                style={{
                  fontSize: "0.55rem",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                +{deltadeaths}
              </span>
            </p>
          </TableCell>
          <TableCell
            style={{
              backgroundColor: "white",
              color: "#007bff",
              borderWidth: 0,
            }}
            padding="none"
          >
            <p id="active" style={styles.tableData}>{active}</p>
          </TableCell>
          <TableCell
            style={{
              backgroundColor: "white",
              color: "#28a745",
              borderWidth: 0,
            }}
            padding="none"
          >
            <p id='recovered' style={styles.tableData}>{recovered}</p>
          </TableCell>
        </TableRow>
      );
    });

  const renderTableHeader = () => {
    let header = ["State",width>800? "Confirmed":'Cnfmd', "Death", "Active",width>800? "Recovered":'Rcvrd'];
    return (
      <TableRow>
        {header.map((d, index) => (
          <TableCell
            key={index}
            padding="none"
            align="center"
            style={{ backgroundColor: "white", borderWidth: 0 }}
          >
            <p
              style={{
                padding: width > 800 ? 20 : 10,
                paddingLeft: 2,
                paddingRight: 2,
                backgroundColor: "rgb(240,240,240)",
                fontFamily: "arch",
                fontWeight: "bolder",
                borderRadius: 8,
                fontSize: 15,
                margin: 2,
                color:
                  index === 0
                    ? "rgb(100,100,100)"
                    : index === 1
                    ? "#ff073a"
                    : index === 2
                    ? "#6c757d"
                    : index === 3
                    ? "#007bff"
                    : index === 4
                    ? "#28a745"
                    : "rgb(100,100,100)",
              }}
            >
              {d}
            </p>
          </TableCell>
        ))}
      </TableRow>
    );
  };

  return (
    <center>
      <br />
      <TableContainer
        style={
          width > 800
            ? {
                width: width * 0.8,
                height: 600,
              }
            : { width: width, height: 600 }
        }
        className="table"
        component={Paper}
        elevation={10}
      >
        <h3 id="title">State Wise Data from covid19india.org</h3>
        <Table stickyHeader>
          <TableHead style={{ backgroundColor: "white" }}>
            {renderTableHeader()}
          </TableHead>
          <TableBody style={{ textAlign: "center" }}>
            {renderTableData()}
          </TableBody>
        </Table>
      </TableContainer>
    </center>
  );
};

export default StateWiseOrg;
