const proxyConfig = {
  "/api": {
    target: "http://localhost:4300/",
    changeOrigin: true,
    secue: false
  }
}
module.exports = proxyConfig
