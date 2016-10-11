import {React, ReactDOM, Router, Route, hashHistory, IndexRoute, Link, comm, Enhance} from 'commComp';
class Photo extends React.Component {
	handleClick(){
		comm.goUrl('/');
	}
    render() {
    	console.log('Photo');
        return (
        	<div>
				<div onClick={this.handleClick.bind(this)}>Photo</div>
        	</div>
        );
    }
}

export default Photo;

