import React from 'react';
import styles from './css.css';
class Top extends React.Component {
    render() {
        return (
    		<div className={styles.top}>
    			<p className={styles.photo}></p>
    			<p className={styles.cloudDown}><img src={require('./cloudDown.png')} /></p>
    		</div>
        );
    }
}

export default Top;

