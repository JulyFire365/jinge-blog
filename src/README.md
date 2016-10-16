jinge blog  
version 1.0.0  
author jinge  
create time 2016-10-11  

项目目录说明
├── /components/            # React组件目录  
├── 		/router/        # 路由组件目录  
├── 		/public/        # 公共组件目录  
├── /public/                # 全局静态样式文件  
├── /utils/                 # 工具类和方法  
├── /index.js               # 项目入口文件  
├── /index.html             # 静态模板文件  

温馨提示：
若需在本地运行请先修改./utils/common.js文件中的getApiInfo方法，如下
return {
	apiPath : '/dist/api/'	// 需要根据实际情况配置
}