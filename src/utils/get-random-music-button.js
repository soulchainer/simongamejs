import { buttonIds as ids } from 'constants';

const getRandomMusicButton = () => ids[Math.floor(Math.random() * ids.length)];

export default getRandomMusicButton;
