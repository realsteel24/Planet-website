module.exports = {
  // ... other webpack config
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }
      // ... other rules
    ]
  }
};