import {React, ReactDOM, Router, Route, hashHistory, IndexRoute, Link, comm, Enhance} from 'commComp';
import ResponseEmpty from './responseEmpty';
import ResponseError from './responseError';
import ResponseWaite from './responseWaite';
// 选择错误分支的组件
class ResponseErrorSwitch extends React.Component {
    render() {
		let response = this.props.response;
		let title = this.props.title || '';
    	if(response){
    		if( response.code == 0 && response.data){
    			let datas =  response.data.datas;
    			if( datas && datas.length < 1 ){
			        return <ResponseEmpty title={title} />
    			}else{
    				console.log('Error! Response is correct in responseErrorSwitch!')
    			}
    		}else{
    			return <ResponseError msg={response.msg} />
    		}
    	}else{
    		return <ResponseWaite title={title} />
    	}
    }
}

export default ResponseErrorSwitch;

