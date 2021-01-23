import {h, Component} from 'preact';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

class Map extends Component {

  render () {
    return (
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{width: '70%', height: '500px'}}
      >
      <TileLayer 
        attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />  
      </MapContainer>
    );
  }
}

export default Map;