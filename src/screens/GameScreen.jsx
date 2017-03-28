import React from 'react';
import { Link } from 'react-router-dom';
import GameScoreboard from '../containers/GameScoreboard';
import PlayableSimonButtonGroup from '../containers/PlayableSimonButtonGroup';

const Game = () => (
  <div>
    <GameScoreboard />
    <PlayableSimonButtonGroup />
    <Link to="/">Home</Link>
  </div>
);

export default Game;
