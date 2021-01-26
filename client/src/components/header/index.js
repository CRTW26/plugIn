import { h } from 'preact';
import style from './style.css';

const Header = (props) => (
	<header class={style.header}>
		<a onClick={() => window.location.reload(false)}><h1>plugIn</h1></a>
	</header>
);

export default Header;
