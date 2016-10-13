import React from 'react';
import comm from 'commFile';
import Nav from 'compPublicDir/nav/js';
import ResponseErrorSwitch from 'compPublicDir/responseErrorSwitch';
class Content extends React.Component {
    render() {
    	var response = this.props.response;
        console.log('content render');
        console.log('content props:',this.props);
    	if( comm.isResponseCorrect(response) ){
 	        return (
				<div>
                    About
                    <Nav />
                </div>
	        );
    	}else{
    		return <ResponseErrorSwitch response = {response} />
    	}
    }
}

export default Content;
