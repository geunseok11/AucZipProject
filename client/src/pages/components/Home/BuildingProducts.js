import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import BuildingProductsItem from "./BuildingProductsItem";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  tableHeader: {
    fontSize: "2rem",
    textAlign: "center",
  },
});
const BuildingInfo = () => {
  const classes = useStyles();

  return (
    <div>
      <table>
        <th className="tableHeader">
          <td>주목할 투자 상품</td>
        </th>
        <tr>
          <td>
            <BuildingProductsItem />
          </td>
          <td>
            <BuildingProductsItem />
          </td>
          <td>
            <BuildingProductsItem />
          </td>
          <td>
            <BuildingProductsItem />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default BuildingInfo;
