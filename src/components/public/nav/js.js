import React from 'react';
import comm from 'commFile';
import List from 'compPublicDir/list/list';
import Item from './item';
import styles from './css.css';
class Nav extends React.Component {
	constructor(){
		super();
		this.state = {
			isShowNav : false,
			config  :{
				url : 'nav.json'
			}
		};
	}
	clickHandle(){
		this.setState({
			isShowNav : !this.state.isShowNav
		});
		this.autoHide();
	}
	autoHide(){
		clearTimeout(this.timeout);
		this.timeout = setTimeout(()=>{
			if( this.state.isShowNav ){
				this.clickHandle();
			}
		}, 3000);
	}
	componentDidMount(){
		comm.toFetch({
			url : this.state.config.url,
			callback : (result)=>{
				this.setState({
					response : result
				});
			}
		});
	}
    render() {
    	let showFlg = this.state.isShowNav ? styles.showWraper : '';
        return (
        	<nav className={showFlg}>
        		<div className={styles.wraper}>
	        		<div className={styles.menu} onClick={this.clickHandle.bind(this)}></div>
		            <List response={this.state.response} ulClass={styles.list}>
	                    <Item showItem={this.state.showItem} />
	                </List>
                </div>
        	</nav>
        );
    }
}

export default Nav;

