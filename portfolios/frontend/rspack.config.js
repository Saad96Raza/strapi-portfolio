const path = require('path');
const rspack = require('@rspack/core');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
dotenv.config({ override: true });

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDev ? 'development' : 'production',
  devtool: false, 
  entry: {
    main: path.resolve(__dirname, 'src/index.jsx'),
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
    clean: true,
  },

  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    compress: true,
    port: 3000,
    hot: true,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'ecmascript',
                jsx: true,
              },
            },
          },
        },
        type: 'javascript/auto',
      },
      {
        test: /\.tsx$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
                tsx: true,
              },
            },
          },
        },
        type: 'javascript/auto',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          rspack.CssExtractRspackPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'media/[name][ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },

  plugins: [
    new rspack.CssExtractRspackPlugin({
      filename: 'css/[name].css',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html', // your HTML template
      inject: 'body',
    }),
    new rspack.DefinePlugin({
      'process.env.FEATURES_API': JSON.stringify(process.env.FEATURES_API),
      'process.env.HOME_SLIDER_API': JSON.stringify(process.env.HOME_SLIDER_API),
      'process.env.CONTACT_FORM_FIELDS': JSON.stringify(process.env.CONTACT_FORM_FIELDS),
      'process.env.RESUME': JSON.stringify(process.env.RESUME),
    }),
  ],
};
