const express = require("express");
const morgan = require("morgan");
const path = require("path");
const router = require("./router");
const { createProxyMiddleware } = require("http-proxy-middleware");
var cors = require("cors");

const PUBLIC_DIR = path.resolve(__dirname, "..", "public");
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.static(PUBLIC_DIR));

// Handling asset requests for webpack bundles by passing off requests to the bundles router
app.use("/bundles", router.bundles);
// Handling AJAX requests to the API by passing off requests to the api router
app.use("/api", router.api);

// app.use(
//   "/api/reviews",
//   createProxyMiddleware({
//     target: "http://localhost:3004",
//     changeOrigin: true,
//     // pathRewrite: {
//     //   "^/api/reviews": "",
//     // },
//   })
// );

// app.use(
//   "/api/questions",
//   createProxyMiddleware({
//     target: "http://localhost:3002",
//     changeOrigin: true,
//   })
// );
// app.use(
//   "/api/products/:product_id",
//   createProxyMiddleware({
//     target: "http://localhost:3001",
//     changeOrigin: true,
//   })
// );
// app.use(
//   "/api/overview",
//   createProxyMiddleware({
//     target: "http://localhost:3003",
//     changeOrigin: true,
//   })
// );

module.exports = app;
