import {React, ReactDOM, Router, Route, hashHistory, IndexRoute, Link} from 'libsComp';
import Header from '../header/js';
import styles from './css.css';
class AboutBlog extends React.Component {
    render() {
        return (
            <div>
                <article>
                    <Header title="关于本站"/>
                    <section className={styles.wraper}>
                        <h2>建站初衷</h2>
                        <p>我想可能每个前端人员，都有根据自己的想法搭建一套个人博客的想法。本人很早就有这样的想法，此前也断断续续完成了部分个人博客PC版的搭建。从规划，到设计，到具体编码，而后逐步调整，其实要达到自己满意的效果，还是挺耗时的。</p>
                        <p>本人PC端的程序就是一再延误，最后没耐心做下去了。这次正好有些时间，另外完成博客的搭建，也算是一个夙愿，所以在借鉴之前PC开发的基础上，完成了本次移动版博客的开发。还是花费了不少时间与精力的，算初步达到想要的效果了。</p>
                        <p>本程序还只算一个模板吧，还未能真正接入数据库，部分数据只是临时模拟。日后有机会，希望可以继续完善，达到真正上线与维护的目的。</p>
                        <h2>程序说明</h2>
                        <p>本网站主要是基于react及react-router完成的单页应用，数据部分采用fetch来模拟请求。具体应用知识点如下：</p>
                        <div className={styles.labels}>
                            <label>webapck</label><label>react</label><label>react-router</label><label>ES6</label><label>fetch</label><label>html5</label><label>css3</label>
                        </div>
                        <h2>源码地址</h2>
                        <p>本博客程序已共享到github，地址为：<a href="https://github.com/jinge1/jinge-blog.git" target="_blank">https://github.com/jinge1/jinge-blog.git</a>。</p>
                        <p>源码仅供个人参考，禁止任何商业用途。</p>
                        
                    </section>
                    <p className={styles.other}><Link to="/about/me">关于本人 >></Link></p>
                </article>
            </div>
        )
    }
}

export default AboutBlog;
