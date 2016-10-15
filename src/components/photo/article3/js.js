import React from 'react';
import Content from 'compDir/article/content/js';
import styles from 'compDir/article/css.css';
import currentStyles from '../css.css';
class ArticleDetail extends React.Component {
    render() {
        return (
   			<Content showNum={this.props.showNum} theId="3" title="昨日跆拳之旅" changeFn={this.props.changeFn.bind(this)}>
				<div className={styles.content}>
					<div className={currentStyles.photoContent}>
						<p><img src={require('./tkd.jpg')} /></p>
					</div>
				</div>
    		</Content>
        );
    }
}

export default ArticleDetail;

