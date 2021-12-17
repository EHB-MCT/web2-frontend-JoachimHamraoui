const path = require('path');

// https://webpack.js.org/concepts/output/#multiple-entry-points many thanks to Mike Derycke

module.exports = {
  mode: "development",
  entry: {
    masonry: './src/masonry.js',
    villager: './src/villager.js',
    bugs: './src/bugs.js',
    fish: './src/fish.js',
    art: './src/art.js',
    seacreatures: './src/seacreatures.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
  },
};