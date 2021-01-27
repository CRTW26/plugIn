import { h } from 'preact';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const map = () => {

  return ( 
    <MapContainer
    center={[53.38431, -1.49568]}
    zoom={6}
    style={{width: '70%', height: '500px'}}
    >
    <TileLayer 
      attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> 
    </MapContainer>
  )
};

export default map;