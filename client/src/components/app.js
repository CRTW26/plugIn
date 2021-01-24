import { h, Component } from 'preact';

import Header from './header';
import Map from './Map';
import UserInput from './UserInput';

class App extends Component {

  state = {
    input: 'hello',
    lat: null,
    lng: null
  }

  inputHandler = (event) => {
    this.setState({input: event.target.value})
  }

  submitHandler = (event) => {
    event.preventDefault();
    // console.log('submit event')
    // console.log(this.state.input)
    this.getLatLong();
    
  }

  getLatLong() {
    fetch('/api/location')
    .then((response) => {
      console.log(response);
      return response.json();
    }).then((response) => {
      console.log(response);
      this.setState({lat: response.result.latitude})
      this.setState({lng: response.result.longitude})
      // console.log(response.result.latitude);
      // console.log(response.result.longitude);
    });
  }

  render() {
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
          inputChanged={(event) => this.inputHandler(event)}/>
        <p>{this.state.input}</p>
        <p>{this.state.lat}</p>
        <p>{this.state.lng}</p>
      </div>
    );
  }
}

export default App;
