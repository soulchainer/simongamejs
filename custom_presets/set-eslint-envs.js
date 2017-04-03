module.exports = neutrino => {
  neutrino.config.module
    .rule('lint')
    .use('eslint')
    .tap(options => Object.assign(options, { envs: ['browser', 'es6', 'node'] }));
};