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
  
  const position = [props.lat, props.lng]
  const stations = props.station

   let markers = (
      stations.map(station => {
        console.log(position);
      return <Marker position={[station.latitude,station.longitude]}>
                <Popup>{station.name}</Popup>
              </Marker>
    })
  )

  return ( 
    <MapContainer
    center={position}
    zoom={9}
    style={{width: '70%', height: '500px'}}
    >
    <TileLayer 
      attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> 
      { markers }
    </MapContainer>
  )
};

export default map;