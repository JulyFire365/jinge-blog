import List from 'compPublicDir/list';
import {React, ReactDOM, Router, Route, hashHistory, IndexRoute, Link} from 'libsComp';
class Item extends React.Component {
    render() {
        var data = this.props.data;
        return (
            <li>
                <h1><Link to={data.link}>{data.title}</Link></h1>
                <p>{data.description}</p>
                <p>{data.time}</p>
            </li>
        );
    }
}

export default Item;

