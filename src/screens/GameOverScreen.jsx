import React, { Component } from 'react';
import ButtonLink from '../components/ButtonLink';
import GameEndScoreboard from '../containers/GameEndScoreboard';
import withTransition from '../hocs/withTransition';
import { colors } from '../constants';

class GameOverScreen extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="GameOverScreen">
        <header className="GameOverScreen-header u-textOutline">Game Over</header>
        <nav className="GameOverScreen-menu">
          <ul>
            <li><ButtonLink id="play" label="Retry" to="/game" /></li>
            <li><ButtonLink id="mainmenu" label="Main menu" to="/" /></li>
          </ul>
        </nav>
        <GameEndScoreboard />
        <style jsx>{`
          .GameOverScreen {
            align-items: center;
            display: flex;
            flex-direction: column;
            width: 90vw;
          }

          .GameOverScreen-header {
            color: ${colors.white};
            font-family: 'Francois One', sans-serif;
            font-size: 3rem;
            letter-spacing: .1em;
            max-width: 90%;
            text-align: center;
          }

          .u-textOutline {
            text-shadow: 0 2px 2px ${colors.red}, 0 -2px 2px ${colors.red}, 2px 0 2px ${colors.red}, -2px 0 2px ${colors.red};
          }

          .GameOverScreen-menu {
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
  }
}

export default withTransition(GameOverScreen);
