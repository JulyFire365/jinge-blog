let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let autoprefixer = require('autoprefixer');
var CopyWebpackPlugin = require('copy-webpack-plugin');

// 源文件目录
let src = __dirname + '/src';
// 发布目录
let dist = __dirname + '/dist';


module.exports = {
	entry: {
		bundle: src + '/index.js', // 入口文件
		// 打包公共文件配置
		vendor: ['react', 'react-dom', 'react-router']
	}, // 入口文件
	output: {
		path: dist, //	输出路径
		publicPath: "/", // 生产环境路径，可根据实际情况配置cdn
		filename: 'js/bundle.js' // 编译后的入口文件名
	},
	resolve: { // import文件时不带文件扩展名的表达式
		extensions: ['', '.js', '.jsx'],
		// 定义别名
		alias: {
			// react组件目录
			compDir: src + '/components',

			// 公共组件目录
			compPublicDir: src + '/components/public',

			// 公共工具目录
			utilsDir: src + '/utils',

			// libsComponents.js别名
			libsComp: src + '/components/public/libsComponents.js',

			// common.js别名
			commFile: src + '/utils/common.js'
		}
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/, // 排除nodejs文件路径
			loader: 'babel', //	ES6 编译
			query: {
				presets: ['es2015', 'react']
			}
		}, 
		{
			test: /\.css$/,
			loader: ExtractTextPlugin.extract("style","css?modules&localIdentName=[name]__[local]-[hash:base64:5]!postcss")
		}, 
		{
			test: /\.(png|jpg)$/, 
      		loader: 'url?limit=8000&name=images/[name].[ext]'
		}],
		// 可忽略文件夹，加快发布速度
		// noParse: ['./utils','./public','./images']
	},
	postcss:[autoprefixer({browsers:['last 2 versions']})],
	plugins: [
		// 提取公共js文件
		new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.js'),

		// 生成style.css文件
		new ExtractTextPlugin("style/style.css", {
			allChunks: true
		}),


		// 压缩打包的文件
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),

		// 允许错误不打断程序
		new webpack.NoErrorsPlugin(),

		//	自动成成html文件
		new HtmlWebpackPlugin({
			favicon: src + '/favicon.ico', //favicon路径
			filename: 'index.html', //生成的html存放路径，相对于path
			template: src + '/index.html', //html模板路径
			inject: 'body', //允许插件修改哪些内容，包括head与body，或者true
			hash: true, //为静态资源生成hash值
			minify: { //压缩HTML文件
				removeComments: true, //移除HTML中的注释
				// collapseWhitespace:false    //删除空白符与换行符
			}
		}),

		// 消除webpack压缩警告
		new webpack.DefinePlugin({
		  "process.env": { 
		     NODE_ENV: JSON.stringify("production") 
		   }
		}),

	   //把src/api目录中的文件复制到dist/api目录中
	    new CopyWebpackPlugin([{
	    	toType : 'dir',
    		from: src + '/api',
    		to : dist + '/api'
		}]),

		// 热替换
		new webpack.HotModuleReplacementPlugin() // Dev only
		
	],
	devtool: 'eval-source-map', //	Dev only,配置生成Source Maps，隐射源文件位置
	
	// Dev only,本地服务器配置
	devServer: {
		contentBase: dist, //静态资源的目录 相对路径,相对于当前路径 默认为当前config所在的目录
		devtool: 'eval',
		hot: true, //自动刷新
		inline: true,
		port: 8888
	}

}