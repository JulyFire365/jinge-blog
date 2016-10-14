import React from 'react';
import comm from 'commFile';
import ResponseErrorSwitch from 'compPublicDir/responseErrors/responseErrorSwitch';
// 列表为空时的展示组件
class List extends React.Component {
    render() {
    	let ulClass = this.props.ulClass || '';
    	let response = this.props.response;
    	// 通过tagName来判断是用ul还是div嵌入子组件
    	if( comm.isResponseCorrect(response) ){
    		var datas = response.data.datas;
    		// 如果是ul，则用ul嵌入子组件
            return (
                <ul className={ulClass}>
                    {
                        datas.map((item,index)=> React.cloneElement(this.props.children, {key:index,index:index,data:item}))
                    }
                </ul>
            );
    	}else{
    		return <ResponseErrorSwitch response={response} />
    	}
    }
}

export default List;

