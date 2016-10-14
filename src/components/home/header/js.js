import React from 'react';
import Enhance from 'compPublicDir/enhance/enhance';
import Banner from '../banner/js';
import styles from './css.css';
class Header extends React.Component {
    render() {
        return (
            <div className={styles.header}>
            	<div className={styles.me}>
            		<img src={require('./me.jpg')} />
            	</div>
            	<div className={styles.poemWraper}>
        			<ul className={styles.poem}>
                        <li>
                            窥镜镜窥己，
                        </li>
                        <li>
                            生命何意义？
                        </li>
                        <li>
                            人人学机器，
                        </li>
                        <li>
                            荒唐不荒唐。
                        </li>
                    </ul>
        		</div>
            </div>
        );
    }
}

export default Enhance(Header);

