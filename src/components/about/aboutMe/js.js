import {React, ReactDOM, Router, Route, hashHistory, IndexRoute, Link} from 'libsComp';
import styles from './css.css';
import Header from '../header/js';
class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            secretFlg : false 
        }
    }
    changeSecret(){
        this.setState({
            secretFlg : !this.state.secretFlg
        });
    }
    render() {
        var sectretStr = this.state.secretFlg ? '能告诉你么？' : '************';
        return (
            <div>
                <article>
                    <Header title="关于本人"/>
                    <section className={styles.wraper}>
                        <p><img src={require('./me.png')} /></p>
                        <h2>本人概述</h2>
                        <p>职业：码农</p>
                        <p>爱好：如果非要在写代码与写作中选一样，那一定是旅游了。</p>
                        <p>三围：<span onClick={this.changeSecret.bind(this)}>{sectretStr}</span></p>

                        <h2>联系方式</h2>
                        <p>qq：346959251</p>
                        <p>个人主页：<a href="http://203.195.148.208" target="_blank">http://203.195.148.208</a></p>
                        <p>GitHub Name : jinge1</p>
                        <p className={styles.hadImgP}>订阅号：<img src={require('./qrcode.jpg')} /></p>
                        

                    </section>
                    <p className={styles.other}><Link to="/about/blog">关于本站 >></Link></p>
                </article>
            </div>
        )
    }
}

export default AboutMe;
