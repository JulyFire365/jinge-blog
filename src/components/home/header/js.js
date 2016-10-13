import React from 'react';
import Enhance from 'compPublicDir/enhance';
import Banner from '../banner/js';
import styles from './css.css';
class Header extends React.Component {
    render() {
        return (
            <div className={styles.header}>
            	<div className={styles.me}>
            		<img src={require('./me.jpg')} />
            	</div>
            	<div className={styles.bannerPositon}>
        			来首小诗，个性字体
        		</div>
            </div>
        );
    }
}

export default Enhance(Header);

