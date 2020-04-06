import React, { useState, useEffect } from "react";

const StateWiseOrg = ({ stateWiseOrg }) => {
  const [data, setData] = useState(stateWiseOrg);

  useEffect(() => {
    const modData = () => {
      let temp = [].concat(stateWiseOrg);
      let total = temp.splice(0, 1);
      temp = temp.concat(total);
      setData(temp);
    };
    modData();
  }, [stateWiseOrg]);

  const renderTableData = () =>
    data.map((d, index) => {
      const { confirmed, active, deaths, state } = d;
      return (
        <tr key={index}>
          <td>{state}</td>
          <td>{active}</td>
          <td>{deaths}</td>
          <td>{confirmed}</td>
        </tr>
      );
    });

  const renderTableHeader = () => {
    let header = ["State", "Active Cases", "Death", "Confirmed Cases"];
    return header.map((d, index) => {
      return <th key={index}>{d}</th>;
    });
  };

  return (
    <div>
      <h1 id="title">State Wise Data from covid19india.org</h1>
      <table id="stwscvdorg">
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  );
};

export default StateWiseOrg;
