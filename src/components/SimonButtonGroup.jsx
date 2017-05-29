import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { buttonIds as ids, gameModes } from '../constants';
import SimonButton from './SimonButton';
import { SimonButtonGroupCSS } from '../styles/simonButtonGroup';
import { getTransitionAnimation } from '../utils/animation';

class SimonButtonGroup extends Component {
  componentWillMount() {
    this.props.resetGame();
  }

  componentWillReceiveProps(nextProps) {
    const { history, transitionComplete, startGame } = this.props;
    // Start the game only when transition ends
    if (transitionComplete !== nextProps.transitionComplete) startGame();
    // If gameOver, play the transition animation and redirect to /game#gameover
    function onTransitionEnd(finalState) {
      history.push({ pathname: `/game#${finalState}` });
    }
    if (nextProps.gameWon) {
      getTransitionAnimation(onTransitionEnd.bind(this, 'gamewon'), 'reverse').play();
    } else if (nextProps.gameOver) {
      getTransitionAnimation(onTransitionEnd.bind(this, 'gameover'), 'reverse').play();
    }
  }

  componentWillUnmount() {
    // The game route is left (the game ended or user hit Link to StartScreen)
    this.props.onLeaveGame();
  }

  render() {
    const { colors,
            gameMode,
            gameOver,
            gameWon,
            playing,
            simonButtons,
            speed,
            onSimonButtonPressed,
            onSimonButtonReleased } = this.props;
    const gameEnded = gameOver || gameWon;
    const disabledInteraction = 'sequenceerror'.includes(playing) || gameEnded;
    const disableButtons = disabledInteraction ? ' is-disabled-interaction' : '';
    const errorAnimation = (playing === 'error') ? ' is-playing-error' : '';
    const buttons = simonButtons.map((simonButton, index) => (
      <SimonButton
        active={simonButton.active}
        color={colors[index]}
        cpuActive={simonButton.cpuActive}
        gameMode={gameMode}
        key={simonButton.id}
        position={simonButton.position}
        speed={speed}
        onSimonButtonPressed={e => onSimonButtonPressed(e, simonButton.id)}
        onSimonButtonReleased={e => onSimonButtonReleased(e, simonButton.active, simonButton.id)}
      />
    ));

    return (
      <div className={`SimonButtonGroup${disableButtons}${errorAnimation}`}>
        {buttons}
        <style jsx>{SimonButtonGroupCSS}</style>
      </div>
    );
  }
}

SimonButtonGroup.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  colors: PropTypes.arrayOf(PropTypes.oneOf(ids)).isRequired,
  gameMode: PropTypes.oneOf(Object.keys(gameModes)).isRequired,
  gameOver: PropTypes.bool.isRequired,
  gameWon: PropTypes.bool.isRequired,
  playing: PropTypes.oneOf([null, 'sequence', 'error', 'win']),
  simonButtons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOf(ids).isRequired,
    active: PropTypes.bool.isRequired,
    cpuActive: PropTypes.bool.isRequired,
    position: PropTypes.oneOf([
      'top-left', 'top-right', 'bottom-left', 'bottom-right']).isRequired,
  })).isRequired,
  speed: PropTypes.number.isRequired,
  transitionComplete: PropTypes.bool.isRequired,
  onLeaveGame: PropTypes.func.isRequired,
  onSimonButtonPressed: PropTypes.func.isRequired,
  onSimonButtonReleased: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};

SimonButtonGroup.defaultProps = {
  playing: null,
};

export default withRouter(SimonButtonGroup);
