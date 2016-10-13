import React from 'react';
import Wraper from 'compPublicDir/wraper/wraper';
// React root 组件
class App extends React.Component {
    render() {
        return (
        	<Wraper>
        		{this.props.children}
        	</Wraper>
        );
    }
}

export default App;

