import {React, ReactDOM, Router, Route, hashHistory, IndexRoute, Link, comm, Enhance} from 'commComp';
// 请求错误时的展示组件
class ResponseError extends React.Component {
    render() {
        return (
        	<div>
				{this.props.msg}
        	</div>
        );
    }
}

export default ResponseError;

