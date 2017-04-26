import React, { Component } from 'react';
import ButtonLink from '../components/ButtonLink';
import GameEndScoreboard from '../containers/GameEndScoreboard';
import withTransition from '../hocs/withTransition';

class GameOverScreen extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="GameOverScreen">
        <ButtonLink id="play" label="Retry" to="/game" />
        <ButtonLink id="mainmenu" label="Main menu" to="/" />
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
    );
  }
}

export default withTransition(GameOverScreen);
