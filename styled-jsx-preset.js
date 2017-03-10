module.exports = neutrino => {
  neutrino.config.module
    .rule('compile')
      .loader('babel', ({ options }) => {
        options.plugins = [...options.plugins, 'styled-jsx/babel'];

        return { options };
      });
};
