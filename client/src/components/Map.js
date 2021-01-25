import { h } from 'preact';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;


const map = (props) => {
  
  const stations = props.station
  let markers = null;

  if (stations) {
    markers = (
       stations.map(station => {
         console.log(station);
        return <Marker position={[station.latitude,station.longitude]}>
                  <Popup>{station.name}</Popup>
                </Marker>
      })
    )
  }

  return ( 
    <MapContainer
    center={[props.lat, props.lng]}
    zoom={10}
    style={{width: '70%', height: '500px'}}
    >
    <TileLayer 
      attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> 
      {/* <Marker position={[props.lat,props.lng]}>
        <Popup>Nice popup</Popup>
      </Marker> */}
      { markers }
    </MapContainer>
  )
};

export default map;