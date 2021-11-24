/* eslint-env node */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },

    module: {
      rules: [
          {
              test: /\.s[ac]ss$/i,
              use: ['vue-style-loader', 'css-loader', 'sass-loader']
          },

          {
              test: /\.(ts|tsx)$/i,
              loader: 'ts-loader',
              options: {
                  appendTsSuffixTo: [/\.vue$/]
              },
              exclude: /node_modules/
          },

          {
              test: /\.vue$/,
              use: 'vue-loader'
          }
      ]  
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
            //configure full build of Vue (runtime+compiler). See: https://github.com/vuejs/vue/tree/dev/dist#runtime--compiler-vs-runtime-only
            'vue': 'vue/dist/vue.esm-bundler.js'
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
          title: 'DOTS'
        }),

        new VueLoaderPlugin(),

        //it's some settings for Vue (see: https://github.com/vuejs/vue-next/tree/master/packages/vue#bundler-build-feature-flags)
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: true
        })
    ],

    devtool: 'inline-source-map',

    devServer: {
        static: './dist',
    }
}