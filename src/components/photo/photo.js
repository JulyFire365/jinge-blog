import React from 'react';
import comm from 'commFile';
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

