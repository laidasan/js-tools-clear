const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './example/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: file => (
          /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
        ),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader'
      }
    ]
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'example'),
    port: 8080
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm.js',
      'source': path.resolve(__dirname,'source')
    }
  }
}