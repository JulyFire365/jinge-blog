import React from 'react';
import styles from './css.css';
class Coffee extends React.Component {
    render() {
        return (
        	<div className={styles.coffee}>
        		<img src={require('./coffee.png')} />
        	</div>
        );
    }
}

export default Coffee;

