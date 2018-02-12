const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	context: '',    // 运行环境上下文, 一般都是根目录
	entry: './main.js',  // 入口文件, webpack从这里开始打包
	output: {  
		filename: 'js/[name].bundle.js',  // 打包出来的文件的名字(可以加hash)
		path: path.resolve(__dirname, '../web/'), // 打包出来文件的路径, 新创建出的目录要用 __dirname (当前路径) 来指定
		publicPath: '/'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	},
	module: {
		rules: [
			{
				test: /\.vue/,
				use: [
					{loader: 'vue-loader'}
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						query: {
							presets: ['es2015', 'react']
						}
					}
				]
			}
		]
	},
	plugins: [
		// 打包出来的js, 最终需要插入到index.html中, 因为js文件加了hash, 所以用这个插件, 动态插入index.html中
		new htmlWebpackPlugin({            // 该控件打包出来的 index.html 的路径会继承 output 中的 path
			filename: 'index.html', // 指定模板名字(可以加hash)
			template: 'src/index.html',    // 插入到哪个html中
			inject: 'body',
			// 向模板中传变量, 一下两个都是变量配置, 在模板中通过htmlWebpackPlugin.options.[变量名字]取值, 模板中ejs模板语法
			minify: {
				collapseInlineTagWhitespace: true, // 去掉空格
				collapseWhitespace: true,
				removeComments: true    // 删除备注
			}
		})
	],
	devtool: 'eval-source-map',
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		host: '0.0.0.0',
		port: '8000',
		historyApiFallback: true,

		proxy: {
			'/api/': {
				target: 'http://localhost:8888'
			}
		},
		open: true
	}
}