import {React, ReactDOM, Router, Route, hashHistory, IndexRoute, Link, comm, Enhance} from 'commComp';
import App from 'compPublicDir/App'
import About from 'compDir/about/about'
import Home from 'compDir/home/home'
import ArticleList from 'compDir/articleList/articleList'
import ArticleDetail from 'compDir/articleDetail/articleDetail'
import Photo from 'compDir/photo/photo'
// 项目路由组件，Home为默认根目录组件
ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path= '/articleList' component={ArticleList} />
			<Route path= '/articleDetail:id' component={ArticleDetail} />
			<Route path= '/photo' component={Photo} />
			<Route path= '/about' component={About} />
	  	</Route>
	</Router> 
), document.getElementById('root'));

