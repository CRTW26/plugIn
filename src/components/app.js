import { h, Component } from 'preact';

import Header from './header';
import Map from './Map';
import UserInput from './UserInput';

class App extends Component {

  state = {
    input: 'hello'
  }

  inputHandler = (event) => {
    this.setState({input: event.target.value})
  }

  submitHandler = (event) => {
    event.preventDefault();
    console.log('submit event')
    console.log(this.state.input)
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
      </div>
    );
  }
}

export default App;
