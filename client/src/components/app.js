import { h, Component } from 'preact';

import Header from './header';
import Map from './Map';
import UserInput from './UserInput';
import ChargingStation from './ChargingStation';


class App extends Component {

  state = {
    input: 'hello',
    lat: null,
    lng: null,
    stations: [],
    showStations: false
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
    console.log(this.state.showStations);
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

    return(
      <div>
        <Header />
        <br />
        <br />
        <br />
        <p>hello</p>
        <Map />
        <UserInput 
          submitted={(event) => this.submitHandler(event)} 
          inputChanged={(event) => this.inputHandler(event)} />
          { stations }
      </div>
    );
  }
}

export default App;
