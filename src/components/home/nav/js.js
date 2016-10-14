import React from 'react';
import comm from 'commFile';
import List from 'compPublicDir/list/list';
import Item from './item';
import publicNavStyles from 'compPublicDir/nav/css.css';
import styles from './css.css';
class Nav extends React.Component {
	constructor(){
		super();
	}
    render() {
        return (
        	<nav className={styles.navWraper}>
	            <List response={this.props.response} ulClass={styles.list}>
                    <Item />
                </List>
        	</nav>
        );
    }
}

export default Nav;

