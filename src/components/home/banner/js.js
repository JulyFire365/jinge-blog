import React from 'react';
import List from 'compPublicDir/list/list';
import Item from './item';
import styles from './css.css';
class Banner extends React.Component {
	constructor(){
		super();
		this.state = {
			showItem : 1
		}
	}
    render() {
        return (
            <div className={styles.bannerWraper}>
                <List response={this.props.response} tagName='ul'>
                    <Item showItem={this.state.showItem} />
                </List>
            </div>
        );
    }
}

export default Banner;
