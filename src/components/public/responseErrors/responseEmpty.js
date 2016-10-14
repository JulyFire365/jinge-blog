import React from 'react';
// 列表为空时的展示组件
class ResponseEmpty extends React.Component {
    render() {
        return (
        	<div>
				暂无{this.props.title}数据!
        	</div>
        );
    }
}

export default ResponseEmpty;

