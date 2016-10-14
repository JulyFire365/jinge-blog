import React from 'react';
import styles from './css.css';
class Content extends React.Component {
    render() {
        return (
        	<div className={styles.content}>
        		{this.props.children}
        	</div>
        );
    }
}

export default Content;

