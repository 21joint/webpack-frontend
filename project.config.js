const path = require('path');

let config = {};

config = {
  appTitle: 'Wilmington Header',
  cssPrefix: 'wbv',
  dirNode: path.join(__dirname, 'node_modules'),
  dirSrc: path.join(__dirname, 'src'),
  dirAssets: path.join(__dirname,'src/assets'),
  dirFonts: path.join(__dirname, 'src/assets/fonts'),
  dirImages: path.join(__dirname, 'src/assets/images'),
};

module.exports = config;