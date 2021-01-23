import { h } from 'preact';

const userInput = ( props ) => (
  <form onSubmit={props.submitted}>
    <input type='text' onChange={props.inputChanged}></input>
    <button type='submit'>Search</button>
  </form>
);

export default userInput;