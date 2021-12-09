const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => ({
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'js/bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          env.production ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          'css-loader',
          'sass-loader'],
      },
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.(jpg|png|svg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name]-[hash][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name]-[hash][ext]',
        },
      },

    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      // configure full build of Vue (runtime+compiler). See: https://github.com/vuejs/vue/tree/dev/dist#runtime--compiler-vs-runtime-only
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),

    new VueLoaderPlugin(),

    // it's some settings for Vue (see: https://github.com/vuejs/vue-next/tree/master/packages/vue#bundler-build-feature-flags)
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: true,
    }),

    new ESLintPlugin({
      context: path.resolve(__dirname, 'src'),
      extensions: ['vue', 'js', 'ts'],
      emitError: true,
      emitWarning: false,
      failOnError: true,
      failOnWarning: false,
    }),

    new StyleLintPlugin({
      files: [path.resolve(__dirname, 'src/**/*.{scss,vue}')],
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/favicon.png'), to: path.resolve(__dirname, 'dist') },
      ],
    }),

    new MiniCssExtractPlugin({
      filename: 'styles/style.css',
    }),
  ],

  devtool: 'inline-source-map',

  devServer: {
    static: './dist',
  },
});
