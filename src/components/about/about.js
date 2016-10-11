import {React, ReactDOM, Router, Route, hashHistory, IndexRoute, Link, comm, Enhance} from 'commComp';
import Content from './content/content';
class About extends React.Component {
	constructor(){
		super();
		this.state = {
			config  :{
				url : '../data/homeNav.json'
			}
		};
	}
	componentDidMount(){
		let states = this.state;
		comm.toFetch({
			url : states.config.url,
			callback : (result)=>{
				states.response = result;
				this.setState(states);
			}
		});
	}
    render() {
        return (
        	<Content response={this.state.response} />
        );
    }
}

export default About;

