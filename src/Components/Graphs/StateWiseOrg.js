import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@material-ui/core";

const StateWiseOrg = ({ stateWiseOrg }) => {
  const [data, setData] = useState(stateWiseOrg);

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
    data.map((d, index) => {
      const { confirmed, active, deaths, state } = d;
      return (
        <TableRow key={index}>
          <TableCell>{state}</TableCell>
          <TableCell>{confirmed}</TableCell>
          <TableCell>{deaths}</TableCell>
          <TableCell>{active}</TableCell>
        </TableRow>
      );
    });

  const renderTableHeader = () => {
    let header = ["State", "Confirmed Caes", "Death", "Active Cases"];
    return header.map((d, index) => {
      return (
        <TableCell
          key={index}
          style={
            index === 0
              ? { width: "50%", textAlign: "left", backgroundColor: "#edc5ff" }
              : {
                  backgroundColor:
                    index === 1
                      ? "#98b6ec"
                      : index === 2
                      ? "#fce4e4"
                      : index === 3
                      ? "#ccdeff"
                      : "#e6b0ff",
                  color:
                    index === 1
                      ? "#1552c2"
                      : index === 2
                      ? "#cf3737"
                      : index === 3
                      ? "#3792cf"
                      : null,
                }
          }
        >
          {d}
        </TableCell>
      );
    });
  };

  return (
    <center>
      <br />
      <TableContainer
        style={
          window.innerWidth > 800
            ? {
                width: window.innerWidth * 0.8,
              }
            : { width: window.innerWidth }
        }
        component={Paper}
        elevation={10}
      >
        <h3 id="title">State Wise Data from covid19india.org</h3>
        <Table id="stwscvdorg">
          <TableHead> {renderTableHeader()}</TableHead>
          <TableBody style={{ textAlign: "center" }}>
            {renderTableData()}
          </TableBody>
        </Table>
      </TableContainer>
    </center>
  );
};

export default StateWiseOrg;
