module.exports = {
  outputDir: 'www',
  pages: {
    index: {
      // webpack 编译时，编译 entry 的 js 文件，并且读取 template 的 html 文件。
      // 合并在一起，输出为 filename 的文件

      // page 的入口
      entry: 'src/index/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '首页',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index', 'subpage']//对应页面需要引入的js
    },
    // index: 'src/index/main.js',

    setting: {
      entry: 'src/setting/main.js',
      template: 'public/setting.html',
      filename: 'setting.html',
      title: '设置',
      chunks: ['chunk-vendors', 'chunk-common', 'setting', 'subpage']
    },
    // setting: 'src/setting/main.js',


    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。

    subpage: 'src/subpage/main.js',

    /*subpage: {
      entry: 'src/subpage/main.js',
      template: 'public/subpage.html'||'public/index.html',
      filename: 'subpage.html',
      chunks: ['chunk-vendors', 'chunk-common', 'subpage']
    }*/
  },

  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 1314
  }
}