const { NamedModulesPlugin } = require('webpack');

module.exports = neutrino => {
  neutrino.config.plugin('named-modules').use(NamedModulesPlugin);
};