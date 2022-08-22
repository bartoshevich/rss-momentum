
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');



const devServer = (isDev) => !isDev ? {} : {
    devServer: {
      open: true,
      port: 8080,
    //   contentBase: path.join(__dirname, 'images'),
    },
  };



module.exports = ({ development }) => ({
    mode: development ? 'development' : 'production',
    devtool: development ? 'inline-source-map' : false,
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[hash][ext]',
      },
    plugins: [
      
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        new HtmlWebPackPlugin({ template: './src/index.html' }),
        new CopyPlugin({
          patterns: [
            { from: './src/assets/favicons' }, 
            { from: './src/assets/public' }, 
            { from: './src/assets/sounds' }, 
            { from: './src/assets/images', to: 'images' }
           ],
        }),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      ],
    module: {
        rules: [
          {
            test: /\.(?:ico|gif|png|jpg|jpeg|svg|avif|webp)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(woff(2)?|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.mp3$/i,
            type: 'asset/resource',
          },
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
          {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
          },
          {
            test: /\.json/,
            loader: "json-loader"
          }
        ],
      },
      resolve: {
        extensions: ['.ts', '.js'],
      },
      ...devServer(development)
    });
