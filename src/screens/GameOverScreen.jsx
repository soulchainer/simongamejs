import React from 'react';
import WrappedLink from '../components/WrappedLink';
import GameScoreboard from '../containers/GameScoreboard';
// import GameOver from '../containers/GameOver';

const GameOverScreen = () => (
  <div>
    <WrappedLink label="Retry" to="/game" />
    <WrappedLink label="Main menu" to="/" />
    <GameScoreboard />
  </div>
);

export default GameOverScreen;
