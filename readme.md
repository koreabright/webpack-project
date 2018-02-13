 ERROR in ./src/views/Test.vue
Module build failed: SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode(打包失败)
--> 升级 node 到版本6 

ERROR in ./src/views/Test.vue
Module build failed: Error: Cannot find module 'vue-template-compiler'(打包失败)
--> 要安装 "vue-template-compiler" 这个依赖

ERROR in multi (webpack)-dev-server/client?http://0.0.0.0:8000 ./main.js
Module not found: Error: Can't resolve 'babel' in '/Users/hanshuang/Documents/playing/webpack_project'
BREAKING CHANGE: It's no longer allowed to omit the '-loader' suffix when using loaders.
                 You need to specify 'babel-loader' instead of 'babel',
                 see https://webpack.js.org/guides/migrating/#automatic-loader-module-name-extension-removed(打包失败)
--> 尝试1: 把 babel 改成 babel-loader

[BABEL] Note: The code generator has deoptimised the styling of "/Users/hanshuang/Documents/playing/webpack_project/node_modules/lodash/lodash.js" as it exceeds the max of "500KB".(打包成功, 但是终端中有白色字的提示)
--> webpack 的loader 用 use 的方式来写

[Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build. (打包成功, 但是浏览器中报错)
--> webpack 配置中加入
resolve: {
	alias: {
		'vue': 'vue/dist/vue.js'
	}
}

geivue挂在dom的时候, 始终找不到dom元素
--> 原因是, html-webpack-plugin 的 inject 属性, 把 js 注入到了 head 里面, 导致js执行的时候, dom 元素还不存在

routerConfig 配置好之后, 在地址栏里直接输入路径, 报错找不到路径 404 
--> 原因是vueRouter 里面配置的mode: history 的时候, 要在webpack的配置中, devServer 里面 加上 historyApiFallback: true

路由跳转之后, 找不到打包的js文件了
--> 原因是output 里面的 publicPath, 值要为'/', 之前 publicPath 为空, 导致静态资源找不到

ERROR in ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-31a768e4","scoped":true,"sourceMap":true}!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/views/Layout.vue
--> 安装less 和 less-loader , 并且给less文件添加less-loader

mock数据找不到
--> edp-webserver-config 中, 这条匹配放在最后面
{
    location: /^.*$/,
    handler: [
        file(),
        proxyNoneExists()
    ]
}
