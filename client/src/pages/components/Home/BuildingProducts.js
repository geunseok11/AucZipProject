import React from "react";

import { makeStyles } from "@material-ui/core/styles";

// import BuildingProductsItem from "./BuildingProductsItem";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: "100%",
//   },
//   tableHeader: {
//     fontSize: "2rem",
//     textAlign: "center",
//   },
// });
// const BuildingInfo = () => {
//   const classes = useStyles();

//   return (
//     <div>
//       <table>
//         <th className="tableHeader">
//           <td>주목할 투자 상품</td>
//         </th>
//         <tr>
//           <td>
//             <BuildingProductsItem />
//           </td>
//           <td>
//             <BuildingProductsItem />
//           </td>
//           <td>
//             <BuildingProductsItem />
//           </td>
//           <td>
//             <BuildingProductsItem />
//           </td>
//         </tr>
//       </table>
//     </div>
//   );
// };

// export default BuildingInfo;

import BuildingItem from "../Buliding/buildingItem"
import BuildingInfo from "../Buliding/buildingInfo"
import { Route } from "react-router-dom";


const BuildingProducts= (props) => (

  <div>
    <BuildingItem
        building = {props.buildings[4]}
        key = {props.buildings[4].casenum}
      handleBuildingTitleClick = {props.handleBuildingTitleClick}
      />
      <BuildingItem
        building = {props.buildings[3]}
        key = {props.buildings[3].casenum}
      handleBuildingTitleClick = {props.handleBuildingTitleClick}
      />
      <BuildingItem
        building = {props.buildings[1]}
        key = {props.buildings[1].casenum}
      handleBuildingTitleClick = {props.handleBuildingTitleClick}
      />

    <Route exact path="/buildingInfo" render={() => <BuildingInfo 
      building = {props.buildings}
        key = {props.buildings.casenum}
      handleBuildingTitleClick = {props.handleBuildingTitleClick}
      />} />

  </div>
);


export default BuildingProducts;
