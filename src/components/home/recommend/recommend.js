import React from 'react';
import List from 'compPublicDir/list';
import Item from './item';
import styles from './recommend.css';
class HomeRecommend extends React.Component {
    render() {
        return (
        	<div className={styles.recommend}>
        		<div className={styles.title}>
        			<h1>精选推荐</h1>
        		</div>
        		<div className={styles.item}>
    	        	<List response={this.props.response} ulClass={styles.list}>
    	        		<Item />
    				</List>
                </div>
			</div>
        );
    }
}

export default HomeRecommend;

