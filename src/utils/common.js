
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
		var max = 414;
		var htmlEle = document.querySelector("html");
		var windowWidth = document.documentElement.clientWidth > max ? max : document.documentElement.clientWidth;
		htmlEle.style.fontSize = 10 * windowWidth / max + 'px';
	}
	toFetch(requestJson){	// fetch方式请求，替代ajax请求方式
		var getApiInfo = this.getApiInfo();
		fetch(getApiInfo.apiPath + requestJson.url).then(function(response) {
	        if (response.status >= 400) {
				requestJson.callback({
					code: 2,
					msg: '获取数据出错，状态码为：' + response.status
				})
	        }else{
				response.json().then(function(result) {	// 请求成功	0数据无误，1数据有误
					requestJson.callback(result);
				});
	        }
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








