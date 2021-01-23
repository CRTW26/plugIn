import { h, Component } from 'preact';

import Header from './header';
import Map from './Map'

class App extends Component {

  render() {
    return(
      <div>
        <Header />
        <br />
        <br />
        <br />
        <p>hello</p>
        <Map />
      </div>
    );
  }
}

export default App;
