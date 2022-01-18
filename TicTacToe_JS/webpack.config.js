module.exports = {
  entry: './src/app.jsx',
  output: {
    filename: './bundle.js'
  },
  resolve: {
    extensions: [".ts",".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      { test: /\.(t|j)sx?$/, exclude: /node_modules/, use: { loader: 'ts-loader' } },
       // addition - add source-map support
      { enforce: "pre", test: /\.js$/, exclude: /node_modules/, loader: "source-map-loader" }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  },
  // addition - add source-map support
  devtool: "source-map"
}
