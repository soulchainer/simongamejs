const ids = [
  'green',
  'yellow',
  'blue',
  'red'
];

const getRandomMusicButton = () => ids[Math.floor(Math.random() * ids.length)];

export default getRandomMusicButton;