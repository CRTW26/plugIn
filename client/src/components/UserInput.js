import { h } from 'preact';

import classes from './UserInput.css';

const userInput = ( props ) => (
  <form onSubmit={props.submitted} className={classes.UserInput}>
    <input type='text' onChange={props.inputChanged}></input>
    <button type='submit'>Search</button>
  </form>
);

export default userInput;