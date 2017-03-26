import React from 'react';
import GameScoreboard from '../containers/GameScoreboard';
import PlayableSimonButtonGroup from '../containers/PlayableSimonButtonGroup';
import { colors } from '../constants';

const Game = () => (
  <div>
    <GameScoreboard />
    <PlayableSimonButtonGroup />
    <style jsx global>{`
      body {
        margin: 0;
      }

      #root {
        align-items: center;
        background-color: ${colors.black};
        display: flex;
        justify-content: center;
        height: 100vh;
        margin: 0;
        width: 100vw;
      }
    `}</style>
  </div>
);

export default Game;
