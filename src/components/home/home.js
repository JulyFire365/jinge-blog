import {React, ReactDOM, Router, Route, hashHistory, IndexRoute, Link, comm, Enhance} from 'commComp';
import Banner from './banner/banner';
import Nav from './nav/nav';
import Recommend from './recommend/recommend';

class Home extends React.Component {
	constructor(){
		super();
		this.state = {
			banner : {
				config  :{
					url : '../data/homeBanner.json'
				}
			},
			nav : {
				config  :{
					url : '../data/homeNav.json'
				}
			},
			recommend : {
				config  :{
					url : '../data/homeRecommend.json'
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
        		<Banner response={this.state.banner.response} />
        		<Nav response={this.state.nav.response} />
        		<Recommend response={this.state.recommend.response} />
        	</div>
        );
    }
}

export default Home;


