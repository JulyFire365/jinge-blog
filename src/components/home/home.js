import React from 'react';
import comm from 'commFile';
import Recommend from './recommend/recommend';
import Header from './header/js';
import Nav from './nav/js';
import Content from 'compPublicDir/content/js';
class Home extends React.Component {
	constructor(){
		super();
		this.state = {
			nav : {
				config  :{
					url : 'nav.json'
				}
			},
			recommend : {
				config  :{
					url : 'recommend.json'
				}
			}
		};
	}
	componentDidMount(){
		let states = this.state;
		for( let key in states ){
			if( states[key].config ){
				comm.toFetch({
					url : states[key].config.url,
					callback : (result)=>{
						states[key].response = result;
						this.setState(states);
					}
				});
			}
		}
	}
    render() {
        return (
        	<div>
        		<Header />
        		<Content>
        			<Nav response={this.state.nav.response}/>
        			<Recommend response={this.state.recommend.response}/>
        		</Content>
        	</div>
        );
    }
}

export default Home;


