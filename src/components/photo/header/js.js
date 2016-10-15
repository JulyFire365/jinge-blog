import React from 'react';
import styles from './css.css';
class Header extends React.Component {
    render() {
        return (
    		<header className={styles.title}>
    			<h1>{this.props.title}</h1>
    		</header>
        );
    }
}

export default Header;

