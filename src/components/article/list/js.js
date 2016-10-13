import {React, ReactDOM, Router, Route, hashHistory, IndexRoute, Link} from 'libsComp';
import comm from 'commFile';
import Article from '../article';
class ArticleList extends React.Component {
    render() {
    	console.log('ArticleList');
        return (
        	<Article>
				<ul>
                  <li><Link to="/article/detail:1">articleDetail 1</Link></li>
                  <li><Link to="/article/detail:2">articleDetail 2</Link></li>
			    </ul>
        	</Article>
        );
    }
}

export default ArticleList;

