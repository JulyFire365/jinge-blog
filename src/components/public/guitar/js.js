import React from 'react';
import styles from './css.css';
class Guitar extends React.Component {
    render() {
        return (
        	<div className={styles.guitar}>
        		<img src={require('./guitar.png')} />
        	</div>
        );
    }
}

export default Guitar;

