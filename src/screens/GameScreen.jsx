import React from 'react';
import { Link } from 'react-router-dom';
import GameScoreboard from '../containers/GameScoreboard';
import PlayableSimonButtonGroup from '../containers/PlayableSimonButtonGroup';

const GameScreen = () => (
  <div>
    <GameScoreboard />
    <PlayableSimonButtonGroup />
    <Link to="/">Main menu</Link>
  </div>
);

export default GameScreen;
