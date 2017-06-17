// HTML <head> customization
const htmlHead = {
  meta: [
    {
      name: 'description',
      content: 'Simple JavaScript Simon game, made with React + Redux.'
    },
    {
      name: 'application-name',
      content: 'React Simon'
    },
    {
      property: 'og:url',
      content: 'http://reactsimon.surge.sh/'
    },
    {
      property: 'og:title',
      content: 'React Simon'
    },
    {
      property: 'og:description',
      content: 'Simple JavaScript Simon game, made with React + Redux.'
    },
    {
      property: 'og:image',
      content: 'http://reactsimon.surge.sh/static/images/simon-fb.png'
    },
    {
      property: 'og:image:width',
      content: '1200'
    },
    {
      property: 'og:image:height',
      content: '630'
    },
    {
      name: 'twitter:card',
      content: 'summary'
    },
    {
      name: 'twitter:creator',
      content: '@juanriqgon'
    },
    {
      name: 'twitter:title',
      content: 'React Simon'
    },
    {
      name: 'twitter:description',
      content: 'Simple JavaScript Simon game, made with React + Redux.'
    },
    {
      name: 'twitter:image',
      content: 'http://reactsimon.surge.sh/static/images/simon-tw.png'
    },
    {
      name: 'twitter:image:alt',
      content: 'Recreation of a Simon game board. The board is a circle divided in four equal parts, each one painted in a different color, from top left to bottom right: green, red, yellow, blue.'
    },
    {
      itemprop: 'name',
      content: 'React Simon'
    },
    {
      itemprop: 'description',
      content: 'Simple JavaScript Simon game, made with React + Redux.'
    },
    {
      itemprop: 'image',
      content: 'http://reactsimon.surge.sh/static/images/simon-tw.png'
    },
    {
      name: 'apple-mobile-web-app-title',
      content: 'React Simon'
    },
    {
      name: 'msapplication-config',
      content: 'browserconfig.xml?v=bOvwlJ27zA'
    },
    {
      name: 'theme-color',
      content: '#393843'
    }
  ],
  links: [
    'https://fonts.googleapis.com/css?family=Francois+One&text=PlaySetingsRNCrdMmuVwoGHbcOvhc0123456789|Titillium+Web:400',
    {
      href: 'humans.txt',
      rel: 'author'
    },
    {
      href: '/static/images/apple-touch-icon.png?v=bOvwlJ27zA',
      sizes: '180x180',
      rel: 'apple-touch-icon'
    },
    {
      href: '/static/images/favicon-32x32.png?v=bOvwlJ27zA',
      type: 'image/png',
      sizes: '32x32',
      rel: 'icon'
    },
    {
      href: '/static/images/favicon-16x16.png?v=bOvwlJ27zA',
      type: 'image/png',
      sizes: '16x16',
      rel: 'icon'
    },
    {
      href: 'manifest.json?v=bOvwlJ27zA',
      rel: 'manifest'
    },
    {
      href: '/static/images/safari-pinned-tab.svg?v=bOvwlJ27zA',
      color: '#393843',
      rel: 'mask-icon'
    },
    {
      href: 'favicon.ico?v=bOvwlJ27zA',
      rel: 'shortcut icon'
    }
  ],
  title: 'React Simon'
};

// function to get a «vendor» chunk
const entryVendor = (neutrino) => neutrino.config
  .entry('vendor')
    .add('animejs')
    .add('lodash.debounce')
    .add('prop-types')
    .add('react')
    .add('react-dom')
    .add('react-redux')
    .add('react-router')
    .add('react-router-dom')
    .add('redux')
    .add('redux-thunk')
    .add('styled-jsx/style');

module.exports = { htmlHead, entryVendor };
