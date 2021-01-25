import { h } from 'preact';

import ChargingStation from './ChargingStation';

const chargingStationList = (props) => {
  for (let i = 0; i < props.stations.length; i++) {
    return (
      <ChargingStation  name={props.stations[i].name} postcode={props.stations[i].name}/>
    )
  }
}

export default chargingStationList;