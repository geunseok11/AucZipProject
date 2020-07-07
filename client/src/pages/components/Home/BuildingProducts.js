import React, { Component } from "react";

import BuildingProductsItem from "./BuildingProductsItem";

export default class BuildingInfo extends Component {
  render() {
    return (
      <div>
        <table>
          <th>
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
          </tr>
        </table>
      </div>
    );
  }
}
