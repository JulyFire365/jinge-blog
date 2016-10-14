import React from 'react';
import styles from '../css.css';
class ArticleDetail extends React.Component {
	clickHandle(){
		let id = this.props.theId;
		if( this.props.showNum == this.props.theId ){
			id = 0;
		}
		this.props.changeFn(id);
	}
    render() {
    	let id = this.props.theId;
    	let showNum = this.props.showNum;
    	let displayClass = showNum == id ? styles.showAll : '';
        return (
        	<section className={styles.section}>
        		<article className={displayClass}>
					<header className={styles.title}>
						<h1 onClick={this.clickHandle.bind(this)}>{this.props.title}</h1>
					</header>
					{this.props.children}
        		</article>
        	</section>
        );
    }
}

export default ArticleDetail;

