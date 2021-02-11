import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = (props) => (
	<header class={style.header}>
		<a onClick={() => window.location.reload(false)}><h1 id='title'>plugIn</h1></a>
        <nav>
        <Link activeClassName={style.active} href="/">Home</Link>
        <Link activeClassName={style.active} href="/about">About</Link>
        </nav>
	</header>
);

export default Header;
