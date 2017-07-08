//HtmlWebpackPlugin is a plugin that takes a template html file and creates a new one in the dist with link and script tags included.
var HtmlWebpackPlugin = require('html-webpack-plugin')
//ExtractWebpackPlugin is a plugin that takes the css bundled code and makes it its own file.
var ExtractWebpackPlugin = require('extract-text-webpack-plugin')
var path = require('path')

var isProd = process.env.NODE_ENV === 'production'
var cssDev = ['style-loader', 'css-loader', 'sass-loader']
var cssProd = ExtractWebpackPlugin.extract({
  fallback: 'style-loader',
  //node-sass must be installed for sass-loader to work
  use: ['css-loader', 'sass-loader'],
  publicPath: './dist'
})
var cssConfig = isProd ? cssProd : cssDev

module.exports = {
    entry: {
      reducer: './src/reducer.js',
      app: './src/components/App/App.js'
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.sass$/,
            use: cssConfig
        },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }]
    },
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 3000,
      //stats determines what info appears in terminal when webpack complies
      stats: "errors-only",
      //openPage determines where the page navigation starts. examples: '/users', '/login', '/about'. Defaults to '/undefined'
      openPage: '',
      //open: true opens new window when devServer starts
      open: true
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Webpack React',
        template: './src/template.html',
        minify: {
            collapseWhitespace: true
        }
    }), new ExtractWebpackPlugin({
        filename: 'styles.css',
        disable: !isProd,
        allChunks: true
    })]
}
