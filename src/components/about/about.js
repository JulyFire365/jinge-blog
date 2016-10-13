import React from 'react';
import comm from 'commFile';
import Content from './content/content';
class About extends React.Component {
	constructor(){
		super();
		this.state = {
			config  :{
				url : 'homeNav.json'
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

