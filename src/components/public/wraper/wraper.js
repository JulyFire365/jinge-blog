import React from 'react';
import styles from './css.css';
import Top from 'compPublicDir/top/top';
import Coffee from 'compPublicDir/coffee/js';
import Logo from 'compPublicDir/logo/js';
import Nav from 'compPublicDir/nav/js';
class Wraper extends React.Component {
    render() {
        return (
        	<div className={styles.wraper}>
        		<Top />
        		<Logo />
                <Coffee />
                <Nav />
				{this.props.children}
        	</div>
        );
    }
}

export default Wraper;

