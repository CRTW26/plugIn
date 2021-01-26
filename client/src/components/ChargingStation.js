import { h } from 'preact';

import classes from './ChargingStation.css';

const chargingStation = (props) => (
  <div>
    <p>{props.name}</p>
    <p>{props.postcode}</p>
  </div>
);

export default chargingStation;