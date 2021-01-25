import { h } from 'preact';

const chargingStation = (props) => (
  <div>
    <p>{props.name}</p>
    <p>{props.postcode}</p>
  </div>
);

export default chargingStation;