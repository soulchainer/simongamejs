import PropTypes from 'prop-types';
import React from 'react';
import ButtonLink from '../components/ButtonLink';
import GameEndScoreboard from '../containers/GameEndScoreboard';
import { APP_TITLE } from '../constants';
import { GameEndScreenCSS } from '../styles/gameEndScreen';

const GameEndScreen = ({ gameStateTitle, gameWon, playButtonLabel }) => {
  document.title = `${APP_TITLE} | ${gameStateTitle}`;
  return (
    <div className="GameEndScreen">
      <header
        className={`GameEndScreen-header ${(gameWon) ?
                'u-textOutlineGameWon' : 'u-textOutlineGameOver'}`}
      >
        {gameStateTitle}
      </header>
      <nav className="GameEndScreen-menu">
        <ul>
          <li><ButtonLink id="play" label={playButtonLabel} to="/game" /></li>
          <li><ButtonLink id="mainmenu" label="Main menu" to="/" /></li>
        </ul>
      </nav>
      <GameEndScoreboard />
      <style jsx>{GameEndScreenCSS}</style>
    </div>
  );
};

GameEndScreen.propTypes = {
  gameStateTitle: PropTypes.string.isRequired,
  gameWon: PropTypes.bool.isRequired,
  playButtonLabel: PropTypes.string.isRequired,
};

export default GameEndScreen;
