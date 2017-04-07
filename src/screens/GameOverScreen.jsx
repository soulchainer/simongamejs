import React from 'react';
import ElasticButtonLink from '../components/ElasticButtonLink';
import GameScoreboard from '../containers/GameScoreboard';
// import GameOver from '../containers/GameOver';
import Transition from '../components/Transition';

const GameOverScreen = () => (
  <Transition playBackwards>
    <ElasticButtonLink id="play" label="Retry" to="/game" />
    <ElasticButtonLink id="mainmenu" label="Main menu" to="/" />
    <GameScoreboard />
  </Transition>
);

export default GameOverScreen;
