require("./check-versions")()

process.env.NODE_ENV = "production"

var debug = require("debug")("ciris:webpack/build.js");
var rm = require("rimraf")
var path = require("path")
var chalk = require("chalk")
var webpack = require("webpack")
var config = require("../config")
var webpackConfig = require("./webpack.prod.conf")

debug("building for production...");

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    debug("build finished");
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + "\n\n")

    if (stats.hasErrors()) {
      debug("  Build failed with errors.\n");
      process.exit(1)
    }

    debug("  Build complete.\n");
    debug(
      "  Tip: built files are meant to be served over an HTTP server.\n" +
      "  Opening index.html over file:// won\"t work.\n"
    );
  })
})
