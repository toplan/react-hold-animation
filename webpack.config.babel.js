import webpack from 'webpack';
import path from 'path';

const { NODE_ENV } = process.env;

const plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
  }),
];

const filename = `react-hold-animation${NODE_ENV === 'production' ? '.min' : ''}.js`;

NODE_ENV === 'production'  && plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      pure_getters: true,
      unsafe: true,
      unsafe_comps: true,
      screw_ie8: true,
      warnings: false,
    },
  })
);

export default {
  entry: [
    './src/index',
  ],

  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },

  output: {
    path: path.join(__dirname, 'umd'),
    filename,
    library: 'ReactHoldAnimation',
    libraryTarget: 'umd',
  },

  plugins,
};
