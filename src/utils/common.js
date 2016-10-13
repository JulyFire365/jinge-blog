
import { hashHistory } from 'react-router'
// fetch兼容处理
require('es6-promise').polyfill();
require('isomorphic-fetch');

class Common {
	constructor() {
		this.init();
	}
	init() { // 初始化操作
		this.setFontSize();
	}
	setFontSize() { // 设置字体大小
		function resetSize(){
			var max = 414;
			var htmlEle = document.querySelector("html");
			var windowWidth = document.documentElement.clientWidth > max ? max : document.documentElement.clientWidth;
			htmlEle.style.fontSize = parseInt(10 * windowWidth / max) + 'px';
		}
		resetSize();
		window.onresize=resetSize;
	}
	toFetch(requestJson){	// fetch方式请求，替代ajax请求方式
		var getApiInfo = this.getApiInfo();
		return fetch(getApiInfo.apiPath + requestJson.url)
		.then( response => {
	        if (response.status >= 400) {
	        	return new Promise(function(resolve, reject){
					resolve({
						code: 2,
						msg: '获取数据出错，状态码为：' + response.status
					})
	        	});
	        }else{
				return response.json()
	        }
	    })
		.then(function(result) {
			return new Promise( (resolve, reject) => {
				requestJson.callback(result);
				resolve(result);
			});
	    })
	    .catch(function(err) {
			requestJson.callback({
				code: 3,
				msg: '服务器请求失败。'
			});
	    });
	}
	getApiInfo(){	// api相关配置
		return {
			apiPath : '/dist/api/'	// 需要根据实际情况配置
		}
	}
	isCorrectRender(response){	// 判断fetch返回结果是否正确
		if( response && response.code == 0 ){
			return true;
		}else{
			return false;
		}
	}
	isResponseCorrect(response){	// 判断返回数据是否正确且不为空列表
		if (this.isCorrectRender(response)) {
			var datas = response.data.datas;
			if( datas && datas.length < 1 ){
				return false;
			}
			return true;
		}else{
			return false;
		}
	}
	goUrl(path){	// 跳转统一处理
		hashHistory.push(path);
	}
}

export default new Common();








