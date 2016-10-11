import {React, ReactDOM, Router, Route, hashHistory, IndexRoute, Link, comm, Enhance} from 'commComp';
import ResponseErrorSwitch from 'compPublicDir/responseErrorSwitch';
class HomeBanner extends React.Component {
    render() {
    	var response = this.props.response;
    	if( comm.isResponseCorrect(response) ){
 	        return (
				<ul>
					{
					 	response.data.datas.map((item,index)=><li key={item.id}>{item.title}</li>)
				 	}
				</ul>
	        );
    	}else{
    		return <ResponseErrorSwitch response = {response} />
    	}
    }
}

export default Enhance(HomeBanner);
