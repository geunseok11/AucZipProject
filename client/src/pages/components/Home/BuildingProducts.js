import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import BuildingItem from "../Buliding/buildingItem";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  tableHeader: {
    fontSize: "2rem",
    textAlign: "center",
  },
});

const BuildingInfo = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <table>
        <th className={classes.tableHeader}>
          <td>주목할 투자 상품</td>
        </th>
        <tr>
          <td>
            <BuildingItem
              building={props.buildings[4]}
              key={props.buildings[4].casenum}
              handleBuildingTitleClick={props.handleBuildingTitleClick}
            />
          </td>
          <td>
            <BuildingItem
              building={props.buildings[3]}
              key={props.buildings[3].casenum}
              handleBuildingTitleClick={props.handleBuildingTitleClick}
            />
          </td>
          <td>
            <BuildingItem
              building={props.buildings[2]}
              key={props.buildings[2].casenum}
              handleBuildingTitleClick={props.handleBuildingTitleClick}
            />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default BuildingInfo;
