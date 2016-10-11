import {React, ReactDOM, Router, Route, hashHistory, IndexRoute, Link, comm, Enhance} from 'commComp';
// React root 组件
class App extends React.Component {
    render() {
        return (
        	<div>
				{this.props.children}
        	</div>
        );
    }
}

export default App;

