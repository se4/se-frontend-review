module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:4000/",
        // target: "http://172.19.159.36:8080/",
        // target: "http://172.17.19.191:8080/",
        // target: "http://172.19.191.220:8080/",
        ws: true,
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    devtool: "#eval-source-map"
  }
};
