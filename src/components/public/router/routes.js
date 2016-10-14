import {React, ReactDOM, Router, Route, hashHistory, IndexRoute, Link} from 'libsComp';
import App from 'compPublicDir/App'
import Home from 'compDir/home/home'
import Article from 'compDir/article/article'
import Photo from 'compDir/photo/photo'
import Code from 'compDir/code/code'
import About from 'compDir/about/about';
import AboutBlog from 'compDir/about/aboutBlog/js';
import AboutMe from 'compDir/about/aboutMe/js';
// 项目路由组件，Home为默认根目录组件
ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path= '/home' component={Home} />
			<Route path= '/article' component={Article} />
			<Route path= '/photo' component={Photo} />
			<Route path= '/code' component={Code} />
			<Route path= '/about' component={About}>
				<IndexRoute component={AboutBlog} />
				<Route path= '/about/blog' component={AboutBlog} />
				<Route path= '/about/me' component={AboutMe} />
			</Route>
	  	</Route>
	</Router> 
), document.getElementById('root'));

