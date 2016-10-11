let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let autoprefixer = require('autoprefixer');
let TransferWebpackPlugin = require('transfer-webpack-plugin');
let path = require('path');
let src = path.resolve(__dirname, 'src');
let dist = path.resolve(__dirname, 'dist');
module.exports = {
	entry: {
		bundle: src + '/index.js', // 入口文件
		// 打包公共文件配置
		vendor: ['react', 'react-dom', 'react-router', src + '/utils/common', src + '/components/public/enhance']
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

			// commonComponents.js别名
			commComp: src + '/components/public/commonComponents.js'
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
		}, {
			test: /\.(css|sass)$/,
			loader: ExtractTextPlugin.extract("style-loader", "css-loader", "sass-loader")
		}, {
			test: /\.(png|jpe?g|gif)$/,
			loader: 'url',
			query: {
				limit: 1024
			}
		}],
		// 可忽略文件夹，加快发布速度
		// noParse: ['./utils','./public','./images']
	},
	// 自动添加css3前缀
	postcss: [autoprefixer],
	plugins: [
		// 提取公共js文件
		new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.js'),

		// 生成style.css文件
		new ExtractTextPlugin("style/style.css", {
			allChunks: true
		}),

		// 热替换
		new webpack.HotModuleReplacementPlugin(), // Dev only

		// 压缩打包的文件
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),

		// 允许错误不打断程序
		new webpack.NoErrorsPlugin(),

		//	根据模板插入css/js等生成最终HTML
		new HtmlWebpackPlugin({
			favicon: src + '/images/favicon.ico', //favicon路径
			filename: 'index.html', //生成的html存放路径，相对于 path
			template: src + '/index.html', //html模板路径
			inject: 'body', //允许插件修改哪些内容，包括head与body，或者true
			hash: true, //为静态资源生成hash值
			minify: { //压缩HTML文件
				removeComments: true, //移除HTML中的注释
				// collapseWhitespace:false    //删除空白符与换行符
			}
		}),

		//把指定文件夹下的文件复制到指定的目录，有问题，无效
		// new TransferWebpackPlugin([{
		// 	from: src + '/data/'
		// }], dist + '/data/')

	],
	devtool: 'eval-source-map', //	Dev only,配置生成Source Maps，隐射源文件位置
	// Dev only,本地服务器配置
	devServer: {
		contentBase: '', //静态资源的目录 相对路径,相对于当前路径 默认为当前config所在的目录
		devtool: 'eval',
		hot: true, //自动刷新
		inline: true,
		port: 8888
	}

}