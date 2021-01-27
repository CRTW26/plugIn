import { h } from 'preact';

import classes from './UserInput.css';

const userInput = ( props ) => (
  <div id='UserInput'>
    <form onSubmit={props.submitted} className={classes.UserInput}>
      <h1>Find a charging point for your electric vehicle</h1>
      <p>Enter your postcode to begin</p>
      <input type='text' onChange={props.inputChanged}></input>
      <button type='submit'>Search</button>
    </form>
  </div>
);

export default userInput;