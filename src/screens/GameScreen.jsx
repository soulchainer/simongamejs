import React from 'react';
import ElasticButtonLink from '../components/ElasticButtonLink';
import GameScoreboard from '../containers/GameScoreboard';
import PlayableSimonButtonGroup from '../containers/PlayableSimonButtonGroup';
import Transition from '../components/Transition';

const GameScreen = () => (
  <Transition playBackwards>
    <GameScoreboard />
    <PlayableSimonButtonGroup />
    <ElasticButtonLink id="mainmenu" label="Main menu" to="/" />
  </Transition>
);

export default GameScreen;
