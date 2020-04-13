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
import { useViewport } from "../Extras/ViewportProvider";

const StateWiseOrg = ({ stateWiseOrg }) => {
  const [data, setData] = useState(stateWiseOrg);
  const {width} = useViewport();

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
      const { confirmed, active, deaths, state, deltaconfirmed, deltadeaths, deltarecovered } = d;
      return (
        <TableRow key={index}>
          <TableCell>{state}</TableCell>
          <TableCell>{`${confirmed} `}<span style={{color:"#1552c2", fontSize:"0.5rem", fontWeight:"bold"}}>+{deltaconfirmed}</span></TableCell>
          <TableCell>{`${deaths} `}<span style={{color:"#cf3737", fontSize:"0.5rem", fontWeight:"bold"}}>+{deltadeaths}</span></TableCell>
          <TableCell>{active}</TableCell>
        </TableRow>
      );
    });

  const renderTableHeader = () => {
    let header = ["State", "Confirmed", "Death", "Active"];
    return header.map((d, index) => {
      return (
        <TableCell
          key={index}
          style={
            index === 0
              ? { width: "40%", textAlign: "left" }
              : {
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
        >{d}</TableCell>
      );
    });
  };

  return (
    <center>
      <br />
      <TableContainer
        style={
          width > 800
            ? {
                width: width * 0.8,
              }
            : { width: width }
        }
        component={Paper}
        elevation={10}
      >
        <h3 id="title">State Wise Data from covid19india.org</h3>
        <Table id="stwscvdorg">
          <TableHead style={{backgroundColor:"#ededed"}}> {renderTableHeader()}</TableHead>
          <TableBody style={{ textAlign: "center" }}>
            {renderTableData()}
          </TableBody>
        </Table>
      </TableContainer>
    </center>
  );
};

export default StateWiseOrg;
