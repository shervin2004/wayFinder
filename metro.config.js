const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);
  config.resolver.assetExts.push('glb'); // Add support for .glb files
  return config;
})();