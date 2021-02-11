import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import About from '../routes/about';
// import StartingMap from './Maps/Map';
// import ChargingStationMap from './Maps/ChargingStationMap';
// import UserInput from './UserInput/UserInput';
// import ChargingStation from './ChargingStations/ChargingStation';

import classes from './app.css'; 

class App extends Component {

//   state = {
//     input: 'hello',
//     lat: null,
//     lng: null,
//     stations: [],
//     showStations: false,
//     showMarkers: false,
//   }

//   inputHandler = (event) => {
//     this.setState({input: event.target.value})
//   }

//   submitHandler = (event) => {
//     event.preventDefault();
//     this.getLatLong(this.state.input);
    
//   }

//   getLatLong(postcode) {
//     fetch(`/api/location/${postcode}`)
//     .then((response) => {
//       return response.json();
//     }).then((response) => {
//       this.setState({lat: response.result.latitude})
//       this.setState({lng: response.result.longitude})
//       this.getStationData(response.result.latitude, response.result.longitude);
//     }).catch((error) => {
//         console.log(error);
//     });
//   }

//   getStationData(lat, lng) {
//     fetch(`api/stations/${lat}/${lng}`)
//     .then((response) => {
//       return response.json();
//     }).then((response) => {
//       this.sortStationData(response);
//     }).catch((error) => {
//         console.log(error);
//     });
//   }

//   sortStationData(response) {
//     const results = [];
//     for (let i = 0; i < response.length; i ++) {
//       let station = {
//         name: response[i].AddressInfo.Title,
//         postcode: response[i].AddressInfo.Postcode,
//         latitude: response[i].AddressInfo.Latitude,
//         longitude: response[i].AddressInfo.Longitude
//       }  
//       results.push(station)
//     }
//     this.setState({stations: results})
//     this.setState({showStations: true})
//     this.setState({showMarkers: true})
//   }

//   render() {

//     let stations = (
//       <UserInput 
//       submitted={(event) => this.submitHandler(event)} 
//       inputChanged={(event) => this.inputHandler(event)} />
//     );
//     if (this.state.showStations) {
//       stations = (
//         <div>
//           <p className={classes.listTitle}>Charging points near you:</p>
//           <ul>
//             { this.state.stations.map(station => {
//               return <li><ChargingStation 
//               name={station.name}
//               postcode={station.postcode} /></li>
//           })}
//           </ul>
//         </div>
//       )
//     }

//     let mapView;
//     if (this.state.showMarkers) {
//       mapView = (
//         <ChargingStationMap 
//           lat={this.state.lat}
//           lng={this.state.lng} 
//           station={this.state.stations} />
//       )
//     } else {
//       mapView = <StartingMap />;
//     }
    render () {
        return(
            <div>
                <Header />
                <Router> 
                    <Home path='/' />
                    <About path='/about' />
                </Router>
            </div>
        );
    }

}

export default App;
