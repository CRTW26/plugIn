import { h } from 'preact';

import classes from './UserInput.css';

const userInput = ( props ) => (
  <div>
    <form onSubmit={props.submitted} className={classes.UserInput}>
    <h1>Find a charging point for you electric vehicle</h1>
      <input type='text' onChange={props.inputChanged}></input>
      <button type='submit'>Search</button>
    </form>
  </div>
);

export default userInput;