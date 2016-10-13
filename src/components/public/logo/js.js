import {React, ReactDOM, Router, Route, hashHistory, IndexRoute, Link} from 'libsComp';
import styles from './css.css';
class Logo extends React.Component {
    render() {
        return (
        	<Link to="/" className={styles.logo}>
        		<img src={require('./logo.png')} />
        	</Link>
        );
    }
}

export default Logo;

