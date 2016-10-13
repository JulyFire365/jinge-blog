import React from 'react';
// 请求错误时的展示组件
class ResponseError extends React.Component {
    render() {
        return (
        	<div>
				{this.props.msg}
        	</div>
        );
    }
}

export default ResponseError;

