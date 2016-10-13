import {React, ReactDOM, Router, Route, hashHistory, IndexRoute, Link} from 'libsComp';
class Item extends React.Component {
    render() {
        var data = this.props.data;
        let index = this.props.index;
        return (
            <li>
                <Link to={data.link}><img src={data.imgUrl} /></Link>
            </li>
        );
    }
}

export default Item;

