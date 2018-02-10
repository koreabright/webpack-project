const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	context: '',    // 运行环境上下文, 一般都是根目录
	entry: './main.js',  // 入口文件, webpack从这里开始打包
	output: {  
		filename: 'js/[name].[hash].bundle.js',  // 打包出来的文件的名字(可以加hash)
		path: path.resolve(__dirname, '../web/') // 打包出来文件的路径, 新创建出的目录要用 __dirname (当前路径) 来指定
	},
	module: {
		rules: [
			{

			}
		]
	},
	plugins: [
		// 打包出来的js, 最终需要插入到index.html中, 因为js文件加了hash, 所以用这个插件, 动态插入index.html中
		new htmlWebpackPlugin({            // 该控件打包出来的 index.html 的路径会继承 output 中的 path
			filename: 'index.html', // 指定模板名字(可以加hash)
			template: 'src/index.html',    // 插入到哪个html中
			inject: 'head',
			// 向模板中传变量, 一下两个都是变量配置, 在模板中通过htmlWebpackPlugin.options.[变量名字]取值, 模板中ejs模板语法
			title: 'test title',
			data: 'test data'
		})
	],
	devtool: 'eval-source-map',
	devServer: {
		host: '0.0.0.0',
		port: '8000',
		proxy: {
			'/api/': {
				target: 'http://localhost:8888'
			}
		},
		hot: true,
		open: true
	}
}