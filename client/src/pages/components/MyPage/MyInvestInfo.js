import React, { Component, useState } from 'react'
import Deposit from './Deposit';
import BuildingItem from '../Buliding/buildingItem';


// export default class MyInvestInfo extends Component {
//   redner() {
//     const { data } = this.props;

//     return (
//       <div>
       
//         {data ? (
//           data.map((data_val, i) => <BuildingItem key={i} {...data_val} />)
//         ) : (
//           <h1>투자내역이 없습니다</h1>
//         )}
//       </div>
//     ); 
//   }
// }

const MyInvestInfo = (props) => {
  
  const { data } = props

  return (
          <div>
           
            {data ? (
              data.map((data_val, i) => <BuildingItem key={i} {...data_val} />)
            ) : (
              <h1>투자내역이 없습니다</h1>
            )}
          </div>
        ); 
}

export default MyInvestInfo;