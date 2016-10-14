import React from 'react';
import styles from './css.css';
class Header extends React.Component {
    render() {
        return (
    		<header className={styles.title}>
    			<h1>三两照片展示</h1>
    		</header>
        );
    }
}

export default Header;

