const proxy = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(proxy("*", { target: "http://localhost:4000" }));
};
// this code will setup proxy, automatically
