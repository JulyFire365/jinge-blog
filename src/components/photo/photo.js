import React from 'react';
import comm from 'commFile';
import Content from 'compPublicDir/content/js';
import Header from './header/js';
class Photo extends React.Component {
	handleClick(){
		comm.goUrl('/');
	}
    render() {
    	console.log('Photo');
        return (
            <Content>
                <Header />
				<div onClick={this.handleClick.bind(this)}>Photo</div>
        	</Content>
        );
    }
}

export default Photo;

