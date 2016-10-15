import React from 'react';
import Enhance from 'compPublicDir/enhance/enhance';
import styles from './css.css';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow : false
        }
    }
    componentDidMount() {   // 实现动画效果
        if(!this.state.isShow){
            setTimeout(()=>{
                this.setState({
                    isShow : true
                });
            },0);
        }
    }
    render() {
        let poemClass = this.state.isShow ? styles.poem : '';
        return (
            <div className={styles.header}>
            	<div className={styles.me}>
            		<img src={require('./me.jpg')} />
            	</div>
            	<div className={styles.poemWraper}>
        			<ul className={poemClass}>
                        <li>
                            闭关多日，
                        </li>
                        <li>
                            不问世事。
                        </li>
                        <li>
                            佳作初成，
                        </li>
                        <li>
                            出山乱世。
                        </li>
                    </ul>
        		</div>
            </div>
        );
    }
}

export default Enhance(Header);

