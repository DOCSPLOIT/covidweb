import React, { useState, useEffect } from "react";
import { useViewport } from "../Extras/ViewportProvider";
import { url } from "../Configure";
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

const KeralaTable = () => {
  const { width } = useViewport();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${url}/statusPage`);
      response
        .json()
        .then((res) => {
          let tdata = [];
          for (let i = 0; i < res["historyKerala"].length; i += 7) {
            tdata.push({
              kerala_cases: res["historyKerala"][i].cases,
              india_cases: res["historyIndia"][i].cases,
              world_cases: res["historyGlobal"][i].cases,
            });
          }
          let klen = res["historyKerala"].length;
          let ilen = res["historyIndia"].length;
          let wlen = res["historyGlobal"].length;
          tdata.push({
            kerala_cases: res["historyKerala"][klen-1].cases,
            india_cases: res["historyIndia"][ilen-1].cases,
            world_cases: res["historyGlobal"][wlen-1].cases,
          });
          setData(tdata);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);
  //render table data
  const renderTableData = () => 
    data.map((elt, index) => {
      const { kerala_cases, india_cases, world_cases } = elt;
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
            <p style={({ color: "rgb(100,100,100)" }, styles.tableData)}>
              {index+1}
            </p>
          </TableCell>
          <TableCell
            style={{ backgroundColor: "white", borderWidth: 0, color:"#ff073a" }}
            padding="none"
          >
            <p style={({ color: "#ff073a" }, styles.tableData)}>
              {`${kerala_cases} `}
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
            <p style={styles.tableData}>{india_cases}</p>
          </TableCell>
          <TableCell
            style={{
              backgroundColor: "white",
              color: "#007bff",
              borderWidth: 0,
            }}
            padding="none"
          >
            <p style={styles.tableData}>{world_cases}</p>
          </TableCell>
        </TableRow>
      );
    });
  //render table header
  const renderTableHeader = () => {
    let header = ["Week", "Kerala", "India", "World"];
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
        <h3 id="title">Weekly confirmed cases</h3>
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

export default KeralaTable;
