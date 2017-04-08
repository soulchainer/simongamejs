import React from 'react';
import ElasticButtonLink from '../components/ElasticButtonLink';
import GameCurrentScoreboard from '../containers/GameCurrentScoreboard';
import PlayableSimonButtonGroup from '../containers/PlayableSimonButtonGroup';
import Transition from '../components/Transition';

const GameScreen = () => (
  <Transition playBackwards>
    <GameCurrentScoreboard />
    <PlayableSimonButtonGroup />
    <ElasticButtonLink id="mainmenu" label="Main menu" to="/" />
  </Transition>
);

export default GameScreen;
