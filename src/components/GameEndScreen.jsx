import PropTypes from 'prop-types';
import React from 'react';
// import { withRouter } from 'react-router';
import ButtonLink from '../components/ButtonLink';
import GameEndScoreboard from '../containers/GameEndScoreboard';
import { colors } from '../constants';

const GameEndScreen = ({ gameStateTitle, gameWon, playButtonLabel }) => (
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
    <style jsx>{`
      .GameEndScreen {
        align-items: center;
        display: flex;
        flex-direction: column;
        padding: 2rem 0;
        width: 90vw;
      }

      .GameEndScreen-header {
        color: ${colors.white};
        font-family: 'Francois One', sans-serif;
        font-size: 3rem;
        letter-spacing: .1em;
        max-width: 90%;
        text-align: center;
      }

      .u-textOutlineGameOver {
        text-shadow: 0 2px 2px ${colors.red}, 0 -2px 2px ${colors.red}, 2px 0 2px ${colors.red}, -2px 0 2px ${colors.red};
      }

      .u-textOutlineGameWon {
        text-shadow: 0 2px 2px ${colors.green}, 0 -2px 2px ${colors.green}, 2px 0 2px ${colors.green}, -2px 0 2px ${colors.green};
      }

      .GameEndScreen-menu {
        align-items: center;
        display: flex;
        justify-content: center;
      }

      ul {
        align-items: center;
        display: flex;
        flex-direction: column;
        list-style: none;
        margin-top: 5vmin;
        max-width: 80%;
        padding-left: 0;
      }

      li {
        align-items: center;
        display: flex;
        justify-content: center;
        padding: 1rem 0;
      }
    `}</style>
  </div>
);

GameEndScreen.propTypes = {
  gameStateTitle: PropTypes.string.isRequired,
  // history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  gameWon: PropTypes.bool.isRequired,
  playButtonLabel: PropTypes.string.isRequired,
};

export default GameEndScreen;
