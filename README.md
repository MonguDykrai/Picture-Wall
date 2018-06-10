# README

## React的基本使用

- 安装：npm i react react-dom
- react: react是React库的入口点
- react-dom：提供了针对DOM的方法，比如：把创建的虚拟DOM，渲染到页面上

## 开发依赖

npm i -D webpack@3.10.0 webpack-dev-server@2.11.1 html-webpack-plugin style-loader css-loader url-loader file-loader babel-core babel-loader babel-preset-env babel-preset-stage-2

## JSX 的基本使用

- 注意：JSX语法，最终会被编译为 createElement() 方法
- 推荐：**使用 JSX 的方式创建组件**

- JSX - JavaScript XML
- 安装：`npm i -D babel-preset-react` （依赖与：babel-core/babel-loader）
> 注意：JSX的语法需要通过 babel-preset-react 编译后，才能被解析执行

```js
/* 1 在 .babelrc 开启babel对 JSX 的转换 */
{
  "presets": [
    "env", "react"
  ]
}

/* 2 webpack.config.js */
module: [
  rules: [
    { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
  ]
]

/* 3 在 js 文件中 使用 JSX */
const dv = (
  <div title="标题" className="cls container">Hello JSX!</div>
)

/* 4 渲染 JSX 到页面中 */
ReactDOM.render(dv, document.getElementById('app'))
```