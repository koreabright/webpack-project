## ERROR in ./src/views/Test.vue
Module build failed: SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode(打包失败)
### 升级 node 到版本6 

## ERROR in ./src/views/Test.vue
Module build failed: Error: Cannot find module 'vue-template-compiler'(打包失败)
### 要安装 "vue-template-compiler" 这个依赖

## ERROR in multi (webpack)-dev-server/client?http://0.0.0.0:8000 ./main.js
Module not found: Error: Can't resolve 'babel' in '/Users/hanshuang/Documents/playing/webpack_project'
BREAKING CHANGE: It's no longer allowed to omit the '-loader' suffix when using loaders.
                 You need to specify 'babel-loader' instead of 'babel',
                 see https://webpack.js.org/guides/migrating/#automatic-loader-module-name-extension-removed(打包失败)
### 尝试1: 把 babel 改成 babel-loader

## [BABEL] Note: The code generator has deoptimised the styling of "/Users/hanshuang/Documents/playing/webpack_project/node_modules/lodash/lodash.js" as it exceeds the max of "500KB".(打包成功, 但是终端中有白色字的提示)
### webpack 的loader 用 use 的方式来写

## [Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build. (打包成功, 但是浏览器中报错)
### webpack 配置中加入
resolve: {
	alias: {
		'vue': 'vue/dist/vue.js'
	}
}

## geivue挂在dom的时候, 始终找不到dom元素
### 原因是, html-webpack-plugin 的 inject 属性, 把 js 注入到了 head 里面, 导致js执行的时候, dom 元素还不存在
