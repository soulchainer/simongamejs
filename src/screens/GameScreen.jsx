import React, { Component, PropTypes } from 'react';
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
      </div>
    );
  }
}

GameScreen.propTypes = {
  transitionComplete: PropTypes.bool.isRequired,
};

export default withTransition(GameScreen, { playBackwards: true });
