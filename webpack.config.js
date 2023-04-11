const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/img/[name][ext][query]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html',
      filename: './index.html',
      favicon: './src/assets/favicons/favicon.png',
    }),
    new CleanWebpackPlugin(),
    new ESLintPlugin({
      extensions: ['.tsx', '.ts', '.js'],
      exclude: 'node_modules',
    }),
    new CopyPlugin({
      patterns: [
        { from: './v1', to: './v1' },
        { from: './v2', to: './v2' },
      ],
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js', '...'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    maxEntrypointSize: 912000,
    maxAssetSize: 912000,
  },
  devtool: 'source-map',
  devServer: {
    allowedHosts: 'auto',
    client: {
      overlay: true,
    },
    port: 8000,
    static: {
      directory: path.join(__dirname, 'dist'),
      publicPath: '/',
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.less$/i,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
    ],
  },
}
