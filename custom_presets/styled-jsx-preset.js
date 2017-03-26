module.exports = neutrino => {
  neutrino.config.module
    .rule('compile')
    .use('babel')
    .tap(options => {
        options.plugins = [...options.plugins, 'styled-jsx/babel'];

        return options;
      });
};
