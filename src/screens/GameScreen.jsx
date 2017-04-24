import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ElasticButtonLink from '../components/ElasticButtonLink';
import GameCurrentScoreboard from '../containers/GameCurrentScoreboard';
import PlayableSimonButtonGroup from '../containers/PlayableSimonButtonGroup';
import withTransition from '../hocs/withTransition';

class GameScreen extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { transitionComplete } = this.props;
    return (
      <div className="GameScreen">
        <GameCurrentScoreboard />
        <PlayableSimonButtonGroup transitionComplete={transitionComplete} />
        <ElasticButtonLink id="mainmenu" label="Main menu" to="/" />
        <style jsx>{`
          .GameScreen {
            align-items: center;
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: center;
          }
        `}</style>
      </div>
    );
  }
}

GameScreen.propTypes = {
  transitionComplete: PropTypes.bool.isRequired,
};

export default withTransition(GameScreen);
