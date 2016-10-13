import React from 'react';
class Article extends React.Component {
    render() {
        return (
        	<div>
        		{this.props.children}
        	</div>
        );
    }
}

export default Article;

