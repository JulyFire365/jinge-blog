import React from 'react';
import Content from 'compDir/article/content/js';
import styles from 'compDir/article/css.css';
import currentStyles from '../css.css';
class ArticleDetail extends React.Component {
    render() {
        return (
   			<Content showNum={this.props.showNum} theId="4" title="装作很会抽烟的样子" changeFn={this.props.changeFn.bind(this)}>
				<div className={styles.content}>
					<div className={currentStyles.photoContent}>
						<p><img src={require('./yan.jpg')} /></p>
					</div>
				</div>
    		</Content>
        );
    }
}

export default ArticleDetail;

