import React from 'react';
// 请求等待时的展示组件
class ResponseWaite extends React.Component {
    render() {
        return (
        	<div>
				{this.props.title} 正在加载……
        	</div>
        );
    }
}

export default ResponseWaite;

