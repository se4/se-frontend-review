module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000/',
        // target: 'http://192.168.0.233:8080/',
        // target: 'http://172.19.184.142:8080/',
        ws: true,
        changeOrigin: true
      }
    },
    clientLogLevel: 'info',
    watchOptions: {
      poll: true,
      ignored: /mock/
    }
  }
  // configureWebpack: {
  //   devtool: 'source-map'
  // }
};
