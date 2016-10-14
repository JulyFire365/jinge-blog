import React from 'react';
import Content from 'compPublicDir/content/js';
class About extends React.Component {
    render() {
        return (
    		<Content>
    			{this.props.children}
    		</Content>
        );
    }
}

export default About;

