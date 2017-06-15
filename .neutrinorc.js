import { htmlHead, entryVendor } from './.neutrinorcConstants';

module.exports = {
  use: [
    'neutrino-preset-react',
    entryVendor,
    (neutrino) => neutrino.config.resolve('extensions').add('.jsx'),
    'neutrino-preset-airbnb',
    'neutrino-preset-styled-jsx',
    'custom_presets/set-eslint-envs.js',
    'custom_presets/custom-build-copy.js',
  ],
  options: {
    html: htmlHead,
  },
};
