const path = require('path');

module.exports = {
  mode: "production", 
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  performance: {
    maxEntrypointSize: 912000,
    maxAssetSize: 912000
  },
  devServer: {
    allowedHosts: 'auto',
    client: {
        overlay: true,
    },
    open: true,
    port: 8000,
    static: {
        directory: path.join(__dirname, 'dist'),
        publicPath: '/',
      },
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [  
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
    ],
  },
};