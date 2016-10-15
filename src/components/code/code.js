import React from 'react';
import Content from 'compPublicDir/content/js';
import Article1 from './article1/js';
import Header from './header/js';
import styles from 'compDir/article/css.css';
class Code extends React.Component {
    constructor(){
        super();
        this.state = {
            showNum :1
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
        		<Header title="前端技术交流"/>
                <Article1 showNum={this.state.showNum} changeFn={this.changeFn.bind(this)} />
                <div className={closeAllClass} onClick={this.closeAll.bind(this)}>⇪</div>
        	</Content>
        );
    }
}

export default Code;

