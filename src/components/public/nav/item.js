import {React, ReactDOM, Router, Route, hashHistory, IndexRoute, Link} from 'libsComp';
class Item extends React.Component {
    render() {
    	// console.log('addclass',this.props);
        let data = this.props.data;
        let index = this.props.index;
        let isHome = index == 0 ? true : false;
        return (
	        <li><Link to={data.link} title={data.title} activeClassName="current" onlyActiveOnIndex={isHome}></Link></li>
        );
    }
}

export default Item;