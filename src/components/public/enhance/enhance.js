import React from 'react';
import comm from 'utilsDir/common';
// 高阶组件，用于封装组件的公共处理程序
let Enhance = ComposedComponent => class extends React.Component {
    componentWillReceiveProps(nextProps){
        if( !nextProps || !nextProps.response){
            return false;
        }
        let renderFlg = comm.isCorrectRender(nextProps.response);
        this.setState({
            isCorrectRender : renderFlg
        });
    }
    shouldComponentUpdate(nextProps){    // 避免重复渲染
        return this.state ? !this.state.isCorrectRender : true;
    }
    render() {
        return <ComposedComponent {...this.props} {...this.state} />;
    }
};

export default Enhance;