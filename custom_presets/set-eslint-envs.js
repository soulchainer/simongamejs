const eslint = require('neutrino-middleware-eslint');

module.exports = neutrino => {
  neutrino.use(eslint, {
    eslint: {
      baseConfig: { extends: ['airbnb'] },
      envs: ['browser', 'es6', 'node'],
    },
  });
};
