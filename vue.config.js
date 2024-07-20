module.exports = {
  devServer: {
    host: "127.0.0.1",
    port: 8083,
    proxy: {
      "/api": {
        target: "http://localhost:3000", // 要跨域的域名
        changeOrigin: true, // 是否开启跨域
        pathRewrite: {
          //重写路径
          // "^/api": "/api", // 这种接口配置出来     http://XX.XX.XX.XX:8083/api/login
        },
      },
      "/gpt": {
        target: "http://localhost:8085", // 要跨域的域名
        changeOrigin: true, // 是否开启跨域
        pathRewrite: {
          //重写路径
          "^/gpt": "", // 这种接口配置出来     http://XX.XX.XX.XX:8083/api/login
        },
      },
      // "/getPdf": {
      //   target: "http://localhost:8081", // 要跨域的域名
      //   changeOrigin: true, // 是否开启跨域
      // },
    },
  },
  // configureWebpack: (config) => {
  //   //调试JS
  //   // config.devtool = "eval-source-map"
  // },
  // configureWebpack: (config) => {
  //   // 引入uglifyjs - webpack - plugin
  //   let UglifyPlugin = require("uglifyjs-webpack-plugin")
  //   if (process.env.NODE_ENV == "production") {
  //     // 为生产环境修改配置
  //     config.mode = "production"
  //     config.devtool = "source-map"
  //     // 将每个依赖包打包成单独的js文件
  //     //webpack.config.js
  //     let optimization = {
  //       minimizer: [
  //         new UglifyPlugin({
  //           uglifyOptions: {
  //             warnings: false,
  //             compress: {
  //               drop_console: true,
  //               drop_debugger: true,
  //               pure_funcs: ["console.log"],
  //             },
  //           },
  //         }),
  //       ],
  //     }
  //     Object.assign(config, {
  //       optimization,
  //     })
  //   } else {
  //     // 为开发环境修改配置
  //     config.mode = "development"
  //   }
  // },
}
