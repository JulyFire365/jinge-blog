import React from 'react';
import Content from '../content/js';
import styles from '../css.css';
class ArticleDetail extends React.Component {
    render() {
        return (
   			<Content showNum={this.props.showNum} theId="6" title="压轴好文" changeFn={this.props.changeFn.bind(this)}>
				<div className={styles.content}>	
					<p>笨蛋，没有了已经！</p>						
				</div>
				<p className={styles.time}><span>摘自jingeQQ空间</span><span>At 2015-3-7 21:17</span></p>
    		</Content>
        )
    }
}

export default ArticleDetail;

