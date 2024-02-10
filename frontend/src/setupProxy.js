const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://192.168.56.1:4000 ", //wi-fi
      // target: "http://192.168.39.200:4000",

      // target: " http://192.168.0.175:4000 ", //mobile
      // target: "    http://192.168.158.42:4000      ", //new mobile
      // target: "http://192.168.230.42:4000  ", //pranav mobile
      // target: " http://192.168.0.154:4000  ", //college wifi
      // target: "  http://192.168.169.42:4000     ", //lab wifi
      // target: "  http://192.168.0.199:4000     ", //lab wifi
      // target: "  http://192.168.100.42:4000     ", //abhi mobile

      changeOrigin: true,
    })
  );
};
