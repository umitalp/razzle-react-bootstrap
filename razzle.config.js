const autoprefixer = require("autoprefixer");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  modify: (baseConfig, { target, dev }, webpack) => {
    const appConfig = Object.assign({}, baseConfig);

    // Setup SCSS
    if (target === "web") {
      const cssLoader = {
        loader: "css-loader",
        options: {
          minimize: !dev,
          sourceMap: dev,
          importLoaders: 1
        }
      };

      const postCSSLoader = {
        loader: "postcss-loader",
        options: {
          ident: "postcss", // https://webpack.js.org/guides/migrating/#complex-options
          sourceMap: dev,
          plugins: () => [
            autoprefixer({
              browsers: [
                ">1%",
                "last 4 versions",
                "Firefox ESR",
                "not ie < 9" // React doesn't support IE8 anyway
              ]
            })
          ]
        }
      };

      const sassLoader = {
        loader: "sass-loader",
        options: {
          sourceMap: dev
        }
      };

      if (dev) {
        // For development, include source map
        appConfig.module.rules.push({
          test: /.scss$/,
          use: ["style-loader", cssLoader, postCSSLoader, sassLoader]
        });
      } else {
        // For production, extract CSS
        appConfig.module.rules.push({
          test: /.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [cssLoader, postCSSLoader, sassLoader]
          })
        });
      }
    } else {
      appConfig.module.rules.push({
        test: /.scss$/,
        use: ["ignore-loader"]
      });
    }

    return appConfig;
  }
};