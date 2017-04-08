import React from 'react';
import ElasticButtonLink from '../components/ElasticButtonLink';
import GameEndScoreboard from '../containers/GameEndScoreboard';
import Transition from '../components/Transition';

const GameOverScreen = () => (
  <Transition playBackwards>
    <div className="GameOverScreen">
      <ElasticButtonLink id="play" label="Retry" to="/game" />
      <ElasticButtonLink id="mainmenu" label="Main menu" to="/" />
      <GameEndScoreboard />
      <style jsx>{`
        .GameOverScreen {
          align-items: center;
          display: flex;
          flex-direction: column;
          width: 90vw;
        }
      `}</style>
    </div>
  </Transition>
);

export default GameOverScreen;
