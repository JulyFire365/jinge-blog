import {React, ReactDOM, Router, Route, hashHistory, IndexRoute, Link} from 'libsComp';
import App from 'compPublicDir/App'
import About from 'compDir/about/about'
import Home from 'compDir/home/home'
import Article from 'compDir/article/article'
import ArticleList from 'compDir/article/list/js'
import ArticleDetail from 'compDir/article/detail/js'
import Photo from 'compDir/photo/photo'
import Code from 'compDir/code/js'
// 项目路由组件，Home为默认根目录组件
ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path= '/article' component={Article}>
				<IndexRoute component={ArticleList} />
				<Route path= '/article/list' component={ArticleList} />
				<Route path= '/article/detail:id' component={ArticleDetail} />
			</Route>
			<Route path= '/photo' component={Photo} />
			<Route path= '/code' component={Code} />
			<Route path= '/about' component={About} />
			<Route path= '/articleDetail:id' component={ArticleDetail} />
	  	</Route>
	</Router> 
), document.getElementById('root'));

