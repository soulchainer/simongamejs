import React from 'react';
import MenuLink from '../components/MenuLink';
import GameScoreboard from '../containers/GameScoreboard';
// import GameOver from '../containers/GameOver';

const GameOverScreen = () => (
  <div>
    <MenuLink label="Retry" to="/game" />
    <MenuLink label="Main menu" to="/" />
    <GameScoreboard />
  </div>
);

export default GameOverScreen;
