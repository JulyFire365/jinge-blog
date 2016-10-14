import React from 'react';
import Content from '../content/js';
import styles from '../css.css';
class ArticleDetail extends React.Component {
    render() {
        return (

   			<Content showNum={this.props.showNum} theId="4" title="颠倒不了世界 也颠倒不了自己" changeFn={this.props.changeFn.bind(this)}>
					<div className={styles.content}>
						<div className={styles.pome}>




	<p>大部分人要我相信 世界就是这模样</p>
<p>我睁大了眼睛 看来看去 怎么还是看不清</p>
<p>什么议论文、散文、记述文</p>
<p>我写我的思绪</p>
<p>哪来那么多条条框框</p>
<p className={styles.between}></p>
<p>匆匆忙忙 跌跌撞撞</p>
<p>又闯了几个红灯 又坐过了几个站</p>
<p>你一年一天好多借口 忘了好多路线还没走</p>
<p>在翻什么旧书</p>
<p>装什么装 我知道你早已看不下去</p>
<p className={styles.between}></p>
<p>你写你的文字</p>
<p>又何必在意 谁会读 谁又能懂</p>
<p>本就乱七八糟的思绪 又有什么好去理</p>
<p>果然还是无力</p>
<p>颠倒不了世界 也颠倒不了自己</p>
<p className={styles.between}></p>
<p>如果能重来</p>
<p>写写诗 作作画 是不是很酷</p>
<p>少去理会这世俗 沉静在想象 沉静在艺术</p>
<p>固然不能逃避</p>
<p>多一分自由的空间 是不是会少一些烦忧</p>
<p className={styles.between}></p>	
</div>			
					</div>
					<p className={styles.time}><span>摘自jinge订阅号</span><span>At 2016-08-05</span></p>
        		</Content>
        );
    }
}

export default ArticleDetail;

