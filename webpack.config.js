const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/app.js",
  output: {
    path: path.join(__dirname, '/public'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', `react`]
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};




// const webpack = require('webpack');
// const LiveReloadPlugin = require('webpack-livereload-plugin');

// module.exports = {
//   entry: ["./frontend/App.js"],
//   output: {
//     path: __dirname + "/front/bundle",
//     filename: "bundle.js",
//     devtoolModuleFilenameTemplate: '[resourcePath]',
//     devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
//   },
//   module: {
//     loaders: [
//       {
//         test: [/\.jsx?$/, /\.js?$/],
//         exclude: /(node_modules)/,
//         loader: 'babel',
//         query: {
//           presets: ['es2015', 'react']
//         }
//       }
//     ]
//   },
//   devtool: 'source-map',
//   resolve: {
//     extensions: ["", ".js", ".jsx" ]
//   },
//   plugins: [
//     new LiveReloadPlugin()
//   ]
// };