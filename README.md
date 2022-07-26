# rollup 开发 npm 包的模板项目(Babel+TS+ESLint)

## 为什么不使用 @babel/preset-typescript 而是 @rollup/plugin-typescript

@babel/preset-typescript 只是将 TS 转 JS, @rollup/plugin-typescript 不仅将 TS 转 JS 还可以生成声明文件, 这对于 npm 包来说是很重要的
