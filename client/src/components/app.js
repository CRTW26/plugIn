import { h, Component } from 'preact';

import Header from './header';
import StartingMap from './Map';
import ChargingStationMap from './ChargingStationMap';
import UserInput from './UserInput';
import ChargingStation from './ChargingStation';

import classes from './app.css'; 

class App extends Component {

  state = {
    input: 'hello',
    lat: null,
    lng: null,
    stations: [],
    showStations: false,
    showMarkers: false,
    startingLat: 51.505,
    startingLng: -0.09
  }

  inputHandler = (event) => {
    this.setState({input: event.target.value})
  }

  submitHandler = (event) => {
    event.preventDefault();
    // console.log('submit event')
    // console.log(this.state.input)
    this.getLatLong(this.state.input);
    
  }

  getLatLong(postcode) {
    fetch(`/api/location/${postcode}`)
    // fetch(`/api/location`)
    .then((response) => {
      console.log(response);
      return response.json();
    }).then((response) => {
      console.log(response);
      this.setState({lat: response.result.latitude})
      this.setState({lng: response.result.longitude})
      // console.log(response.result.latitude);
      // console.log(response.result.longitude);
      this.getStationData(response.result.latitude, response.result.longitude);
    });
  }

  getStationData(lat, lng) {
    fetch(`api/stations/${lat}/${lng}`)
    .then((response) => {
      return response.json();
    }).then((response) => {
      console.log(response);
      this.sortStationData(response);
    });
  }

  sortStationData(response) {
    console.log(response.length)
    const results = [];
    for (let i = 0; i < response.length; i ++) {
      let station = {
        name: response[i].AddressInfo.Title,
        postcode: response[i].AddressInfo.Postcode,
        latitude: response[i].AddressInfo.Latitude,
        longitude: response[i].AddressInfo.Longitude
      }  
      results.push(station)
    }
    console.log(results);
    this.setState({stations: results})
    this.setState({showStations: true})
    this.setState({showMarkers: true})
  }

  render() {

    let stations = null;
    if (this.state.showStations) {
      stations = (
        <div>
          { this.state.stations.map(station => {
            return <ChargingStation 
            name={station.name}
            postcode={station.postcode} />
        })}
        </div>
      )
    }

    // let mapView = <Map lat={this.state.startingLat} lng={this.state.startingLng} stations={null}/>;
    let mapView;
    if (this.state.showMarkers) {
      console.log("Map view changed")
      mapView = (
        <ChargingStationMap 
          lat={this.state.lat}
          lng={this.state.lng} 
          station={this.state.stations} />
      )
    } else {
      // mapView = null;
      mapView = <StartingMap />;
    }

    return(
      <div>
        <Header />
        <div className={classes.App}>
          <UserInput 
            submitted={(event) => this.submitHandler(event)} 
            inputChanged={(event) => this.inputHandler(event)} />
          { stations }
          { mapView }
        </div>
      </div>
    );
  }
}

export default App;
