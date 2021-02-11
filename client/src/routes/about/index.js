import { h } from 'preact';
import classes from './style.css';

const About = () => (
	<div class={classes.App}>
		<h1>plugIn</h1>
		<p>
            This app has been designed to help users locate charging stations for electric vehicles.
            Once a user enters their postcode, it makes use of external API's to find the latitude and longitude 
            and uses this to access open source data about charging stations within 10km of the postcode. 
        </p>
        <p>
            For the frontend this project is built using Preact, a web framework similar to React but only 3kb in size. 
            It's size means it is snappy to use but also gives you access to many of the great features of React.
            On the backend it uses NodeJS and Express. 
        </p>
        <p>
            It uses the Postcodes API to fetch data about latitude and longitude, using the postcode entered.
            For the charging station data, it uses the opencharge API. 
        </p>
        <h2>Find out more: </h2>
        <a href="https://github.com/CRTW26" target="blank"><p>My GitHub</p></a>
        <a href="https://postcodes.io/" target="blank"><p>Postcodes API</p></a>
        <a href="https://openchargemap.org/site/develop/api" target="blank"><p>Opencharge API</p></a>

	</div>
);

export default About;