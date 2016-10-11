import {React, ReactDOM, Router, Route, hashHistory, IndexRoute, Link, comm, Enhance} from 'commComp';
class ArticleList extends React.Component {
    render() {
    	console.log('ArticleList');
        return (
        	<div>
				<ul>
			      <li><Link to="/articleDetail:1">articleDetail 1</Link></li>
			      <li><Link to="/articleDetail:2">articleDetail 2</Link></li>
			    </ul>
        	</div>
        );
    }
}

export default ArticleList;

