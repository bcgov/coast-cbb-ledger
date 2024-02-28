const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      favicon: './public/favicon.ico',
      manifest: './public/manifest.json',
      loginScript: '<script src="../frontend/pages/Login.js"></script>',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /express\/lib\/view\.js/,
        loader: 'ignore-loader',
      },
    ],
  },
  resolve: {
    alias: {
      '@bcgov/design-tokens': path.resolve(__dirname, 'node_modules/@bcgov/design-tokens/dist/index.css'),
    },
    fallback: {
      assert: require.resolve('assert/'),
      async_hooks: false, // Ignore async_hooks
      buffer: require.resolve('buffer/'),
      crypto: require.resolve('crypto-browserify'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      os: require.resolve('os-browserify/browser'),
      path: require.resolve('path-browserify'),
      querystring: require.resolve('querystring-es3'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util/'),
      url: require.resolve('url/'),
      zlib: require.resolve('browserify-zlib'),
    },
  },
  externals: {
    'on-finished': 'commonjs on-finished',
  },
  mode: 'development',
};
