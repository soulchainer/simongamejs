const copy = require('neutrino-middleware-copy');

module.exports = (neutrino) => {
  neutrino.use(copy);

  neutrino.use(copy, {
    patterns: [
      { context: neutrino.options.source, from: '**/*' },
      { from: 'src/manifest.json' },
    ],
    options: { ignore: ['*(!(manifest)).js*'] }
  });
};
