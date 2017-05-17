# Webpack 101

<a href='https://ko-fi.com/A01511WO' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi5.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

This is my note about setting up [webpack 2](https://webpack.js.org/) for [React](https://facebook.github.io/react/) project

These are the tools I will use to setup my project:
- [Node js](https://nodejs.org/en/) (v7.10.0)
- [Yarn](https://yarnpkg.com/en/) (v0.24.5)


1. Create a new project
```bash
mkdir webpack-101
cd webpack-101
```
2. Initialize the project
```bash
yarn init
```
3. Install Webpack
```bash
yarn add -D webpack
```
4. In terminal
```bash
# for development build
webpack -d ./src/app.js ./dist/app.bundle.js
# for production build
webpack -p ./src/app.js ./dist/app.bundle.js
```

To be continue...
