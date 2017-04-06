import React from 'react';
import ElasticButtonLink from '../components/ElasticButtonLink';
import GameScoreboard from '../containers/GameScoreboard';
// import GameOver from '../containers/GameOver';

const GameOverScreen = () => (
  <div>
    <ElasticButtonLink id="play" label="Retry" to="/game" />
    <ElasticButtonLink id="mainmenu" label="Main menu" to="/" />
    <GameScoreboard />
  </div>
);

export default GameOverScreen;
