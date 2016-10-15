import React from 'react';
import Content from 'compPublicDir/content/js';
import Article1 from './article1/js';
import Article2 from './article2/js';
import Article3 from './article3/js';
import Article4 from './article4/js';
import Article5 from './article5/js';
import Article6 from './article6/js';
import Header from './header/js';
import styles from './css.css';
class Article extends React.Component {
	constructor(){
		super();
		this.state = {
			showNum :0
		};
	}
	changeFn(num=0){
		this.setState({
			showNum : num
		});
	}
    closeAll(){
        this.changeFn(0);
    }
    render() {
    	var closeAllClass = this.state.showNum == 0 ? styles.hideCloseAll : styles.showCloseAll;
        return (
        	<Content>
        		<Header title="随笔写写写"/>
        		<Article5 showNum={this.state.showNum} changeFn={this.changeFn.bind(this)} />
        		<Article1 showNum={this.state.showNum} changeFn={this.changeFn.bind(this)} />
        		<Article2 showNum={this.state.showNum} changeFn={this.changeFn.bind(this)} />
        		<Article3 showNum={this.state.showNum} changeFn={this.changeFn.bind(this)} />
                <Article4 showNum={this.state.showNum} changeFn={this.changeFn.bind(this)} />
        		<Article6 showNum={this.state.showNum} changeFn={this.changeFn.bind(this)} />
        		<div className={closeAllClass} onClick={this.closeAll.bind(this)}>⇪</div>
        	</Content>
        );
    }
}

export default Article;

