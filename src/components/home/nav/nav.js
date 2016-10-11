import {React, ReactDOM, Router, Route, hashHistory, IndexRoute, Link, comm, Enhance} from 'commComp';
class HomeNav extends React.Component {
    render() {
        return (
            <ul role="nav">
              <li><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/photo">Photo</Link></li>
              <li><Link to="/articleList">ArticleList</Link></li>
            </ul>
        );
    }
}

export default HomeNav;

