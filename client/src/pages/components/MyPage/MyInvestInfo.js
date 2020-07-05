import React, { Component } from 'react'
import Deposit from './Deposit';
import Building from '../../Building';

export default class MyInvestInfo extends Component {
  redner() {
    const { data } = this.props;

    return (
      <div>

        {data ? (
          data.map((data_val, i) => <Building key={i} {...data_val} />)
        ) : (
          <h1>투자내역이 없습니다</h1>
        )}
      </div>
    ); 
  }
}